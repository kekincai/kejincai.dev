export const site = {
  name: 'KEJINCAI.DEV',
  identity: 'KE JINCAI',
  description:
    'Software, AI, data, photography and experiments by Ke Jincai in Tokyo.',
  github: 'https://github.com/kekincai',
  email: 'me@kejincai.dev',
  repository: 'https://github.com/kekincai/kejincai.dev',
};

// The node's three standing orders, shown with their HUD tags.
export const directives = [
  { ja: '接続せよ。', tag: 'JACK_IN' },
  { ja: '構築せよ。', tag: 'BUILD' },
  { ja: '記録せよ。', tag: 'LOG' },
] as const;

// Editorial node status, not a live uptime probe.
export const projects = [
  {
    id: '01',
    name: '青空しおり',
    romanized: 'AOZORA SHIORI',
    category: 'LANGUAGE / LITERATURE',
    description: 'LITERATURE STREAM. 一日一頁、日本文学からことばを拾う。',
    url: 'https://aozora.kejincai.dev',
    domain: 'aozora.kejincai.dev',
  },
  {
    id: '02',
    name: 'PAUL.LOG',
    romanized: 'PAUL.LOG',
    category: 'AI / CODE / NOTES',
    description:
      'PERSONAL RESEARCH LOG. 論文を読み、コードを動かし、AI の理解を記録する。',
    url: 'https://blog.kejincai.dev',
    domain: 'blog.kejincai.dev',
  },
  {
    id: '03',
    name: 'FDE RADAR',
    romanized: 'FDE RADAR',
    category: 'AI / ENGINEERING / INTELLIGENCE',
    description:
      'SIGNAL INTELLIGENCE. AI / Engineering の情報を収集、選別、読み解く。',
    url: 'https://fde.kejincai.dev',
    domain: 'fde.kejincai.dev',
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
