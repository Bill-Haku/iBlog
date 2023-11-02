import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: "iBlog of Bill Haku",
    description: "Collection of Bill Haku's blogs",
    site: 'https://blog.hakubill.tech',
    items: await pagesGlobToRssItems(import.meta.glob('./posts/*.md')),
    customData: `<language>zh-cn</language>`,
  });
}
