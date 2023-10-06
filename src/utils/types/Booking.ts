import z from "zod";
import { Car, CarScheme } from "./Car";
import { Customer, CustomerScheme } from "./Customer";
import { Location, LocationScheme } from "./Location";

/**
 * Type representing a booking ticket.
 */
export type Booking = z.infer<typeof BookingScheme>;

/**
 * Zod schema for a Booking
 */
export const BookingScheme = z.object({
    /** Which car the customer has ordered */
    car: CarScheme,
    startTime: z.date(),
    /** Location from where the car will be picked up */
    startLocation: LocationScheme,
    endTime: z.date(),
    /** Location to where the car will be delivered */
    endLocation: LocationScheme,
    price: z.number(),
    customer: CustomerScheme,
});
