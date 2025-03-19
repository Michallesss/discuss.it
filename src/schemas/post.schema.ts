import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string({ message: "Passed title not seems to be string." })
    .trim()
    .min(3, { message: "Title needs to be at least 3 characters long." })
    .max(256, { message: "Title needs to be at most 256 characters long." }),
  content: z
    .string({ message: "Passed content not seems to be string." })
    .trim()
    .min(3, { message: "Content needs to be at least 3 characters long." })
    .max(2048, { message: "Content needs to be at most 2048 characters long." }),
});

export type postType = z.infer<typeof postSchema>;