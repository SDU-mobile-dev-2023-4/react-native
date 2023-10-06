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
export const BrandSchema = z.object({
    id: z.number(),
    name: z.string(),
    created_at: z.coerce.date(),
    updated_at: z.coerce.date(),
});
