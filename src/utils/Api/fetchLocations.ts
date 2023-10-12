import { LocationsState } from "../../components/molecules/LocationContext";
import z from "zod";
import { LocationSchema } from "../types/Location";
import { getData, storeData } from "./asyncStorage";

/**
 * Fetches Locations from the server and sets the state accordingly.
 * 
 * @param state The state to set
 * @param setState The state setter
 */
export default async function fetchLocations(state: LocationsState, setState: React.Dispatch<React.SetStateAction<LocationsState>>): Promise<void> {
    // Fetch locations from cache
    const cache = await getData("locations");

    // setup locations variable
    let locations: unknown = null;

    //get locations from cache if it exists
    if (cache) {
        // get data from cache
        locations = cache.data;

        //validate cache data
        const parsedLocations = z.array(LocationSchema).safeParse(locations);
        if (!parsedLocations.success) {
            // cache data is not correct, force load from server
            locations = null;
        } else {
            // Set state with parsed cars
            setState({
                locations: parsedLocations.data,
                error: false,
                loading: false,
            });
            return;
        }
    }

    // Get data from server if cache is empty
    if (locations === null) {
        const response = await fetch("https://themikkel.dk/unfollow/sdu/cars/locations");


        // Validate correct status code from server
        if (!response.ok) {
            setState({
                locations: [],
                error: `Error: ${response.status} - ${response.statusText}`,
                loading: false,
            });
            return;
        };

        // Validate correct content type from server
        const contentType = response.headers.get("Content-Type");
        if (!contentType || !contentType.includes("application/json")) {
            setState({
                locations: [],
                error: `Error: Invalid content type: ${contentType}`,
                loading: false,
            });
            return;
        }

        // Parse response body as json
        locations = await response.json() as unknown;
    }

    // Validate response body
    const parsedLocations = z.array(LocationSchema).safeParse(locations);

    // Validate parsing success
    if (!parsedLocations.success) {
        setState({
            locations: [],
            error: `Error: Invalid response body: ${parsedLocations.error.message}`,
            loading: false,
        });
        console.error(parsedLocations.error);
        return;
    }

    // Set state with parsed Locations
    setState({
        locations: parsedLocations.data,
        error: false,
        loading: false,
    });

    // Store data in cache
    storeData("locations", parsedLocations.data, 60);
}
