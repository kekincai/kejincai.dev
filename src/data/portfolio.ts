// Curated by the owner. Descriptions checked against public repository READMEs.
export const portfolioGroups = [
  {
    id: 'selected',
    label: 'SELECTED / 実装記録',
    title: 'Selected work.',
    description: 'Ideas compiled. 日常に接続するコード。',
    projects: [
      {
        repo: 'infinity-newtab-extension',
        name: 'Infinity New Tab',
        tags: ['Chrome', 'TypeScript', 'WebGPU'],
        description:
          'BOOT YOUR NEXT TAB. ブックマークと動く壁紙を、Liquid Glass と WebGPU HDR の光でつなぐ。',
      },
      {
        repo: 'DiskFerry',
        name: 'Disk Ferry',
        tags: ['macOS', 'Swift', 'rclone'],
        description:
          'MOVE THE PAYLOAD. 外付けドライブ、NAS、Windows 共有へ。コピー経路と進行状況を macOS から制御。',
      },
      {
        repo: 'safe-clip-popclip',
        name: 'Safe Clip',
        tags: ['macOS', 'PopClip', 'Local-first'],
        description:
          'SCRUB BEFORE UPLINK. PopClip で機密情報をローカル処理。安全なテキストをコピー、または選択範囲へ戻す。',
      },
    ],
  },
  {
    id: 'experiments',
    label: 'EXPERIMENTS / 実験ログ',
    title: 'Curiosity in code.',
    description: 'SIDE CHANNEL. 別の言語、別のインターフェースを試す。',
    projects: [
      {
        repo: 'bookmark-cover-flow',
        name: 'Bookmark Cover Flow',
        tags: ['Chrome', 'TypeScript', 'Motion'],
        description:
          'VISUAL ARCHIVE. Chrome のブックマークをカバーと空間モーションで走査。フォルダ構造はそのまま。',
      },
      {
        repo: 'patternmart',
        name: 'PatternMart',
        tags: ['TypeScript', 'GoF', 'Web'],
        description:
          'PATTERN GRID. 商品から注文まで、GoF の 23 パターンを動くストアで実験。',
      },
      {
        repo: 'taskpaper-mcp-server',
        name: 'TaskPaper MCP',
        tags: ['macOS', 'Node.js', 'MCP'],
        description:
          'TASK INTERFACE. MCP 経由で AI と TaskPaper を接続。タスク、タグ、検索、アーカイブを操作。',
      },
      {
        repo: 'dedup',
        name: 'dedup',
        tags: ['Rust', 'SQLite', 'CLI'],
        description:
          'DUPLICATE SCAN. 増分インデックスと段階的ハッシュで重複ファイルを検出。結果はレポートへ。',
      },
      {
        repo: 'racket-todo-app',
        name: 'Racket TODO',
        tags: ['Racket', 'SQLite', 'Web'],
        description:
          'RACKET RUNTIME. 認証、SQLite、Web UI を組み合わせた小さなタスク管理実験。',
      },
      {
        repo: 'NetSpeedMonitor',
        name: 'NetSpeedMonitor',
        tags: ['macOS', 'Swift', 'Menu bar'],
        description:
          'TRAFFIC READOUT. macOS メニューバーで送受信速度を監視。固定幅の二行表示。',
      },
    ],
  },
  {
    id: 'utilities',
    label: 'UTILITIES / 小型ツール',
    title: 'Small, useful things.',
    description: 'ONE JOB. 繰り返す操作を、短いコードに置き換える。',
    projects: [
      {
        repo: 'yinxiang-exporter',
        name: 'Yinxiang Exporter',
        tags: ['Windows', 'Python', 'Export'],
        description:
          'ARCHIVE EXTRACT. ローカルの .exb を読み取り専用で解析。ノートと添付を HTML / Markdown / ENEX / JSONL へ。',
      },
      {
        repo: 'base-r-snake',
        name: 'Base R Snake',
        tags: ['R', 'Tcl/Tk', 'Game'],
        description:
          'PIXEL LOOP. base R と Tcl/Tk だけで動く Snake。追加の R パッケージは不要。',
      },
      {
        repo: 'podcasts-unfollow-all',
        name: 'Podcasts Unfollow',
        tags: ['macOS', 'Swift', 'Automation'],
        description:
          'FEED RESET. macOS アクセシビリティで Podcasts のフォローを一括解除。プレビューと件数制限付き。',
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
