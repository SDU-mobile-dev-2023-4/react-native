import { Car } from "./Car";
import { Customer } from "./Customer";
import { Location } from "./Location";

/**
 * Type representing a booking ticket.
 */
export type Booking = {
    /** Which car the customer has ordered */
    car: Car,
    startTime: Date,
    /** Location from where the car will be picked up */
    startLocation: Location,
    endTime: Date,
    /** Location to where the car will be delivered */
    endLocation: Location,
    price: number,
    customer: Customer,
}
