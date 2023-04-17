import { z, defineCollection } from "astro:content"

const serviceSchema = defineCollection({
  schema: z.object({
    id: z.string(),
    name: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    dataItem: z.string(),
    dataState: z.string(),
  }),
})

export const collections = {
  services: serviceSchema,
}
