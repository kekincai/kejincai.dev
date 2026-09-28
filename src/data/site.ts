export const site = {
  name: 'KEJINCAI.DEV',
  identity: 'KE JINCAI',
  description:
    'Software, AI, data, photography and experiments by Ke Jincai in Tokyo.',
  github: 'https://github.com/kekincai',
  repository: 'https://github.com/kekincai/kejincai.dev',
};

// Editorial node status, not a live uptime probe.
export const projects = [
  {
    id: '01',
    name: '青空しおり',
    romanized: 'AOZORA SHIORI',
    category: 'LANGUAGE / LITERATURE',
    description: '每日一页，从日本文学中学习日语。',
    url: 'https://aozora.kejincai.dev',
    domain: 'aozora.kejincai.dev',
    symbol: '文',
  },
  {
    id: '02',
    name: 'PAUL.LOG',
    romanized: 'PAUL.LOG',
    category: 'AI / CODE / NOTES',
    description: '一个人的 AI 学习现场。论文、代码、理解与记录。',
    url: 'https://blog.kejincai.dev',
    domain: 'blog.kejincai.dev',
    symbol: '記',
  },
  {
    id: '03',
    name: 'FDE RADAR',
    romanized: 'FDE RADAR',
    category: 'AI / ENGINEERING / INTELLIGENCE',
    description: 'Collect. Filter. Understand.',
    url: 'https://fde.kejincai.dev',
    domain: 'fde.kejincai.dev',
    symbol: '探',
  },
] as const;

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(date)
    .replaceAll('-', '.');
}
