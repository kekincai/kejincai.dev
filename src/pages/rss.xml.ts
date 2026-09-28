import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { portfolioGroups } from '../data/portfolio';
export async function GET(context: APIContext) {
  return rss({
    title: 'KEJINCAI.DEV — Projects',
    description:
      'Selected systems, experiments and utilities. 東京ノードの実装ログ。',
    site: context.site!,
    items: portfolioGroups.flatMap((group) =>
      group.projects.map((project) => ({
        title: project.name,
        description: project.description,
        link: `https://github.com/kekincai/${project.repo}`,
      })),
    ),
    customData: '<language>ja</language>',
  });
}
