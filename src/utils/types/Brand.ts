import z from "zod";

/**
 * The make for the car manifacture
 *
 * @Example
 * Audi
 * Mercedes
 * VW
 */
export enum Brand {
    Ferrari = "Ferrari",
    Mercedes = "Mercedes",
    Lamborghini = "Lamborghini",
    Bentley = "Bentley",
    RollsRoyce = "Rolls Royce"
}

/**
 * Zod schema for a Brand
 */
export const BrandSchema = z.nativeEnum(Brand);
