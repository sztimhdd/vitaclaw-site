# KB v2 部署诊断报告 — OmniGraph Agent 需修复项

> **日期：** 2026-05-14  
> **目标：** KB-3 中修复以下 4 类问题，之后无需本地 monkey-patch  
> **注意：** 本地临时 patch 仅用于验证可行性，不应合并

---

## 问题 1: 数据库 Schema 不匹配 — `extracted_entities` 表

### 事实

`kol_scan.db` 中 `extracted_entities` 表的实际 schema：

```sql
CREATE TABLE extracted_entities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    article_id INTEGER NOT NULL REFERENCES articles(id),
    entity_name TEXT NOT NULL,      -- ← 列名是 entity_name，不是 name
    entity_type TEXT,
    extracted_at TEXT DEFAULT (datetime('now', 'localtime'))
);
-- 注意：没有 source 列
```

### 代码中的错误引用

**文件 `kb/data/article_query.py`** 中有 3 处使用了不存在的列名：

| 行号(约) | 错误写法 | 应改为 | 所在函数 |
|----------|---------|--------|---------|
| `e.name` | `e.entity_name` | `related_entities_for_article()` |
| `WHERE name = ?` | `WHERE entity_name = ?` | `entity_articles_query()` |
| `WHERE name = e.name` | `WHERE entity_name = e.entity_name` | `cooccurring_entities_in_topic()` |
| `COUNT(... article_id \|\| '-' \|\| source)` | `COUNT(DISTINCT article_id)` | 多处，`source` 列不存在 |
| `AND e.source = 'wechat'` | 删除此条件 | `entity_articles_query()`, `related_entities_for_article()` |
| `AND e.source = 'rss'` | 删除此条件 | 同上 |

**文件 `kb/export_knowledge_base.py`** 中 `_discover_qualifying_entities()` 函数：

| 行号(约) | 错误写法 | 应改为 |
|----------|---------|--------|
| `COUNT(... e.source)` | `COUNT(DISTINCT e.article_id)` |
| `LEFT JOIN articles a ON e.source = 'wechat' AND a.id = e.article_id` | `LEFT JOIN articles a ON a.id = e.article_id` |
| `LEFT JOIN rss_articles r ON e.source = 'rss' AND r.id = e.article_id` | 删除此行 |
| `COALESCE(a.lang, r.lang)` | `a.lang` |

### 建议修复方案

不需要修改数据库 schema。所有已提取的 entity 的 `article_id` 范围是 1-905（`articles` 表范围），没有 RSS 文章的 entity。因此删除 `source` 列依赖即可正确工作。

**如果未来需要支持 RSS 文章的 entity 提取**，应通过 migration 添加 `source` 列：
```sql
ALTER TABLE extracted_entities ADD COLUMN source TEXT DEFAULT 'wechat';
```

---

## 问题 2: 数据库 Schema 不匹配 — `classifications` 表

### 事实

```sql
CREATE TABLE classifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    article_id INTEGER NOT NULL REFERENCES articles(id),
    topic TEXT NOT NULL,
    depth_score INTEGER CHECK(depth_score BETWEEN 1 AND 3),
    ...
);
-- 注意：没有 source 列
-- 当前数据：SELECT COUNT(*) FROM classifications → 0（表为空！）
```

### 代码中的错误引用

**`kb/data/article_query.py` — `topic_articles_query()`：**

| 行号(约) | 错误写法 | 应改为 |
|----------|---------|--------|
| `AND c.source = 'wechat'` | 删除此条件 |
| `AND c.source = 'rss'` | 删除此条件 |

### 影响

Topic pillar 页面（Agent/CV/LLM/NLP/RAG）渲染成功，但每个 topic 显示 **0 篇文章**。因为 `classifications` 表为空，`topic_articles_query()` 返回空列表。

### 建议

KB-3 需要实现 topic 分类流水线来填充 `classifications` 表。如果分类逻辑依赖 `source` 列，需先执行 migration 添加该列。

---

