import { z } from "zod";

export type Story = z.infer<typeof Story>;
export const Story = z.object({
  id: z.number().int().positive(),
  title: z.string(),
  points: z.number().nullish(),
  user: z.string().nullish(),
  time: z.coerce.date(),
  time_ago: z.string(),
  comment_count: z.number().catch(0),
  url: z.string(),
  type: z.string(),
  domain: z.string().nullish(),
  deleted: z.boolean().nullish(),
});

export type Stories = z.infer<typeof Stories>;
export const Stories = z.array(Story);
