# Opencode 项目协作规范

> **本项目（vitaclaw-site）的 agent 协作手册。**
> 无论你是主 Planner 还是子 Executor，阅读本文档后再开始工作。

---

## 1. 角色定义

### 1.1 主 Agent（Planner / Sisyphus）

**你在哪个 session：** 用户明确说"规划"、"讨论"、"下一步怎么做"的 session。

**你的职责：**
- 理解用户需求，转化为可执行的技术任务
- 评估范围、风险、依赖关系
- 输出标准化的子 agent 提示词（6-section 格式）
- 验收子 agent 返回的结果
- 更新项目状态文档（STATE.md、MILESTONES.md）
- **不做代码实现**（单文件 <10 行的紧急修复除外）

**你的输出：**
- 架构决策（D-XX 格式记录到 decisions.md）
- 子 agent 提示词（6-section 格式）
- 检查点验收报告

---

### 1.2 子 Agent（Executor）

**你在哪个 session：** 用户贴了一个提示词，说"开始执行"、"实现这个"的 session。

**你的职责：**
- 严格按照提示词的范围执行
- 每完成一个检查点，停下来汇报（不要一口气做完）
- 返回标准化的检查点报告（5-item 格式）
- 遇到阻塞立即停，不要猜测继续
- **不做超出提示词范围的改动**

**你的输出：**
- 代码变更（git diff --stat）
- 构建/测试结果
- 检查点报告

---

## 2. 提示词标准格式（6-section）

所有从 Planner 到 Executor 的提示词必须包含以下 6 个 section：

```markdown
## 1. 任务
一句话描述要做什么。

## 2. 范围
### 必须改的文件
- `src/components/xxx.tsx`
- `src/data/xxx.ts`

### 不能碰的文件
- `server.js`（除非提示词明确允许）
- `.github/workflows/`（除非提示词明确允许）
- 其他组件文件

## 3. 约束
- 不引入新的 npm 依赖（如果必须引入，先停下来问 Planner）
- 不修改全局状态或路由
- 保持暗色主题 #0f172a
- 保持响应式设计（mobile-first）

## 4. 验收标准
- [ ] `npm run lint` 通过，零 error
- [ ] `npm run build` 通过，零 error
- [ ] 桌面端浏览器验证通过（描述具体验证内容）
- [ ] 移动端浏览器验证通过（无横向溢出）
- [ ] 无控制台 error/warning

## 5. 回滚方案
如果构建失败或验证不通过：
```bash
git checkout -- <file>
# 或
git reset HEAD~1 --hard
```

## 6. 检查点报告
每完成一个阶段，停下来汇报以下内容：

### 检查点报告格式（5-item）
```
1. 变更文件清单（git diff --stat）
2. 构建/测试结果（npm run lint && npm run build 输出）
3. 阻塞项（如果有，必须停）
4. 残余风险（已知但未修的问题）
5. 是否安全继续下一阶段（是 / 否 + 理由）
```

### 示例检查点报告
```
## 检查点 1/3：UI 布局完成

1. 变更文件：
   src/components/hero.tsx | 45 insertions(+), 12 deletions(-)

2. 构建结果：
   ✓ npm run lint — 0 errors, 0 warnings
   ✓ npm run build — success, 3 chunks

3. 阻塞项：无

4. 残余风险：
   - 右侧预览图在 320px 视口下可能被截断，已用 hidden md:block 处理
   - 需要实际图片资源替换占位图

5. 继续：✅ 安全，进入检查点 2（交互逻辑）
```
```

---

## 3. 常用任务模式

### 模式 A：React 组件修改

```markdown
## 1. 任务
修改 [组件名] 组件，实现 [具体功能]。

## 2. 范围
- 必须改：`src/components/[组件].tsx`
- 可选改：`src/index.css`（新增 utility class）
- 不能碰：其他组件、路由、全局状态

## 3. 约束
- 使用现有 design tokens（bg-background, text-foreground, accent 等）
- 保持响应式（mobile-first）
- 使用 Tailwind v4 语法（无 tailwind.config.js）
- HTML 实体用 `&ldquo;` / `&rdquo;`，不用 Unicode 引号

## 4. 验收
- [ ] lint + build 通过
- [ ] 桌面端渲染正确
- [ ] 移动端无横向溢出
- [ ] 无新控制台 error

## 5. 回滚
```bash
git checkout -- src/components/[组件].tsx
```

## 6. 检查点报告
按 5-item 格式汇报。
```

---

