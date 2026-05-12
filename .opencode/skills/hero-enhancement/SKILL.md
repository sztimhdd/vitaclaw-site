# Hero 区转化率增强

## 1. 任务
增强 `src/components/hero.tsx`，提升首屏对小B端客户的吸引力。添加 social proof badges、优化 CTA 按钮组、右侧增加产品界面预览图。

## 2. 范围

### 必须改的文件
- `src/components/hero.tsx` — 主改动
- `src/components/metric-card.tsx` — 如需要调整 MetricCard 样式（可选，看现有组件是否够用）

### 不能碰的文件
- 其他 section 组件（TrustBar, PainPoints, Workflow 等）
- `server.js`
- `.github/workflows/`
- 路由配置

## 3. 约束

- **不引入新的 npm 依赖**
- **保持暗色主题** `#0f172a`，使用现有 design tokens
- **保持响应式**：mobile-first，`lg:` 断点区分桌面/移动端
- **使用 Tailwind v4** 语法（项目无 `tailwind.config.js`，token 在 `src/index.css` 的 `@theme inline`）
- **HTML 实体**：引号用 `&ldquo;` / `&rdquo;`，不用 Unicode
- **向后兼容**：现有 video 预览保留，新增预览图与之共存或替换（由你判断哪个效果更好）
- **性能**：图片用 `loading="lazy"` 或已有组件的懒加载模式

## 4. 验收标准

### 4.1 功能验收
- [ ] 标题下方显示 social proof badges 行：
  ```
  🏦 已服务 200+ 银行及政府机构  ·  ⚡ 5 分钟完成部署  ·  🔒 等保三级认证
  ```
  样式：text-sm text-white/50，用 `·` 分隔，整体居中或左对齐（与标题对齐）
  
- [ ] 双 CTA 按钮（替换现有的两个按钮）：
  - 主按钮："免费试用"（保持现有白色背景样式）
  - 次按钮："观看30秒演示"（border 样式，点击行为：平滑滚动到页面下方的视频展示区 `#trust-cases` 或打开视频 modal）
  
- [ ] 右侧产品预览图（桌面端 `lg:` 显示）：
  - 使用 `server/public/screenshots/` 下的现有截图（如 `self-learning.png` 或 `memory-knowledge.png`）
  - 或保留现有 video + arch.png fallback，由你判断哪种视觉呈现更好
  - 如果是静态图，添加轻微悬浮动画：`hover:translate-y-[-4px] transition-transform duration-500`
  - 图片需要有圆角、边框、阴影，与现有 video 容器的视觉风格一致

### 4.2 构建验收
- [ ] `npm run lint` 通过，零 error
- [ ] `npm run build` 通过，零 error

### 4.3 视觉验收
- [ ] 桌面端（1920px）：Hero 区完整显示，左右两栏布局协调
- [ ] 桌面端（1440px）：无元素重叠，文字可读
- [ ] 平板（768px）：单栏布局，按钮垂直堆叠，预览图隐藏或缩小
- [ ] 手机（375px）：无横向溢出，badges 换行显示，按钮垂直堆叠
- [ ] 无新控制台 error/warning

## 5. 回滚方案

如果构建失败或视觉效果不达标：
```bash
git checkout -- src/components/hero.tsx
git checkout -- src/components/metric-card.tsx  # 如果改了的话
npm run build  # 确认恢复后构建通过
```

## 6. 检查点报告

按以下格式汇报：

```markdown
## 检查点 1/2：UI 布局完成

1. 变更文件：
   src/components/hero.tsx | XX insertions(+), XX deletions(-)

2. 构建结果：
   ✓ npm run lint — 0 errors, 0 warnings
   ✓ npm run build — success

3. 阻塞项：无 / 有（说明）

4. 残余风险：
   - （如果有已知但未修的问题）

5. 继续：✅ 安全 / ❌ 阻塞（说明理由）
```

### 分阶段执行

**阶段 1：基础改动**
- 添加 badges 行
- 调整 CTA 按钮文案和行为
- 右侧预览图（静态图或保留 video）
- 完成后停，汇报检查点 1

**阶段 2：微调优化**
- 根据阶段 1 的视觉反馈微调间距、颜色、动画
- 完成后停，汇报检查点 2

---

## 参考信息

### 当前 Hero 结构（供参考）
```
hero.tsx
├── 左侧（左栏）
│   ├── 标题 h1: "不改系统，一周上线"
│   ├── 副标题 p: "企小勤 AI 数字员工..."
│   ├── CTA 按钮组: "免费试点" + "预约演示"
│   ├── MetricCard 网格（4个指标）
│   └── 底部小字: "已为 200+ 银行及政府机构..."
└── 右侧（右栏，lg: 显示）
    └── Video 预览容器（video-demo.mp4 + arch.png fallback）
```

### 可用图片资源
- `server/public/screenshots/self-learning.png`
- `server/public/screenshots/memory-knowledge.png`
- `server/public/screenshots/security-sandbox.jpg`
- `server/public/screenshots/skillhub-ecosystem.png`
- `server/public/screenshots/ops-management.png`
- `server/public/arch.png`
- `server/public/video-demo.mp4`

### 设计 Token（暗色主题）
- 背景：`bg-[#0f172a]` 或 `bg-background`
- 文字主色：`text-white`
- 文字次色：`text-white/50`, `text-white/60`
- 边框：`border-white/[0.08]`, `border-white/20`
- 强调蓝：`#3b82f6`（`bg-blue-500`）
- 强调绿：`#22d3a0`
- 卡片背景：`bg-[#0a0f1e]` 或 `bg-card`
- 阴影：`shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]`

### 现有组件（可复用）
- `ScrollReveal` — 滚动进入动画 wrapper
- `MetricCard` — 指标卡片（value, suffix, label）
- `ProductScreenshot` — 图片组件（带懒加载和错误处理）
