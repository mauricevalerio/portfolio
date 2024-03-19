import { z, defineCollection } from "astro:content";

const headerCollection = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        avatarImgPath: image(),
        avatarImgAlt: z.string(),
        headerText: z.string(),
        subHeaderText: z.string(),
        socialMedia: z.array(z.object({
            name: z.string(),
            iconPath: image(),
            link: z.string()
        }))
    })
});

const projectCollection = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        projectList: z.array(z.object({
            name: z.string(),
            description: z.string(),
            imgPath: image(),
            technologies: z.array(image()),
            link: z.string(),
            repo: z.string()
        }))
    })
});

export const collections = {
    header: headerCollection,
    project: projectCollection
};