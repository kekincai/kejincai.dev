## Current implementation scope

Phase 1: Home, Projects, Lab, Lab Detail, About, and 404. Photography and feed aggregation are Phase 2. Public identity uses KE JINCAI / KEJINCAI.DEV only; do not publish the Chinese personal name. Mobile support is required. Display counts from content, never from example metrics.

---

KEJINCAI.DEV

Personal AI Lab / Portfolio Portal

Version: 1.0
Framework: Astro + TypeScript + Tailwind CSS
Deploy: Cloudflare
Domain: https://kejincai.dev

⸻

1. 项目定位

kejincai.dev 是个人开发、AI 实验、学习记录与数字作品的统一入口。

网站不定位为传统求职 Portfolio，也不以履历、技能百分比、企业式自我介绍作为核心。

核心概念：

作る。学ぶ。記録する。

关键词：

* AI
* Software Engineering
* Personal Development
* Experiments
* Japanese Literature
* Photography
* Data
* Digital Garden

根站承担三个职责：

1. 展示个人身份与创作方向
2. 聚合各独立子站
3. 收录尚未独立成站的小型 Lab 项目

⸻

2. 网站体系

kejincai.dev
│
├── /                   Home
├── /projects           Projects
├── /lab                Experimental Lab
├── /lab/[slug]         Lab Detail
├── /photography        Photography
├── /about              About
│
├── aozora.kejincai.dev
│   └── 青空しおり
│
├── blog.kejincai.dev
│   └── PAUL.LOG
│
└── fde.kejincai.dev
    └── FDE RADAR

原则：

根站不复制各子站完整内容。

只显示：

* 项目名称
* 简介
* 状态
* 最新内容摘要
* 跳转入口

⸻

3. 设计主题

3.1 Theme

主题名称：

TOKYO AI NIGHT

设计方向：

Japanese Cyberpunk × AI Laboratory × Tokyo Night × Minimalism

不是传统意义上的 Cyberpunk 游戏 UI。

避免：

* 满屏紫色渐变
* 大量 RGB 霓虹
* 复杂 HUD
* 过量 Glitch
* Matrix 数字雨
* 游戏血条式组件
* 廉价 AI 生成感

整体应呈现：

东京深夜 + 实验室 + 工程师终端 + AI 网络。

⸻

4. 世界观

时间设定：

TOKYO / 20XX
PERSONAL AI NODE
STATUS: ONLINE

整个网站被设计为一个正在运行的个人数字节点。

访问者进入：

kejincai.dev

相当于连接：

KEJINCAI PERSONAL NODE

各个子站则表现为不同 NODE。

例如：

NODE 01
AOZORA SHIORI
LITERATURE / LANGUAGE
STATUS: ONLINE
NODE 02
PAUL.LOG
AI / NOTES
STATUS: ONLINE
NODE 03
FDE RADAR
AI / ENGINEERING
STATUS: ONLINE

Lab 项目表现为：

EXPERIMENT 017
PHOTO GPS EXPLORER
STATUS
PROTOTYPE
LAST UPDATE
2026.09

⸻

5. 色彩系统

整体背景必须接近黑色，但不能使用纯黑。

--bg-main:       #07090D;
--bg-panel:      #0C1017;
--bg-elevated:   #111722;
--text-main:     #E8EDF2;
--text-muted:    #7D8996;
--cyan:          #00E5FF;
--cyan-soft:     #63F2FF;
--red:           #FF304F;
--border:        #1B2733;

主要 Accent：

Cyan

代表：

* AI
* 数据
* 在线状态
* 链接
* Active

红色只用于：

* Warning
* REC
* Tokyo-style signage
* 少量视觉强调

禁止 Cyan + Red 大面积同时出现。

⸻

6. 字体

英文：

Inter
IBM Plex Mono
JetBrains Mono

日文：

Noto Sans JP
Noto Serif JP

使用规则：

标题：

Inter / Noto Sans JP

系统信息：

IBM Plex Mono

文学引用：

Noto Serif JP

⸻

7. 首页

首页结构：

HEADER
HERO
SYSTEM STATUS
PROJECT NODES
LAB
RECENT SIGNALS
PHOTOGRAPHY
FOOTER

⸻

8. Header

左侧：

KEJINCAI.DEV

右侧：

PROJECTS
LAB
PHOTO
ABOUT

最右显示：

● ONLINE

移动端变成：

KEJINCAI.DEV        [=]

Header：

* fixed
* backdrop blur
* 半透明背景
* 1px bottom border

⸻

9. Hero

Hero 高度：

80–90vh

左侧主要内容：

