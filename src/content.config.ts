import { defineCollection, z } from 'astro:content';

const activities = defineCollection({
  schema: z.object({
    title: z.string(),
    grade: z.enum(['Α','Β','Γ','Δ','Ε','ΣΤ']),
    unit: z.string(),
    topic: z.string(),
    duration: z.number(),
    difficulty: z.number().min(1).max(3),
    type: z.enum(['activity','interactive','quiz','project','video','game']),
    tool: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
    description: z.string()
  })
});

export const collections = { activities };
