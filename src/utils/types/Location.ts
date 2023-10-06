import z from "zod";

export type Location = z.infer<typeof LocationScheme>;

/**
 * Zod schema for a Location
 */
export const LocationScheme = z.object({
    name: z.string(),
    address: z.string(),
});