TOKYO / PERSONAL NODE
KE JINCAI
作る。
学ぶ。
記録する。
Software Engineer
AI / Web / Data / Photography

下方：

[ VIEW PROJECTS ]
SCROLL ↓

右侧不使用人物照片。

显示抽象 AI Node Visualization。

例如：

       ○
      ╱ ╲
   ○ ─── ○
    ╲   ╱
      ●
    ╱   ╲
   ○     ○

节点缓慢移动。

鼠标经过时产生轻微响应。

禁止高频动画。

⸻

10. Hero 背景

背景可以加入东京城市摄影。

要求：

* 自己拍摄
* 夜间东京
* 建筑 / 街道 / 电车 / 高架
* 不使用典型涩谷游客照

图片处理：

brightness 25%
contrast 120%
desaturate 40%
cyan tint 5%

背景上覆盖：

grid
scanline
noise

透明度必须极低。

⸻

11. System Status

Hero 下方显示系统状态：

SYSTEM STATUS
LOCATION        TOKYO
NODE            KEJINCAI.DEV
STATUS          ONLINE
PROJECTS        12
EXPERIMENTS     24
LAST UPDATE     2026.09.28

视觉类似服务器 Dashboard。

数据可以构建时自动生成。

⸻

12. Project Nodes

标题：

01 / ACTIVE NODES

展示三个主要项目。

⸻

AOZORA SHIORI

NODE 01
青空しおり
AOZORA SHIORI
LANGUAGE / LITERATURE
每日一页，
从日本文学中学习日语。
STATUS
● ONLINE
aozora.kejincai.dev

⸻

PAUL.LOG

NODE 02
PAUL.LOG
AI / CODE / NOTES
一个人的 AI 学习现场。
论文、代码、理解与记录。
STATUS
● ONLINE
blog.kejincai.dev

⸻

FDE RADAR

NODE 03
FDE RADAR
AI / ENGINEERING / INTELLIGENCE
Collect.
Filter.
Understand.
STATUS
● ONLINE
fde.kejincai.dev

Card Hover：

border → cyan
background → slightly brighter

右上角：

↗

表示 External Node。

⸻

13. LAB

标题：

02 / EXPERIMENTAL LAB

副标题：

Small tools.
Unfinished ideas.
Working experiments.

Lab 使用编号体系：

EXP-001
EXP-002
EXP-003

示例：

EXP-001
CoBRA Estimator
Software estimation experiment.
Python
AI
Estimation
STATUS
ACTIVE

状态：

IDEA
PROTOTYPE
ACTIVE
ARCHIVED

颜色：

ACTIVE      Cyan
PROTOTYPE   White
ARCHIVED    Gray

⸻

14. Lab 数据结构

使用 Astro Content Collections。

src/content/lab/

每个项目：

cobra.md
photo-gps.md
subtitle-ai.md

Frontmatter：

title: CoBRA Estimator
id: EXP-001
description:
  AI-assisted software estimation experiment.
status: active
tags:
  - Python
  - AI
  - Estimation
created: 2026-08-01
updated: 2026-09-20
url:
github:

⸻

15. Recent Signals

标题：

03 / RECENT SIGNALS

这里聚合其他 Node 的最近活动。

例如：

2026.09.28
BLOG
Understanding AI Agent Architecture
→ PAUL.LOG
2026.09.27
AOZORA
夏目漱石
「こころ」
→ AOZORA SHIORI

数据来源优先：

RSS
JSON Feed
Build-time API

不需要实时请求。

Cloudflare 构建时获取即可。

⸻

16. Photography

标题：

04 / VISUAL MEMORY

摄影不要做普通瀑布流。

首页只展示：

3–6 张

大图。

例如：

TOKYO
2026.09
35.6812 N
139.7671 E

Hover：

TOKYO / NIGHT
2026.09.21

完整作品进入：

/photography

⸻

17. Photography 页面

布局：

YEAR
    SERIES
        PHOTO
        PHOTO
        PHOTO

例如：

2026
TOKYO SUMMER
深川八幡祭
麻布十番
上野
隅田川

照片信息可以显示：

SONY A7C II
70-200 F4 G
135mm
1/500
F4
ISO 800

但默认隐藏。

Hover / Detail 才显示。

⸻

18. About

不要传统：

技能
Java ███████ 90%
Python █████ 80%

禁止技能百分比。

About 使用简洁介绍：

ABOUT NODE
KE JINCAI
Software Engineer based in Tokyo.
Interested in:
AI
Software Engineering
Data
Language
Photography

然后：

TIMELINE

只记录重要节点。

⸻

19. Footer

Footer 类似终端：

