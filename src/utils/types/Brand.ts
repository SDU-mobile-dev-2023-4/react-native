import z from "zod";

/**
 * The make for the car manifacture
 *
 * @Example
 * Audi
 * Mercedes
 * VW
 */
export type Brand = {
    name: String,
}

/**
 * Zod schema for a Brand
 */
export const BrandScheme = z.object({
    name: z.string(),
});
