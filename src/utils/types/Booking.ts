import { Car } from "./Car";
import { Customer } from "./Customer";
import { Location } from "./Location";

export type Booking = {
    car: Car,
    startTime: Date,
    startLocation: Location,
    endTime: Date,
    endLocation: Location,
    price: number,
    customer: Customer,
}
