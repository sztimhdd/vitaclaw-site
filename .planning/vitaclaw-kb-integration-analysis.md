# vitaclaw-site ↔ KB v2 集成分析

> **基于 OmniGraph-Vault `kb/` 目录实际代码的分析。**  
> **日期：** 2026-05-13  
> **状态：** 已锁定 D-21/22/23 — Phase 1 静态集成实施中

---

## 1. OmniGraph Agent 已完成什么

### ✅ KB-1: SSG 导出基础（已完成）

| 组件 | 文件 | 状态 |
|------|------|------|
| 导出脚本 | `kb/export_knowledge_base.py` | ✅ 完整实现（~600行） |
| 数据查询层 | `kb/data/article_query.py` | ✅ 5个核心函数 |
| 配置 | `kb/config.py` | ✅ 全env驱动 |
| i18n | `kb/i18n.py` + `kb/locale/` | ✅ 中英双语 |
| 模板 | `kb/templates/*.html` | ✅ 7个模板 |
| 样式 | `kb/static/style.css` | ✅ 暗色主题，1737行 |

**模板清单：**
- `base.html` — 基础布局（导航、页脚、SEO meta）
- `index.html` — KB首页（搜索框、热门标签、文章列表）
- `article.html` — 文章详情页
- `articles_index.html` — 文章列表/搜索结果
- `ask.html` — Q&A问答页（含表单和热门问题）
- `_icons.html` — SVG图标组件

**设计亮点：**
- 与vitaclaw-site共享设计Token（`#0f172a`暗色主题、`#3b82f6`强调蓝）
- 双语切换（zh-CN/en）通过`<span data-lang="zh">`实现
- 响应式布局（mobile-first）
- 文章卡片、面包屑、标签云等组件完备

### ⏳ KB-2: 实体/主题页（计划中）

OmniGraph agent已创建详细的10步实施计划（`.planning/phases/kb-2-topic-pillar-entity-pages/`），但**代码尚未实现**。

### ❌ KB-3: FastAPI后端（未开始）

- `api.py` 不存在
- FTS5搜索、kg_synthesize问答均未实现
- 这是KB的**动态核心**，当前只有静态SSG

### ❌ KB-4: 部署（未开始）

- systemd service、Caddy配置、cron均未配置
- `kb/output/` 目录为空（export未运行）

---

## 2. vitaclaw-site 与 KB 的关系定位

根据我们之前的决策（D-05）:

```
vitaclaw-site        OmniGraph-Vault/kb/
     │                       │
     │  营销首页（已部署）      │  知识库（开发中）
     │  • Hero               │  • SEO文章
     │  • 行业案例           │  • 问答引擎
     │  • Agent新闻          │  • 实体百科
     │  • 产品助手           │
     │                       │
     └────── Caddy :443 ─────┘
              │
       ┌──────┴──────┐
       │             │
    /* → :3001    /kb/* → :8766
   (vitaclaw)     (知识库FastAPI)
```

**核心原则：**
- vitaclaw-site = **转化漏斗**（吸引 → 信任 → 试用）
- KB = **SEO吸铁石 + 技术展示**（搜索流量 → 专业内容 → 品牌信任）
- 两者互补，不是替代

---

## 3. 集成方案建议

### 方案 A：子目录集成（`/kb/`）✅ 已决策并实施

**架构（Phase 1 — 静态文件，KB-3 已延期）：**
```
ohca.ddns.net/
├── /                    → vitaclaw-site :3001
├── /api/*              → vitaclaw-site :3001（助手API）
└── /kb/*               → Caddy file_server → kb/output/（静态HTML）
    ├── /               → KB首页
    ├── /articles/      → 文章列表
    ├── /articles/{hash} → 文章详情
    └── /ask/           → 问答页（静态模板，搜索需等KB-3）
```

**优势：**
- 零新增域名，无需ICP备案
- 品牌一致（同一域名）
- SEO权重共享（子目录继承主域权威）
- Caddy配置简单（file_server 即可，无需反代）

**劣势：**
- KB和vitaclaw-site共享域名，如果KB出问题可能影响主站感知
- URL较短但语义清晰（`/kb/articles/xxx`）

**实施步骤（已完成）：**
1. ✅ vitaclaw-site navbar添加"知识库"按钮（外部链接图标，新标签页打开）→ `/kb/`
2. ✅ vitaclaw-site Hero添加"浏览技术文章"次CTA → `/kb/`
3. ✅ vitaclaw-site Footer添加"技术知识库"链接 → `/kb/`
4. ✅ Caddy增加：`handle /kb/*` → `file_server` 静态文件（kb/output/）
5. ⏳ KB的base模板中品牌链接回vitaclaw-site首页（等OmniGraph更新）

---

### 方案 B：子域名集成（`kb.qixiaoqin.com`）

**架构：**
```
ohca.ddns.net/         → vitaclaw-site :3001
kb.qixiaoqin.com/      → KB :8766
```

