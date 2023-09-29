/**
 * @Example
 * {
 *   srcUrl: "Http://kitten.com/kitten.png"
 *   alt: "A sweet little kitten."
 * }
 */
export type Picture = {
    /** A url to an external hosted image */
    srcUrl: String,
    /** An alternate text, which describes the picture */
    alt: String,
}
