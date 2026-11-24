import { getCollection } from 'astro:content';

type Name = 'projects' | 'case-studies' | 'learning';

/** All published posts of one kind, newest first (drafts are hidden). */
export async function getPosts(name: Name) {
  const items = await getCollection(name, ({ data }) => !data.draft);
  return items.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Every tag used in a list, for the filter buttons. */
export function allTags(items: { data: { tags: string[] } }[]) {
  return [...new Set(items.flatMap((i) => i.data.tags))].sort();
}
