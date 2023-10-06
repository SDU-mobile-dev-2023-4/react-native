import z from "zod";

/**
 * Various information about the engine in the car.
 */
export type Engine = z.infer<typeof EngineSchema>;

/**
 * Zod schema for an Engine
 */
export const EngineSchema = z.object({
    id: z.number(),
    /** The amount of horse power the engine has */
    horsePower: z.number(),
    /** The amount of cylinders the engine has */
    cylinders: z.number(),
    /** The volume of the engine in liters */
    volume: z.number(),
    /** The maximum RPM of the engine */
    maxRPM: z.number(),
    
    created_at: z.coerce.date(),
    updated_at: z.coerce.date(),
});
