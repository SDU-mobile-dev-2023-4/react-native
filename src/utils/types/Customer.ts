import z from "zod";

export type Customer = z.infer<typeof CustomerScheme>;

/**
 * Zod schema for a Customer
 */
export const CustomerScheme = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    address: z.string(),
});
