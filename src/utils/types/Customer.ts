import z from "zod";

export type Customer = z.infer<typeof CustomerSchema>;

/**
 * Zod schema for a Customer
 */
export const CustomerSchema = z.object({
    id: z.number().nonnegative(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    address: z.string(),
    created_at: z.coerce.date(),
    updated_at: z.coerce.date(),
});
