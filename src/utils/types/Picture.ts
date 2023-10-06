import { z } from "zod";

/**
 * @Example
 * {
 *   srcUrl: "Http://kitten.com/kitten.png"
 *   alt: "A sweet little kitten."
 * }
 */
export type Picture = z.infer<typeof PictureScheme>;

/**
 * Zod schema for a Picture
 */
export const PictureScheme = z.object({
    /** A url to an external hosted image */
    srcUrl: z.string().url(),
    /** An alternate text, which describes the picture */
    alt: z.string(),
});
