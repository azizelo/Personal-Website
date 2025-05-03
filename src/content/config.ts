import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(), // ← ensures string dates like "2025-04-27" are parsed
        category: z.string().optional(),
        tags: z.array(z.string()).optional(),
        coverImage: z.string().optional(),
        slug: z.string().optional(),
        author: z.string().optional()
    })
});

export const collections = {
    blog
};

