import z from "zod";

export type Location = z.infer<typeof LocationSchema>;

/**
 * Zod schema for a Location
 */
export const LocationSchema = z.object({
    name: z.string(),
    address: z.string(),
});
