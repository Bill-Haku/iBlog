import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: "Bill Haku's Blog",
    description: "Collection of Bill Haku's blogs",
    site: 'https://blog.hakubill.tech',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>zh-cn</language>`,
  });
}
