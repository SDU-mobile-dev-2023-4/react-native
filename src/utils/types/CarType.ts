import z from "zod";

/**
 * The Type of car.
 *
 * @example
 * Sedan
 * SUV
 */
export enum CarType {
    Sedan = "Sedan",
    SUV = "SUV",
    Truck = "Truck",
    Compact = "Compact",
}

/**
 * Zod schema for a CarType
 */
export const CarTypeSchema = z.nativeEnum(CarType);
