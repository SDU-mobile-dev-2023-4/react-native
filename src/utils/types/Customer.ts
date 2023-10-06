import z from "zod";

export type Customer = z.infer<typeof CustomerSchema>;

/**
 * Zod schema for a Customer
 */
export const CustomerSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    address: z.string(),
});
