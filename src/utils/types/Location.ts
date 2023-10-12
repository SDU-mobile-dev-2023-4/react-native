import z from "zod";

export type Location = z.infer<typeof LocationSchema>;

/**
 * Zod schema for a Location
 */
export const LocationSchema = z.object({
    id: z.number().nonnegative(),
    name: z.string(),
    address: z.string(),
    created_at: z.coerce.date(),
    updated_at: z.coerce.date(),
});
