// Defines the three kinds of posts on the site.
// Each post is a Markdown (.md) file in src/content/<folder>/.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const icon = z
  .enum(['cloud', 'server', 'network', 'terminal', 'shield', 'bot', 'book', 'monitor', 'folder', 'award'])
  .default('book');

const color = z.enum(['blue', 'teal', 'violet', 'orange', 'pink', 'green']).default('blue');

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    status: z.enum(['Planned', 'In progress', 'Done']).default('Planned'),
    tags: z.array(z.string()).default([]),
    icon,
    color,
    draft: z.boolean().default(false),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    icon,
    color,
    draft: z.boolean().default(false),
  }),
});

const learning = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/learning' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    topic: z.string().default('General'),
    tags: z.array(z.string()).default([]),
    icon,
    color,
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, 'case-studies': caseStudies, learning };
