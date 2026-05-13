---
name: aliyun-deploy
description: >
  本项目（vitaclaw-site）专用的阿里云部署Skill。处理从saas-site分支构建并部署到阿里云ECS的完整流程，
  包括临时修改deploy workflow的branch guard、触发部署、恢复workflow、验证上线状态。
  Trigger: "deploy vitaclaw to aliyun", "部署 vitaclaw 到阿里云", "vitaclaw 上线", "deploy vitaclaw site", "发布 vitaclaw 到阿里云"
---

# vitaclaw-site 阿里云部署 Skill

> 本项目当前在 `saas-site` 分支开发，但 deploy workflow 只允许 `main`/`master` 分支触发。
> 本 Skill 提供完整的临时绕过 → 部署 → 恢复流程。

## 前置检查

部署前必须确认：

```bash
# 1. 当前分支是 saas-site
git branch --show-current  # 应为: saas-site

# 2. 所有修改已提交
git status --short  # 应为空或只有.gitignore等无关文件

# 3. 代码已 push 到 origin（关键！）
git fetch origin
git log origin/saas-site --oneline -1  # 确认远程分支包含最新 commit
# 如果显示 "behind 1" 或远程 commit 不是最新的，说明没 push 成功，先 push 再 deploy

# 4. 构建通过
npm run lint
npm run build
```

> ⚠️ **关键教训（2026-05-12）**：GitHub Actions 从 `origin` 拉取代码构建，不是从你的本地仓库。如果你在本地 commit 但没有 push 到 origin，deploy workflow 会构建旧代码，导致页面刷新后内容不更新。
>
> 遇到 "部署成功但页面没更新" 时，先检查：
> ```bash
> git fetch origin
> git log origin/saas-site --oneline -3  # 远程分支
> git log --oneline -3                   # 本地分支
> ```
> 如果两者不一致，说明 commit 没 push 到 origin。

## 标准部署流程（3步法）

### Step 1: 临时修改 workflow

编辑 `.github/workflows/deploy.yml`，在 branch guard 中加入 `saas-site`：

```yaml
# 修改前:
case "${GITHUB_REF}" in
  refs/heads/main|refs/heads/master) ;;

# 修改后:
case "${GITHUB_REF}" in
  refs/heads/main|refs/heads/master|refs/heads/saas-site) ;;
```

提交并推送：
```bash
git add .github/workflows/deploy.yml
git commit -m "chore: [deploy-only] allow deploy from saas-site branch"
git push origin saas-site
```

### Step 2: 触发部署

```bash
cd /home/sztimhdd/vitaclaw-site
gh workflow run "Deploy Site" --ref saas-site
```

监控部署状态：
```bash
# 查看最新run
gh run list --workflow="Deploy Site" --limit 3

# 监控进度（替换RUN_ID）
gh run watch <RUN_ID> --exit-status
```

部署成功标志（GitHub Actions输出）：
- ✅ Validate deployment branch
- ✅ Build static site
- ✅ Sync static build
- ✅ Sync Node runtime files
- ✅ Verify production health
- ✅ Verify production assistant API
- ✅ Verify production Agent news export

### Step 3: 恢复 workflow

> ⚠️ **无论部署成功或失败，本步骤必须执行。** 临时修改的 workflow 不能留在代码库中。

```yaml
# 改回:
case "${GITHUB_REF}" in
  refs/heads/main|refs/heads/master) ;;
```

```bash
git add .github/workflows/deploy.yml
git commit -m "chore: [deploy-only] restore deploy branch guard to main/master only"
git push origin saas-site
```

## 生产验证清单

部署完成后，逐项验证：

### 1. 健康检查
```bash
curl -fsS http://101.133.154.49/health
curl -fsS http://101.133.154.49/healthz
```
期望：`vitaclaw demo host ok`

### 2. 静态页面
```bash
curl -fsS http://101.133.154.49/ | head -20
```
期望：返回HTML，包含企小勤/VitaClaw内容

### 3. Agent新闻数据
```bash
curl -fsS http://101.133.154.49/data/agent-news.json | jq '.contractVersion, (.items | length)'
```
期望：`1` 和 `5`

### 4. 助手API（冒烟测试，不调用模型）
```bash
curl -fsS -H 'content-type: application/json' \
  -d '{"message":" "}' \
  http://101.133.154.49/api/vitaclaw-assistant/chat | jq '.type, .usedModel'
```
期望：`"refusal"` 和 `false`

