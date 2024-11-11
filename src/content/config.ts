import {defineCollection, z} from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        image: image().refine(img => img.width < 1200, {
            message: 'Image width must be lower than 1200 pixels',
        }),
        date: z.date(),
        //? Relation with other collections
        author: z.string(),
        //? Relation with other collections
        tags: z.array(z.string()),
    })
})

export const collections = {
    blog: blogCollection
}