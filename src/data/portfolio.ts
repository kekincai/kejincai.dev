// Curated by the owner. Descriptions checked against public repository READMEs.
export const portfolioGroups = [
  {
    id: 'selected',
    label: '精选项目',
    title: 'Selected work.',
    description: '把想法做成日常用得上的软件。',
    projects: [
      {
        repo: 'infinity-newtab-extension',
        name: 'Infinity New Tab',
        tags: ['Chrome', 'TypeScript', 'WebGPU'],
        description:
          '把新标签页变成自己的启动台。书签、动态壁纸与 Liquid Glass 折射，配合 WebGPU HDR 高光。',
      },
      {
        repo: 'DiskFerry',
        name: 'Disk Ferry',
        tags: ['macOS', 'Swift', 'rclone'],
        description:
          '把大文件夹稳稳地搬过去。连接外置硬盘、NAS 与 Windows 共享，用原生界面管理复制路线和进度。',
      },
      {
        repo: 'safe-clip-popclip',
        name: 'Safe Clip',
        tags: ['macOS', 'PopClip', 'Local-first'],
        description:
          '分享文字前，先处理敏感信息。在 PopClip 内本地脱敏，支持复制清洗后的文本或替换当前选区。',
      },
    ],
  },
  {
    id: 'experiments',
    label: '有趣的实验',
    title: 'Curiosity in code.',
    description: '换一种界面，试一种语言，探索另一种做法。',
    projects: [
      {
        repo: 'bookmark-cover-flow',
        name: 'Bookmark Cover Flow',
        tags: ['Chrome', 'TypeScript', 'Motion'],
        description:
          '用封面和连续的空间动效浏览 Chrome 书签，保留原有文件夹结构，在独立标签页中探索。',
      },
      {
        repo: 'patternmart',
        name: 'PatternMart',
        tags: ['TypeScript', 'GoF', 'Web'],
        description:
          '从商品、购物车到结算与订单，在电商场景中演示 GoF 的 23 种设计模式。',
      },
      {
        repo: 'taskpaper-mcp-server',
        name: 'TaskPaper MCP',
        tags: ['macOS', 'Node.js', 'MCP'],
        description:
          '让 AI 通过 MCP 读写 TaskPaper 任务，连接自然语言与项目、标签、搜索和归档。',
      },
      {
        repo: 'dedup',
        name: 'dedup',
        tags: ['Rust', 'SQLite', 'CLI'],
        description:
          '为文件建立可增量更新的索引，分阶段计算哈希，查找重复文件并导出报告。',
      },
      {
        repo: 'racket-todo-app',
        name: 'Racket TODO',
        tags: ['Racket', 'SQLite', 'Web'],
        description:
          '用 Racket 构建任务管理应用，探索用户认证、任务数据和 Web 界面的组合。',
      },
      {
        repo: 'NetSpeedMonitor',
        name: 'NetSpeedMonitor',
        tags: ['macOS', 'Swift', 'Menu bar'],
        description:
          '在 macOS 菜单栏实时查看上传与下载速度，用固定宽度的双行数字保持显示稳定。',
      },
    ],
  },
  {
    id: 'utilities',
    label: '小工具',
    title: 'Small, useful things.',
    description: '解决一个具体问题，少做一点重复操作。',
    projects: [
      {
        repo: 'yinxiang-exporter',
        name: '印象导出器',
        tags: ['Windows', 'Python', 'Export'],
        description:
          '只读解析印象笔记本地 .exb 数据库，把笔记和附件导出为 HTML、Markdown、ENEX 或 JSONL。',
      },
      {
        repo: 'base-r-snake',
        name: 'Base R Snake',
        tags: ['R', 'Tcl/Tk', 'Game'],
        description:
          '只用 base R 和自带 Tcl/Tk 写一个实时贪吃蛇。像素画面与黄黑界面，没有第三方 R 包。',
      },
      {
        repo: 'podcasts-unfollow-all',
        name: 'Podcasts Unfollow',
        tags: ['macOS', 'Swift', 'Automation'],
        description:
          '通过 macOS 辅助功能批量取消 Apple Podcasts 关注，支持先预览及限制处理数量。',
      },
    ],
  },
] as const;
export const portfolioCount = portfolioGroups.reduce(
  (sum, group) => sum + group.projects.length,
  0,
);
export type PortfolioProject =
  (typeof portfolioGroups)[number]['projects'][number];
