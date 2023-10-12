import { CarsState } from "../../components/molecules/CarsContext";
import z from "zod";
import { CarSchema } from "../types/Car";
import { getData, storeData } from "./asyncStorage";

/**
 * Fetches cars from the server and sets the state accordingly.
 * 
 * @param state The state to set
 * @param setState The state setter
 */
export default async function fetchCars(state: CarsState, setState: React.Dispatch<React.SetStateAction<CarsState>>) {
    const response = await fetch("https://themikkel.dk/unfollow/sdu/cars/cars");

    // Validate correct status code from server
    if (!response.ok) {
        setState({
            cars: [],
            error: `Error: ${response.status} - ${response.statusText}`,
            loading: false,
        });
        return;
    };

    // Validate correct content type from server
    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
        setState({
            cars: [],
            error: `Error: Invalid content type: ${contentType}`,
            loading: false,
        });
        return;
    }

    // Parse response body as json
    const cars = await response.json() as unknown;

    // Validate response body
    const parsedCars = z.array(CarSchema).safeParse(cars);
    // Validate parsing success
    if (!parsedCars.success) {
        setState({
            cars: [],
            error: `Error: Invalid response body: ${parsedCars.error.message}`,
            loading: false,
        });
        console.error(parsedCars.error);
        return;
    }

    console.log("Parsed cars", parsedCars.data);

    await storeData("cars", parsedCars.data);

    setTimeout(() => {
        getData("cars").then((data) => {
            console.log(data);
        });
    }, 100);

    // Set state with parsed cars
    setState({
        cars: parsedCars.data,
        error: false,
        loading: false,
    });
}