### 5. systemd服务状态
```bash
ssh root@101.133.154.49 "systemctl status vitaclaw-site --no-pager"
```
期望：`active (running)`

### 6. 浏览器验收
- 打开 http://101.133.154.49
- 确认首页正常渲染
- 打开 VitaClaw 助手浮窗
- 输入产品问题（如"企小勤是什么"）
- 确认收到回答
- 手机视口检查无横向溢出

## 回滚方案

如果部署后出现问题：

```bash
# SSH到阿里云
ssh root@101.133.154.49

# 1. 停止Node服务
systemctl stop vitaclaw-site

# 2. 恢复上一个静态版本
cd /opt/vitaclaw/control-plane/vitaclaw-site
ls backups/  # 找最新的dist.YYYYMMDD-HHMMSS
cp -a backups/dist.<timestamp> dist

# 3. 此时恢复到纯静态服务（助手API不可用，但首页正常）
```

## 常见问题

### Q: 部署成功但页面刷新后内容没更新
**这是最常见的问题。**

A: GitHub Actions 从 `origin` 拉取代码构建，不是本地仓库。如果本地 commit 但没 push 到 origin，deploy 会构建旧代码。

**排查步骤：**
```bash
# 1. 确认本地 commit 已 push
git fetch origin
git log origin/saas-site --oneline -3  # 远程分支
git log --oneline -3                    # 本地分支
# 如果两者不一致，先 push 再重新 deploy

# 2. 确认服务器上的 JS 文件名是否更新
curl -fsS http://101.133.154.49/ | grep -o 'src="[^"]*"'
# 如果文件名和本地 dist/ 中的不一致，说明部署的还是旧版本

# 3. 强制刷新浏览器
# Windows: Ctrl + F5
# Mac: Cmd + Shift + R
```

**根因时间线（2026-05-12 实例）：**
1. 本地 commit `8468bf3`（更新 assistant 问题）
2. 未 push 到 origin，直接触发 deploy
3. GitHub Actions checkout 的是旧的 `c4ea9da`
4. 构建产物还是旧的 `index-D-c_fgI8.js`
5. 服务器部署了旧代码 → 页面刷新后内容不更新
6. 解决：git push origin saas-site → 重新 deploy → 构建新的 `index-YJRTzxEi.js`

### Q: deploy workflow 报 "Manual deployment must run from main or master"
A: 忘记 Step 1 的临时修改，或修改后没推送。重新执行 Step 1。

### Q: gh workflow run 报 "could not determine current branch"
A: 确保在 vitaclaw-site 仓库目录内，且 git 状态干净。

### Q: 部署成功但 /api/vitaclaw-assistant/chat 返回 404
A: Caddy 反代配置可能丢失。SSH 到服务器检查 Caddyfile 中是否有 `/api/*` 反代到 :3001。

### Q: 助手返回 "暂时无法读取产品文档"
A: Node 服务可能没读到 DEEPSEEK_API_KEY。检查 `/etc/vitaclaw/vitaclaw-site.env` 是否存在且权限正确。

## 相关文件

| 文件 | 作用 |
|------|------|
| `.github/workflows/deploy.yml` | 部署工作流定义 |
| `docs/orchestrator/v1.2.1-production-api-runtime.md` | 生产运行时架构文档 |
| `docs/orchestrator/github-actions-deploy.md` | CI/CD 配置文档 |
| `server.js` | Node API 运行时 |

## 环境变量

部署依赖以下 GitHub Secrets/Variables（已由项目管理员配置）：

| 名称 | 类型 | 作用 |
|------|------|------|
| `ALIYUN_SSH_PRIVATE_KEY` | Secret | SSH 私钥 |
| `DEEPSEEK_API_KEY` | Secret | DeepSeek API 密钥 |
| `ALIYUN_SSH_HOST` | Variable | 101.133.154.49 |
| `ALIYUN_SSH_USER` | Variable | root |
| `ALIYUN_DEPLOY_PATH` | Variable | /opt/vitaclaw/control-plane/vitaclaw-site |
| `VITACLAW_NODE_SERVICE_NAME` | Variable | vitaclaw-site |

## 禁止事项

- ❌ 不要修改 `ALIYUN_SSH_PRIVATE_KEY` 或 `DEEPSEEK_API_KEY`
- ❌ 不要在 commit message 中打印密钥
- ❌ 不要把 `.env.local` 提交到 git
- ❌ 不要跳过 Step 3（恢复 workflow）
