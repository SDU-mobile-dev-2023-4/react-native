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
    Coupe = "Coupe",
    Convertible = "Convertible",
    Wagon = "Wagon",
    Van = "Van",
    Motorcycle = "Motorcycle",
    Electric = "Electric",
    Sports = "Sports",
    Hatchback = "Hatchback",
    UFO = "UFO",
    Hybrid = "Hybrid",
    Muscle = "Muscle",
    MilitaryJet = "Military Jet",
    Other = "Other",
}

/**
 * Zod schema for a CarType
 */
export const CarTypeSchema = z.nativeEnum(CarType);
