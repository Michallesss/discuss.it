import { z } from "zod";

export const loginSchema = z.object({
  identifier: z
    .string({ message: "Passed identifier not seems to be string." }) // ? Is string checked for alphanumeric characters
    .trim()
    .min(3, { message: "Identifier needs to be at least 3 characters long." })
    .max(345, { message: "Identifier needs to be at most 345 characters long." }),
  password: z
    .string({ message: "Passed password not seems to be string." }) // ? Is string checked for alphanumeric characters
    .trim()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{,}$/, { message: "Password must contain at least one letter, one number and one special character." })
    .min(8, { message: "Password needs to be at least 8 characters long." })
    .max(128, { message: "Password needs to be at most 128 characters long." }),
});

export type loginType = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  email: z
    .string({ message: "Passed email not seems to be string." })
    .trim()
    .email({ message: "Please provide a valid email address." }) // * email is checking for valid email 
    .max(345, { message: "Email address needs to be at most 345 characters long." }), // * email is checked for max length
  password: z
    .string({ message: "Passed password not seems to be string." }) // ? Is string checked for alphanumeric characters
    .trim()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{,}$/, { message: "Password must contain at least one letter, one number and one special character." })
    .min(8, { message: "Password needs to be at least 8 characters long." })
    .max(128, { message: "Password needs to be at most 128 characters long." }),
  confirmPassword: z // make sure it match with password
    .string({ message: "Passed confirm password not seems to be string." })
    .trim()
}).superRefine(({ password, confirmPassword }, ctx) => {
  if (password !== confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Passwords must match.",
      path: ["confirmPassword"],
    });
  }
});

export type registerType = z.infer<typeof registerSchema>;