import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
export async function GET(context: APIContext) {
  const entries = await getCollection('lab');
  return rss({
    title: 'KEJINCAI.DEV — Experimental Lab',
    description:
      'Small tools, unfinished ideas and working experiments from Tokyo.',
    site: context.site!,
    items: entries
      .sort((a, b) => b.data.updated.getTime() - a.data.updated.getTime())
      .map((entry) => ({
        title: `${entry.data.number} / ${entry.data.title}`,
        description: entry.data.description,
        pubDate: entry.data.updated,
        link: `/lab/${entry.id}/`,
      })),
    customData: '<language>en</language>',
  });
}