────────────────────────────────
KEJINCAI.DEV
TOKYO NODE
STATUS: ONLINE
GitHub
RSS
Email
BUILD
ASTRO / CLOUDFLARE
© 2026 KE JINCAI

最下面：

EOF

⸻

20. 动效

动画原则：

Slow / Quiet / Functional

允许：

* Fade
* Slide
* Border glow
* Node movement
* Cursor blink
* Text reveal

禁止：

* 大量 Glitch
* 快速闪烁
* 页面抖动
* 强烈 Neon Glow
* 长时间 Loading Animation

⸻

21. 页面切换

使用 Astro View Transitions。

页面切换：

150–250ms

效果：

fade

不要复杂转场。

⸻

22. AI Node 动画

首页 Hero 唯一允许较明显的动态元素。

效果：

Node
 ↓
Connection
 ↓
Pulse
 ↓
Data packet

节点缓慢漂移。

偶尔出现：

SIGNAL RECEIVED
NODE CONNECTED
INDEX UPDATED

透明度低。

作为环境视觉存在，而不是主要信息。

⸻

23. Responsive

Breakpoints：

Mobile
< 640
Tablet
640–1024
Desktop
> 1024
Wide
> 1440

Desktop 最大内容宽度：

1280px

摄影页面允许：

1600px

⸻

24. 技术栈

Astro
TypeScript
Tailwind CSS

可选：

React

只用于真正需要状态管理的组件。

例如：

AI Node Visualization
Project Filter
Photography Lightbox

禁止整个网站 React SPA 化。

⸻

25. 目录结构

src/
components/
    Header.astro
    Footer.astro
    Hero.astro
    NodeCard.astro
    LabCard.astro
    SignalList.astro
    PhotoGrid.astro
components/react/
    NodeNetwork.tsx
    Lightbox.tsx
content/
    lab/
    projects/
    photography/
layouts/
    BaseLayout.astro
    LabLayout.astro
pages/
    index.astro
    projects/
        index.astro
    lab/
        index.astro
        [slug].astro
    photography/
        index.astro
    about/
        index.astro

⸻

26. SEO

每页必须：

<title>
<meta name="description">
<meta property="og:title">
<meta property="og:description">
<meta property="og:image">

根站：

KEJINCAI.DEV — Personal AI Lab

Description：

Software, AI, data, photography and experiments
by Ke Jincai in Tokyo.

⸻

27. Performance

目标：

Lighthouse Performance > 95
JS < 150KB
Initial CSS < 50KB
LCP < 2s
CLS ≈ 0

摄影图片：

AVIF
WebP fallback

必须 Responsive Image。

⸻

28. Accessibility

必须支持：

prefers-reduced-motion

开启后：

* Node Animation 停止
* Text Reveal 停止
* Glitch 完全关闭
* View Transition 简化

文字与背景满足 WCAG AA。

⸻

29. 彩蛋

可以加入少量工程师彩蛋。

Console：

> CONNECT KEJINCAI.DEV
Handshake complete.
Tokyo node online.
Welcome.

404：

NODE NOT FOUND
ERROR 404
The requested node does not exist
or has been disconnected.
[ RETURN TO ROOT NODE ]

不要加入假的 Terminal 输入框。

⸻

30. 首页最终信息顺序

HEADER
↓
// TOKYO / PERSONAL NODE
KE JINCAI
作る。
学ぶ。
記録する。
↓
// SYSTEM STATUS
↓
// 01 ACTIVE NODES
AOZORA SHIORI
PAUL.LOG
FDE RADAR
↓
// 02 EXPERIMENTAL LAB
Projects / Tools / Experiments
↓
// 03 RECENT SIGNALS
Latest activity from all nodes
↓
// 04 VISUAL MEMORY
Photography
↓
ABOUT NODE
↓
EOF

⸻

31. 最终设计原则

整个网站必须遵循：

Cyberpunk is atmosphere, not decoration.

日式赛博朋克感主要来自：

* 东京夜景
* 日英混排
* Mono 字体
* 极细 Grid
* Node / Signal 概念
* Cyan 状态灯
* 工程系统语言
* 黑色空间
* 少量红色城市标识
* 克制的动画

而不是：

* 满屏 Neon
* Glitch
* 紫色渐变
* AI 机器人图片
* 未来城市生成图

最终目标：

看起来像一个真实存在于东京的工程师，在互联网上运行了一个属于自己的 AI 节点。

这份可以直接丢给 Codex / Claude Code 作为第一阶段实现依据。建议第一版先只实现 Home + Lab + About，摄影和跨子域内容聚合第二阶段再接。