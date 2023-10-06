import z from "zod";
import { EngineSchema } from "./Engine";
import { PictureSchema } from "./Picture";
import { LocationSchema } from "./Location";
import { BrandSchema } from "./Brand";
import { CarTypeSchema } from "./CarType";

export type Car = z.infer<typeof CarSchema>;

/**
 * Zod schema for a Car
 */
export const CarSchema = z.object({
    id: z.number(),
    engine: EngineSchema,
    name: z.string(),
    pictures: z.array(PictureSchema),
    location: LocationSchema,
    brand: BrandSchema,
    weight: z.number(),

    /** The time it takes the car to go from 0-100km/h */
    acceleration: z.number(),
    wheelCount: z.number(),
    description: z.string(),
    type: CarTypeSchema,
    price: z.number(),
    doorCount: z.number(),
    manufacturingYear: z.number(),
    topSpeed: z.number(),
    created_at: z.coerce.date(),
    updated_at: z.coerce.date(),
});
