import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    category: z.enum(['Aves', 'Peixes', 'Carne Suína', 'Massas', 'Sobremesas']),
    prepTime: z.string(),
    servings: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { recipes };
