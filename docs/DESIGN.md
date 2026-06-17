---
version: alpha
name: Claude Editorial
description: Warm editorial design inspired by claude.com/blog — paper-toned surfaces, serif headlines, and clay accents.
colors:
  primary: "#141413"
  secondary: "#87867f"
  tertiary: "#d97757"
  neutral: "#faf9f5"
  surface: "#f5f4ed"
  surface-elevated: "#f0eee6"
  border: "#d1cfc5"
  border-subtle: "#e8e6dc"
  accent-interactive: "#c96442"
  on-tertiary: "#faf9f5"
  on-primary: "#faf9f5"
typography:
  h1:
    fontFamily: "Noto Serif SC"
    fontSize: 3rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.02em
  h2:
    fontFamily: "Noto Serif SC"
    fontSize: 1.75rem
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.01em
  h3:
    fontFamily: "Noto Serif SC"
    fontSize: 1.25rem
    fontWeight: 500
    lineHeight: 1.35
  body-md:
    fontFamily: "Noto Sans SC"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.7
  body-lg:
    fontFamily: "Noto Sans SC"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.65
  label-caps:
    fontFamily: "Noto Sans SC"
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.08em
  caption:
    fontFamily: "Noto Sans SC"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  code:
    fontFamily: "JetBrains Mono"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: 6px
  md: 12px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "#262624"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 12px
  button-secondary-hover:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.primary}"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 24px
  tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    padding: 8px
---

## Overview

Claude Editorial 借鉴 [claude.com/blog](https://claude.com/blog) 的视觉语言：温暖纸质感背景、衬线标题、克制留白与陶土色交互点缀。整体气质是高端编辑刊物而非科技霓虹风——安静、可读、有温度。

设计原则：
- 以暖灰中性色为骨架，单一陶土色（Clay）驱动交互
- 大标题用衬线体传达编辑权威感，正文用无衬线保证可读性
- 避免渐变光晕、网格背景、高饱和霓虹色等「开发者博客」刻板视觉

## Colors

色板源自 Anthropic 品牌灰阶与 Clay 强调色。

- **Primary (#141413)**：墨黑，用于标题与核心正文，接近 `swatch--gray-950`
- **Secondary (#87867f)**：暖灰，用于元数据、描述、辅助文字，对应 `swatch--gray-500`
- **Tertiary (#d97757)**：陶土色，唯一交互强调色，链接悬停与焦点状态
- **Neutral (#faf9f5)**：暖米白页面底色，对应 `swatch--gray-050`
- **Surface (#f5f4ed)**：卡片与区块背景，对应 `swatch--gray-100`
- **Border (#d1cfc5)**：分隔线与卡片描边，对应 `swatch--gray-300`

暗色区域（如页脚）可使用 `#1a1918` 背景配 `#faf9f5` 文字，保持品牌一致性。

## Typography

字体层级模仿 Anthropic Sans / Anthropic Serif 分工（本站以 Noto 系列替代）：

- **标题（h1–h3）**：Noto Serif SC，字重偏轻（400–500），略紧字距，营造编辑标题感
- **正文**：Noto Sans SC，行高 1.65–1.7，舒适阅读
- **标签/元数据**：小号全大写或半大写，字间距加宽
- **代码**：JetBrains Mono，浅底细边框

博客列表标题约 1.25–1.5rem，文章页 h1 可达 2.5–3rem。

## Layout

- 内容区最大宽度 `72rem`（1152px），两侧 `1.5rem` 边距
- 区块垂直间距 `5rem`（80px）起，Hero 区域可更大
- 文章卡片网格：移动端单列，平板双列，桌面三列
- 不使用装饰性背景网格；分隔依靠细线与留白

## Elevation & Depth

几乎扁平化。深度仅通过：
- 1px 暖灰描边
- 背景色阶差异（neutral → surface → surface-elevated）
- 悬停时边框颜色微变或背景略深

不使用投影、光晕或玻璃拟态。

## Shapes

- 按钮与输入：`12px` 圆角（`rounded.md`）
- 卡片：`16px` 圆角（`rounded.lg`）
- 标签/药丸：`9999px` 全圆角
- 图标容器：小圆角或圆形，不使用尖锐直角

## Components

### Header
- 粘性顶栏，暖白半透明背景 + 轻微模糊
- 底部 1px 暖灰边框
- Logo 文字用衬线体，导航项悬停变陶土色

### Hero
- 大衬线标题 + 一行描述
- 主 CTA 深色实心按钮，次 CTA 描边或浅底按钮
- 无背景图案，可选极淡的 surface 色块

### Post Card
- 白/米白底，细边框，内边距充足
- 日期用小号 secondary 色
- 标题衬线体，悬停标题变陶土色
- 标签为浅底药丸形

### Prose（文章正文）
- 最大宽度约 68ch
- 引用块左侧陶土色竖线
- 代码块浅灰底、圆角、细边框

### Footer
- 深色底（#1a1918）与浅色主体形成对比
- 文字 secondary 色，链接陶土色

## Do's and Don'ts

**Do**
- 保持大量留白与清晰层级
- 交互状态使用陶土色，而非蓝/青/紫
- 标题用衬线、正文用无衬线
- 边框与背景保持暖色调

**Don't**
- 不使用霓虹青/紫渐变、赛博网格背景
- 不用过重阴影或发光效果
- 不混用多种强调色
- 不把正文设为过小的字号或过紧行高
