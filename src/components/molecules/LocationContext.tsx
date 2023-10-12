import React, { useEffect } from "react";
import { Location } from "../../utils/types/Location";
import fetchLocations from "../../utils/Api/fetchLocations";

/**
 * LocationState
 * 
 * This holds the locations, the error and loading state.
 */
export interface LocationsState {
    /** Locations in the system */
    locations: Location[];
    /** Error mesasge for state */
    error: false | string;
    /** Loading state for state */
    loading: boolean;
}

/**
 * LocationsContextType
 * 
 * The type of the context
 */
export interface LocationsContextType {
    state: LocationsState;
    setState: React.Dispatch<React.SetStateAction<LocationsState>>;
}

/**
 * LocationsContext
 * 
 * The context that holds the locations state and the setState function.
 */
export const LocationsContext = React.createContext<LocationsContextType>({
    state: {
        locations: [],
        error: false,
        loading: true,
    },
    setState: () => { },
});


/**
 * LocationsProviderProps
 * 
 * Props for the LocationsProvider component.
 */
interface LocationsProviderProps {
    children: React.ReactNode;
}

/**
 * LocationsProvider for the LocationsContext. It sets the initial state and fetches the locations from the API.
 * 
 * @param props Props for the LocationsProvider component.
 * @returns Provider for the LocationsContext.
 */
export const LocationsProvider = (props: LocationsProviderProps) => {
    const [state, setState] = React.useState<LocationsState>({
        locations: [],
        error: false,
        loading: true,
    });

    useEffect(() => {
        fetchLocations(state, setState);
    }, []);

    return (
        <LocationsContext.Provider value={{ state: state, setState }}>
            {props.children}
        </LocationsContext.Provider>
    );
}
