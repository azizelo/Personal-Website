import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Optional: publishDate, tags, coverImage, etc.
        // publishDate: z.date().optional(),
    })
});

export const collections = {
    blog,
};