**优势：**
- 完全独立，互不影响
- 品牌清晰（kb子域名=知识库）
- 可以独立部署和扩展

**劣势：**
- 需要ICP备案（2-3周）
- 需要DNS配置
- SEO权重不共享（子域名视为独立站点）

**实施步骤：**
1. ICP备案 `kb.qixiaoqin.com`
2. DNS指向Hermes ECS IP
3. Caddy配置新site block
4. vitaclaw-site CTA链接到 `kb.qixiaoqin.com`

---

## 4. vitaclaw-site 侧需要做的改动

### 4.1 导航集成（工作量：1小时）

**文件：** `src/components/navbar.tsx`

在现有导航项后添加"知识库"入口：
```tsx
<a href="/knowledge/" target="_blank" rel="noopener noreferrer">
  知识库
</a>
```

或使用外部链接图标表示跳转到子系统。

### 4.2 CTA链接优化（工作量：30分钟）

**文件：** `src/components/hero.tsx`, `src/components/cta.tsx`

将部分CTA从"预约演示"改为"查看知识库"或"了解技术方案"：
```tsx
<a href="/knowledge/" className="btn btn-secondary">
  浏览知识库 →
</a>
```

这样给用户一个**低门槛选项**：先看内容建立信任，再决定是否试用。

### 4.3 Footer链接（工作量：15分钟）

**文件：** `src/components/footer.tsx`

在footer添加KB链接和sitemap引用。

### 4.4 资产共享（工作量：已自动处理）

KB模板已引用vitaclaw-site的logo和favicon：
- `/static/VitaClaw-Logo-v0.png`（graceful degradation，缺失时隐藏）
- `/static/favicon.svg`

**注意：** 部署时需确保这些静态文件在KB的static目录或Caddy能serve到。

---

## 5. 部署协调

### 当前部署状态

| 服务 | 端口 | 状态 | 说明 |
|------|------|------|------|
| vitaclaw-site | :3001 | ✅ 已部署 | Node.js API + 静态SPA |
| KB static | — | ⏳ 待生成 | export运行后Caddy直接serve |
| KB FastAPI | :8766 | ❌ 未启动 | KB-3延期，api.py不存在 |
| Caddy | :443 | ✅ 运行中 | 新增 `/kb/*` → file_server |

### 部署KB所需步骤（Phase 1 — 静态优先）

1. ✅ **vitaclaw侧更新导航** — navbar + Hero + Footer 链接已添加
2. ✅ **vitaclaw侧更新Caddy配置** — `/kb/*` → `file_server` 已配置
3. ⏳ **OmniGraph侧运行export** — 生成静态HTML到 `kb/output/`（**必须在Hermes执行**，DB仅存在于服务器）
4. ⏳ **OmniGraph侧同步output到部署目录** — rsync `kb/output/` → `/opt/vitaclaw/OmniGraph-Vault/kb/output/`
5. ⏳ **部署vitaclaw-site** — GitHub Actions build + Caddy reload

### Phase 2 后续（KB-3完成后）

1. OmniGraph侧完成 `api.py`（FastAPI后端）
2. Caddy `/kb/*` 从 `file_server` 切为 `reverse_proxy localhost:8766`
3. 启动 systemd + uvicorn 服务
4. 设置 cron 每日 export + reload

---

## 6. 关键决策点

### D-21: 集成路径选择 ✅ 已决策

| 选项 | 工作量 | SEO影响 | 品牌一致性 | 状态 |
|------|--------|---------|-----------|------|
| A: `/kb/`子目录 | 1天 | ✅ 权重共享 | ✅ 同一域名 | ✅ **已实施** |
| B: `kb.qixiaoqin.com`子域名 | +14天(ICP) | ⚠️ 独立权重 | ✅ 品牌清晰 | ⏳ 未来可选 |

**决策理由：** 当前未配置主站域名和HTTPS，先用 `/kb/` 零成本集成，后续域名就绪后可无缝迁移。

### D-22: 导航入口策略 ✅ 已实施

| 位置 | 链接文案 | 目标 | 样式 |
|------|---------|------|------|
| Navbar | "知识库" | `/kb/` | 独立按钮（边框+书图标+外部链接图标），新标签页打开 |
| Hero次CTA | "浏览技术文章" | `/kb/` | 三级按钮（淡边框+书图标+外部链接图标），flex-wrap自动换行 |
| Footer | "技术知识库" | `/kb/` | 普通链接，资源列首位 |

**设计意图：** Navbar按钮使用 `border + hover:border-accent/30` 区分于普通文本链接，书图标+外部链接图标明确表示这是跳转到另一个子系统。不竞争主CTA "免费试用" 的视觉层级。

### D-23: 集成时机决策 ✅ 已实施

**决策：现在集成 Phase 1（静态SSG），后续迭代 KB-2/KB-3。**

