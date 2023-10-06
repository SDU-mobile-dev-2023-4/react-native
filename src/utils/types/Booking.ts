import z from "zod";
import { Car, CarSchema } from "./Car";
import { Customer, CustomerSchema } from "./Customer";
import { Location, LocationSchema } from "./Location";

/**
 * Type representing a booking ticket.
 */
export type Booking = z.infer<typeof BookingSchema>;

/**
 * Zod schema for a Booking
 */
export const BookingSchema = z.object({
    /** Which car the customer has ordered */
    car: CarSchema,
    startTime: z.date(),
    /** Location from where the car will be picked up */
    startLocation: LocationSchema,
    endTime: z.date(),
    /** Location to where the car will be delivered */
    endLocation: LocationSchema,
    price: z.number(),
    customer: CustomerSchema,
});
