import { defineCollection, z } from "astro:content";

const mediaItem = z.object({
  src: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
  maxWidth: z.string().optional()
});

const columnContent = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("text"),
    text: z.string()
  }),
  z.object({
    kind: z.literal("image"),
    image: mediaItem
  }),
  z.object({
    kind: z.literal("image-grid"),
    images: z.array(mediaItem).min(1)
  })
]);

const projectBlock = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("paragraph"),
    title: z.string().optional(),
    spaceBefore: z.string().optional(),
    text: z.string()
  }),
  z.object({
    type: z.literal("image"),
    title: z.string().optional(),
    spaceBefore: z.string().optional(),
    image: mediaItem
  }),
  z.object({
    type: z.literal("image-grid"),
    title: z.string().optional(),
    spaceBefore: z.string().optional(),
    images: z.array(mediaItem).min(1)
  }),
  z.object({
    type: z.literal("two-column"),
    title: z.string().optional(),
    spaceBefore: z.string().optional(),
    layout: z.enum(["1-1", "1-2", "2-1"]).optional(),
    left: columnContent,
    right: columnContent
  }),
  z.object({
    type: z.literal("quote"),
    spaceBefore: z.string().optional(),
    text: z.string(),
    author: z.string().optional()
  }),
  z.object({
    type: z.literal("embed"),
    title: z.string().optional(),
    spaceBefore: z.string().optional(),
    src: z.string(),
    width: z.string().optional(),
    height: z.string().optional()
  })
]);

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    timeline: z.string().optional(),
    cover: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    legacyFile: z.string().optional(),
    summary: z.string().optional(),
    client: z.string().optional(),
    teamMembers: z.string().optional(),
    position: z.string().optional(),
    price: z.string().optional(),
    tools: z.string().optional(),
    websiteUrl: z.string().optional(),
    websiteLabel: z.string().optional(),
    videoUrl: z.string().optional(),
    videoLabel: z.string().optional(),
    heroGallery: z.array(mediaItem).optional(),
    info: z
      .object({
        client: z.string().optional(),
        teamMembers: z.string().optional(),
        role: z.string().optional(),
        price: z.string().optional(),
        tools: z.string().optional()
      })
      .optional(),
    blocks: z.array(projectBlock).optional(),
    featured: z.boolean().default(true)
  })
});

const home = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    cards: z.array(
      z.object({
        href: z.string(),
        title: z.string(),
        subtitle: z.string(),
        image: z.string(),
        filters: z.string(),
        previewHref: z.string().optional(),
        previewTitle: z.string().optional()
      })
    )
  })
});

export const collections = {
  projects,
  home
};
