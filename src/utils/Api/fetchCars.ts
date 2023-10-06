import { CarsState } from "../../components/molecules/CarsContext";
import z from "zod";
import { CarScheme } from "../types/Car";

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
            error: {
                errored: true,
                message: `Error: ${response.status} - ${response.statusText}`,
            },
            loading: false,
        });
        return;
    };

    // Validate correct content type from server
    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
        setState({
            cars: [],
            error: {
                errored: true,
                message: `Error: Invalid content type: ${contentType}`,
            },
            loading: false,
        });
        return;
    }

    // Parse response body as json
    const cars = await response.json() as unknown;

    // Validate response body
    const parsedCars = z.array(CarScheme).safeParse(cars);

    // Validate parsing success
    if (!parsedCars.success) {
        setState({
            cars: [],
            error: {
                errored: true,
                message: `Error: Invalid response body: ${parsedCars.error.message}`,
            },
            loading: false,
        });
        return;
    }
    
    // Set state with parsed cars
    setState({
        cars: parsedCars.data,
        error: {
            errored: false,
            message: "",
        },
        loading: false,
    });
}