### 模式 B：部署到阿里云

参见 `.opencode/skills/aliyun-deploy/SKILL.md`

---

### 模式 C：新功能开发（多文件）

```markdown
## 1. 任务
实现 [功能名]。

## 2. 范围
### 阶段 1（本次做）
- 文件 A：...
- 文件 B：...

### 阶段 2（推迟）
- 文件 C：...（说明为什么推迟）

## 3. 约束
- 不引入新依赖（或：允许引入 X 依赖）
- 向后兼容（不影响现有功能）
- 等等

## 4. 验收
### 阶段 1 验收
- [ ] ...

### 阶段 2 验收
- [ ] ...

## 5. 回滚
阶段 1 可独立回滚：
```bash
git revert <commit>
```

## 6. 检查点报告
按阶段汇报，每阶段一个 5-item 报告。
```

---

## 4. 决策记录规范

所有架构决策必须记录到 `.sisyphus/notepads/` 或 `.planning/` 的 decisions.md：

```markdown
## D-XX: 决策标题

**决策：** 一句话结论

**理由：**
- 理由 1
- 理由 2

**后果：**
- 正面影响
- 负面影响（如果有）

**状态：** 已锁定 / 待定（如果是待定，说明阻塞条件）
```

---

## 5. 项目状态更新

Planner 在以下时机更新 STATE.md：

- 每个里程碑完成后
- 范围/优先级发生变化时
- 发现新的阻塞项时
- 子 agent 报告重大风险时

STATE.md 格式：

```markdown
| 里程碑 | 状态 | 备注 |
|--------|------|------|
| vX.Y 功能名 | ✅ 已完成 | 完成日期，关键成果 |
| vX.Y+1 功能名 | 🔄 进行中 | 当前阶段，预计完成时间 |
| vX.Y+2 功能名 | 📋 规划中 | 阻塞条件 |
```

---

## 6. 禁止事项（所有 Agent）

- ❌ **不要猜测继续**：遇到阻塞停下来问，不要假设
- ❌ **不要做范围外改动**：即使"顺便"看到的问题，也先汇报再决定
- ❌ **不要提交密钥**：.env、API key、私钥永远不提交
- ❌ **不要删除测试**：即使测试失败，先汇报再决定
- ❌ **不要用 `as any` / `@ts-ignore`**：类型错误必须修，不能 suppress
- ❌ **不要在一个 session 里既规划又实现**：保持角色分离

---

## 7. 快速参考

| 场景 | 怎么做 |
|------|--------|
| 用户说"规划下一步" | Planner 模式：分析 → 输出决策 → 写提示词 |
| 用户贴提示词说"执行" | Executor 模式：按 6-section 执行 → 检查点报告 |
| 构建失败 | 先尝试修复 1 次 → 仍失败则汇报阻塞 |
| 需要新依赖 | 停下来问 Planner，不要自己加 |
| 发现更好的实现方式 | 先按提示词做，然后在检查点报告里提建议 |

### 部署陷阱（必读）

**陷阱 1：deploy 前没 push 到 origin**
```
错误：本地 commit → 直接 deploy → GitHub Actions 构建旧代码
正确：本地 commit → git push origin <branch> → 确认远程分支最新 → 再 deploy

检查：git fetch origin && git log origin/<branch> --oneline -1
```

**陷阱 2：部署成功但页面没更新**
```
排查 1：先确认不是浏览器缓存（Ctrl+F5 / Cmd+Shift+R）
排查 2：curl 服务器 HTML，对比 JS 文件名是否和本地 dist/ 一致
排查 3：如果服务器还是旧文件名，回到陷阱 1 检查是否 push 成功
```

> 📚 详细部署流程见 `.opencode/skills/aliyun-deploy/SKILL.md`

---

## 8. 文档索引

| 文档 | 位置 | 作用 |
|------|------|------|
| 本文档 | `.opencode/COLLABORATION.md` | Agent 协作规范（必读） |
| 部署 Skill | `.opencode/skills/aliyun-deploy/` | 阿里云部署流程 |
| 项目状态 | `.planning/STATE.md` | 当前里程碑状态 |
| 架构决策 | `.sisyphus/notepads/*/decisions.md` | 设计决策记录 |
| 产品需求 | `.planning/MILESTONE-*.md` | PRD 和需求 |
| Agent 手册 | `AGENTS.md` | 项目特定规则和边界 |

---

> **最后提醒：** 不确定的时候，停下来问。猜测和假设是 bug 的最大来源。