## 问题 3: 静态资源路径硬编码 — 不支持子目录部署

### 事实

KB 部署在 `/kb/` 子目录（`http://101.133.154.49/kb/`），但所有 Jinja2 模板使用绝对路径：

```html
<!-- kb/templates/base.html -->
<link rel="stylesheet" href="/static/style.css">     <!-- ❌ 浏览器请求 /static/style.css，不是 /kb/static/style.css -->
<script src="/static/lang.js">                         <!-- ❌ 同上 -->
<img src="/static/VitaClaw-Logo-v0.png">               <!-- ❌ 同上 -->

<!-- 导航链接 -->
<a href="/">                    <!-- ❌ 跳回 vitaclaw-site 主页 -->
<a href="/articles/">          <!-- ❌ 被 Caddy catch-all 拦截，返回 SPA index.html -->
<a href="/ask/">               <!-- ❌ 同上 -->
```

### 影响

- CSS/JS 请求被 Caddy catch-all handle 拦截 → 返回 `text/html`（SPA index.html）→ 浏览器解析失败 → **页面格式全部丢失**
- 所有导航链接被 Caddy catch-all 拦截 → 回退到 vitaclaw-site SPA → **看起来"跳回主页"**

### 建议修复方案

**方案 A（推荐）：** 在 `kb/config.py` 添加 `KB_BASE_PATH` 配置项，在模板中注入为前缀。

```python
# kb/config.py
KB_BASE_PATH: str = os.environ.get("KB_BASE_PATH") or ""
```

然后在 export 脚本中传递给模板上下文：
```python
env.globals['base_path'] = config.KB_BASE_PATH
```

模板中改为：
```html
<link rel="stylesheet" href="{{ base_path }}/static/style.css">
<a href="{{ base_path }}/articles/">
```

**方案 B：** 在 `static/lang.js` 中添加运行时 base path 检测逻辑。

---

## 问题 4: 缺少 `entities/index.html` 和 `topics/index.html`

### 事实

KB 首页（`index.html`）有"查看全部 →"链接指向 `/entities/` 和 `/topics/`：
```html
<a href="/entities/">查看全部 →</a>
<a href="/topics/">查看全部 →</a>
```

但 export 脚本 `render_index_pages()` 只为 `articles/`、`ask/` 生成了 `index.html`，**未为 `entities/` 和 `topics/` 生成索引页**。访问 `/entities/` → Caddy `try_files` 找不到 `{path}/index.html` → fallback 到 `/index.html`（KB 首页），用户体验混乱。

### 建议修复

在 `kb/export_knowledge_base.py` 的 `render_index_pages()` 或单独的渲染函数中，添加实体索引页和主题索引页的生成逻辑。

---

## 摘要

| # | 类别 | 严重程度 | 文件 | 修复方式 |
|---|------|---------|------|---------|
| 1 | Schema mismatch (`name`→`entity_name`, `source`列不存在) | 🔴 阻断 | `article_query.py` + `export_knowledge_base.py` | 修改 SQL 列引用 |
| 2 | `classifications` 表为空 | 🟡 功能缺位 | `article_query.py` | KB-3 实现分类流水线 |
| 3 | 绝对路径硬编码 | 🔴 阻断 | 所有模板 `.html` 文件 | 添加 `KB_BASE_PATH` config |
| 4 | 缺少 entity/topic 索引页 | 🟡 体验缺陷 | `export_knowledge_base.py` | 添加索引页渲染逻辑 |

## 部署环境信息

- **服务器：** 阿里云 ECS (101.133.154.49)  
- **KB URL：** `http://101.133.154.49/kb/`  
- **Caddy 配置：** `handle /kb/*` → `file_server` `/var/www/kb`（strip_prefix /kb）  
- **DB 路径：** `/root/OmniGraph-Vault/data/kol_scan.db`  
- **export 命令：** `KB_DB_PATH=/root/OmniGraph-Vault/data/kol_scan.db python3 kb/export_knowledge_base.py`
