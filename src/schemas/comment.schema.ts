import { z } from "zod";

export const commentSchema = z.object({
  comment: z
    .string({ message: "Passed comment not seems to be string." })
    .trim()
    .min(1, { message: "Comment needs to be at least 1 characters long." })
    .max(512, { message: "Comment needs to be at most 512 characters long." }),
});

export type commentType = z.infer<typeof commentSchema>;