- **已集成（vitaclaw侧）：** 导航链接、CTA、Footer、Caddy配置
- **已延期（OmniGraph侧）：** KB-2 实体/主题页、KB-3 FastAPI/搜索/问答
- **当前交付物：** 静态HTML文集（SEO吸铁石），无需后端即可运行
- **回链：** KB页脚应添加"回到企小勤官网"链接到 `/`（等OmniGraph更新模板）

---

## 7. 实施优先级

### Phase 1: 最小集成（1天）✅ 已完成

**目标：** 让vitaclaw-site用户能点击跳转到KB首页

**任务：**
- [x] vitaclaw navbar添加"知识库"链接（外部图标，新标签页）
- [x] vitaclaw Hero CTA添加"浏览技术文章"选项（三级按钮）
- [x] vitaclaw Footer添加"技术知识库"链接
- [x] Caddy配置`/kb/*` → `file_server`（kb/output/静态文件）
- [ ] KB页脚添加回链到vitaclaw（等OmniGraph更新模板）
- [ ] OmniGraph运行export生成`kb/output/`（必须在Hermes执行）
- [ ] rsync `kb/output/` 到服务器部署目录
- [ ] 部署vitaclaw-site并reload Caddy

**阻塞解除：** 无需KB-3，静态文件直接Caddy serve。

### Phase 2: 深度集成（2-3天）

**目标：** 无缝用户体验，共享设计系统

**任务：**
- [ ] 统一设计Token（确认KB CSS和vitaclaw-site完全一致）
- [ ] 共享组件（按钮、卡片、标签样式对齐）
- [ ] vitaclaw-site Agent新闻和KB文章互引
- [ ] 搜索框集成（vitaclaw搜索可以搜索KB内容）

### Phase 3: 数据打通（1周）

**目标：** 内容生态闭环

**任务：**
- [ ] vitaclaw-site的Agent新闻自动同步到KB
- [ ] KB热门文章展示在vitaclaw-site侧边栏
- [ ] 用户行为分析（从vitaclaw到KB的转化漏斗）

---

## 8. 风险与缓解

| 风险 | 概率 | 影响 | 缓解 |
|------|------|------|------|
| KB-3开发延迟 | 中 | 高 | ✅ **已缓解** — Phase 1用静态文件直接serve，无需等api.py |
| Caddy配置冲突 | 低 | 高 | 先在staging测试 `/knowledge/*` 反代 |
| 设计不一致 | 中 | 中 | 建立共享CSS变量文件（`design-tokens.css`） |
| SEO重复内容 | 低 | 中 | vitaclaw和KB内容不重复，KB是vitaclaw内容的扩展 |

---

## 9. 下一步行动建议

### 立即可以做（不依赖OmniGraph）

1. ✅ **Decision D-21/22/23**: 全部已确认并实施
2. ✅ **vitaclaw导航更新**: navbar + Hero + Footer 链接已添加
3. ✅ **Caddy配置**: `/kb/*` → file_server 已写好（`.deploy/Caddyfile.new`）

### 需要OmniGraph执行（Hermes服务器）

1. **运行export**: `cd /opt/vitaclaw/OmniGraph-Vault && python kb/export_knowledge_base.py`
   - 依赖：`kol_scan.db` 仅在Hermes本地（`~/.hermes/data/kol_scan.db`）
   - 输出：`kb/output/` → 需要rsync到部署目录
2. **（可选）更新KB模板**: base.html页脚添加"回到企小勤官网"链接

### 延期到后续迭代

1. **KB-3**: FastAPI api.py（搜索+问答动态功能）
2. **KB-2**: 实体/主题 pillar 页（SEO增强）
3. **Caddy切换**: `/kb/*` 从 file_server 改为 reverse_proxy localhost:8766

### 协调点

- vitaclaw和KB共享的静态资源（logo、favicon）需要同步部署
- 如果KB用子目录，Caddy配置需要vitaclaw侧操作
- 如果KB用子域名，DNS和ICP需要vitaclaw侧（域名所有者）操作

---

## 附录：KB模板预览

### KB首页 (`templates/index.html`)
- Hero区：大标题 + 搜索框 + 热门标签（AI Agent、RPA、LLM等）
- 最新文章区：卡片列表（标题、摘要、来源、日期）
- CTA区："浏览全部文章" + "提问"

### 文章详情 (`templates/article.html`)
- 面包屑导航
- 文章标题 + meta信息（来源、日期、标签）
- Markdown正文渲染
- 侧边栏：相关文章、实体标签
- "有疑问？问AI"CTA

### 问答页 (`templates/ask.html`)
- 输入框（多行文本）
- 提交按钮
- 热门问题列表（5个预设问题）
- 结果展示区（待KB-3实现动态交互）

---

> **需要用户决策：**
> 1. 采用子目录 `/knowledge/` 还是子域名 `kb.qixiaoqin.com`？
> 2. vitaclaw-site的导航中"知识库"入口放在什么位置？
> 3. 是否需要立即在vitaclaw-site添加KB链接（即使KB还未完全ready）？