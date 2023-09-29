import { Engine } from "./Engine";
import { Picture } from "./Picture";
import { Location } from "./Location";
import { Brand } from "./Brand";
import { CarType } from "./CarType";

export type Car = {
    engine: Engine,
    name: String,
    pictures: Picture[],
    location: Location,
    brand: Brand,
    weight: number,

    /** The time it takes the car to go from 0-100km/h */
    acceleration: number,
    wheelCount: number,
    description: String,
    type: CarType,
    price: number,
    doorCount: number,
    manufacturingYear: number,
    topSpeed: number,
}
