import { z } from "zod";

/**
 * @Example
 * {
 *   srcUrl: "Http://kitten.com/kitten.png"
 *   alt: "A sweet little kitten."
 * }
 */
export type Picture = z.infer<typeof PictureSchema>;

/**
 * Zod schema for a Picture
 */
export const PictureSchema = z.object({
    id: z.number(),
    /** A url to an external hosted image */
    srcUrl: z.string().url(),
    /** An alternate text, which describes the picture */
    alt: z.string(),
    created_at: z.coerce.date(),
    updated_at: z.coerce.date(),
});
