import { defineCollection, z } from "astro:content";

const mediaItem = z.object({
  src: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
  maxWidth: z.string().optional()
});

const proseFields = {
  text: z.string().optional(),
  paragraphs: z.array(z.string()).min(1).optional()
};

const columnContent = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("text"), ...proseFields }),
  z.object({
    kind: z.literal("image"),
    image: mediaItem
  }),
  z.object({
    kind: z.literal("image-grid"),
    images: z.array(mediaItem).min(1)
  }),
  z.object({
    kind: z.literal("data-chart"),
    eyebrow: z.string().optional(),
    description: z.string().optional(),
    compact: z.boolean().optional(),
    metrics: z.array(z.object({
      value: z.string(),
      label: z.string(),
      detail: z.string().optional(),
      progress: z.number().min(0).max(100).optional()
    })).min(1),
    sourceLabel: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    note: z.string().optional()
  })
]);

const projectBlock = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("paragraph"),
    title: z.string().optional(),
    spaceBefore: z.string().optional(),
    ...proseFields
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
    type: z.literal("decision"),
    label: z.string(),
    question: z.string(),
    decision: z.string(),
    rationale: z.array(z.string()).min(1),
    outcome: z.string().optional(),
    image: mediaItem.optional()
  }),
  z.object({
    type: z.literal("data-chart"),
    title: z.string().optional(),
    eyebrow: z.string().optional(),
    description: z.string().optional(),
    compact: z.boolean().optional(),
    metrics: z.array(z.object({
      value: z.string(),
      label: z.string(),
      detail: z.string().optional(),
      progress: z.number().min(0).max(100).optional()
    })).min(1),
    sourceLabel: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    note: z.string().optional()
  }),
  z.object({
    type: z.literal("workflow"),
    title: z.string().optional(),
    intro: z.string().optional(),
    root: z.string(),
    items: z.array(z.object({
      title: z.string(),
      description: z.string(),
      steps: z.array(z.string()).min(1)
    })).min(1)
  }),
  z.object({
    type: z.literal("interaction-grid"),
    title: z.string().optional(),
    intro: z.string().optional(),
    items: z.array(z.object({
      title: z.string(),
      description: z.string(),
      image: mediaItem
    })).min(1)
  }),
  z.object({
    type: z.literal("question-grid"),
    title: z.string().optional(),
    questions: z.array(z.object({
      label: z.string(),
      question: z.string()
    })).min(1)
  }),
  z.object({
    type: z.literal("card-grid"),
    title: z.string().optional(),
    layout: z.enum(["auto", "2", "3", "4", "2x2"]).optional(),
    items: z.array(z.object({
      label: z.string().optional(),
      title: z.string(),
      description: z.string().optional()
    })).min(1).max(5)
  }),
  z.object({
    type: z.literal("process-grid"),
    title: z.string().optional(),
    layout: z.enum(["2", "3", "4", "1x2"]).optional(),
    approaches: z.array(z.object({
      label: z.string(),
      title: z.string(),
      description: z.string().optional(),
      steps: z.array(z.string()).min(1),
      image: mediaItem.optional()
    })).min(1).max(4)
  }),
  z.object({
    type: z.literal("comparison-grid"),
    title: z.string().optional(),
    items: z.array(z.object({
      label: z.string(),
      title: z.string(),
      strengths: z.array(z.string()).min(1),
      tradeoffs: z.array(z.string()).min(1),
      image: mediaItem.optional()
    })).min(2).max(4)
  }),
  z.object({
    type: z.literal("research-grid"),
    title: z.string().optional(),
    eyebrow: z.string().optional(),
    participants: z.string(),
    methods: z.array(z.string()).min(1),
    metrics: z.array(z.object({
      value: z.string(),
      label: z.string(),
      detail: z.string().optional()
    })).min(1),
    pioneer: z.object({
      title: z.string(),
      paragraphs: z.array(z.string()).min(1),
      image: mediaItem
    }).optional(),
    output: mediaItem.optional(),
    testing: z.object({
      title: z.string(),
      paragraphs: z.array(z.string()).min(1)
    }).optional(),
    note: z.string().optional()
  }),
  z.object({
    type: z.literal("quote"),
    spaceBefore: z.string().optional(),
    ...proseFields,
    author: z.string().optional()
  }),
  z.object({
    type: z.literal("embed"),
    title: z.string().optional(),
    src: z.string(),
    width: z.string().optional(),
    height: z.string().optional(),
    caption: z.string().optional(),
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
