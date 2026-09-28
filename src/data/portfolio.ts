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
        system: 'BROWSER RUNTIME',
        metric: { value: '128', unit: 'RADIAL SAMPLES / LENS' },
        log: [
          {
            key: 'SNELL REFRACTION',
            text: '屈折率 1.5、128 点の径向サンプルで変位マップを実行時に生成。実際の DOM をそのまま屈折させる。',
          },
          {
            key: 'WEBGPU HDR',
            text: 'rgba16float と extended トーンマッピングで SDR の白を超える鏡面光。非対応環境は SDR へ自動で戻る。',
          },
          {
            key: 'ZERO FRAMEWORK',
            text: 'ネイティブ Web Components。ブックマークは 8 KB 以下に分割して chrome.storage.sync へ同期。',
          },
        ],
        specs: [
          ['PLATFORM', 'Chrome 120+'],
          ['STACK', 'TypeScript / Web Components / WebGPU'],
          ['BUILD', 'v2.5.0'],
        ],
      },
      {
        repo: 'DiskFerry',
        name: 'Disk Ferry',
        tags: ['macOS', 'Swift', 'rclone'],
        description:
          'MOVE THE PAYLOAD. 外付けドライブ、NAS、Windows 共有へ。コピー経路と進行状況を macOS から制御。',
        system: 'TRANSFER CONTROL',
        metric: { value: '1 Hz', unit: 'LIVE TELEMETRY' },
        log: [
          {
            key: 'LIVE TELEMETRY',
            text: 'rclone が 127.0.0.1 に開く認証付き統計 API を毎秒読み取り。推測ではなく実測値で進捗を描く。',
          },
          {
            key: 'RESUMABLE ROUTES',
            text: 'コピーを「ルート」として保存。既存ファイルはスキップし、中断した地点から再開。',
          },
          {
            key: 'ZERO RESIDUE',
            text: 'サムネイル、ログ、キャッシュを残さない。smb:// と \\\\host\\share の貼り付けにも対応。',
          },
        ],
        specs: [
          ['PLATFORM', 'macOS 13+'],
          ['STACK', 'Swift / SwiftUI / rclone'],
          ['BUILD', 'v0.2.0'],
        ],
        release: true,
      },
      {
        repo: 'safe-clip-popclip',
        name: 'Safe Clip',
        tags: ['macOS', 'PopClip', 'Local-first'],
        description:
          'SCRUB BEFORE UPLINK. PopClip で機密情報をローカル処理。安全なテキストをコピー、または選択範囲へ戻す。',
        system: 'PRIVACY FILTER',
        metric: { value: '0', unit: 'NETWORK ENTITLEMENTS' },
        log: [
          {
            key: 'LOCAL ONLY',
            text: 'ネットワーク権限を要求しない。選択したテキストは保存もログもしない。',
          },
          {
            key: 'SECRET PATTERNS',
            text: 'API トークン、JWT、秘密鍵、接続 URL 内の認証情報を決定的なパターンで検出。',
          },
          {
            key: 'LUHN CHECK',
            text: 'Luhn 検証を通るカード番号と、英・中・日の口座／残高フィールドを伏せ字にする。',
          },
        ],
        specs: [
          ['PLATFORM', 'macOS / PopClip'],
          ['STACK', 'JavaScript / Node test'],
          ['BUILD', 'v0.3.0'],
        ],
        release: true,
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
export type FeaturedProject = (typeof portfolioGroups)[0]['projects'][number];
