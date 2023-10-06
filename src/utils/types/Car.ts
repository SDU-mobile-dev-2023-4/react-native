import z from "zod";
import { EngineScheme } from "./Engine";
import { PictureScheme } from "./Picture";
import { LocationScheme } from "./Location";
import { BrandScheme } from "./Brand";
import { CarTypeScheme } from "./CarType";

export type Car = z.infer<typeof CarScheme>;

/**
 * Zod schema for a Car
 */
export const CarScheme = z.object({
    engine: EngineScheme,
    name: z.string(),
    pictures: z.array(PictureScheme),
    location: LocationScheme,
    brand: BrandScheme,
    weight: z.number(),

    /** The time it takes the car to go from 0-100km/h */
    acceleration: z.number(),
    wheelCount: z.number(),
    description: z.string(),
    type: CarTypeScheme,
    price: z.number(),
    doorCount: z.number(),
    manufacturingYear: z.number(),
    topSpeed: z.number(),
});
