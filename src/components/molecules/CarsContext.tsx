import React, { useEffect } from "react";
import { Car } from "../../utils/types/Car";
import fetchCars from "../../utils/Api/fetchCars";

/**
 * CarsState
 * 
 * This holds the cars, the error and the loading state.
 */
export interface CarsState {
    /** Cars in the system */
    cars: Car[];
    /** Error message for state */
    error: false | string;
    /** Loading state for state */
    loading: boolean;
}

/**
 * CarsContextType
 * 
 * The type of the context.
 */
export interface CarsContextType {
    state: CarsState;
    setState: React.Dispatch<React.SetStateAction<CarsState>>;
}

/**
 * CarsContext
 * 
 * The context that holds the cars state and the setState function.
 */
export const CarsContext = React.createContext<CarsContextType>({
    state: {
        cars: [],
        error: false,
        loading: true,
    },
    setState: () => { },
});

/**
 * CarsProviderProps
 * 
 * Props for the CarsProvider component.
 */
interface CarsProviderProps {
    children: React.ReactNode;
}

/**
 * CarsProvider
 * 
 * Provider for the CarsContext. It sets the initial state and fetches the cars from the API.
 * This have to wrap all the components that need to access the cars state.
 * 
 * @param props Props for the CarsProvider component.
 * @returns Provider for the CarsContext.
 */
export const CarsProvider = (props: CarsProviderProps) => {
    const [state, setState] = React.useState<CarsState>({
        cars: [],
        error: false,
        loading: true,
    });

    useEffect(() => {
        fetchCars(state, setState);
    }, []);

    return (
        <CarsContext.Provider value={{ state: state, setState }}>
            {props.children}
        </CarsContext.Provider>
    );
}
