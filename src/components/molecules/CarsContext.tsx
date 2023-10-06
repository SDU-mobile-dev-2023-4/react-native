import React, { useEffect } from "react";
import { Car } from "../../utils/types/Car";
import fetchCars from "../../utils/Api/fetchCars";

export interface CarsState {
    cars: Car[];
    error: false | string;
    loading: boolean;
}

export interface CarsContextType {
    state: CarsState;
    setState: React.Dispatch<React.SetStateAction<CarsState>>;
}

export const CarsContext = React.createContext<CarsContextType>({
    state: {
        cars: [],
        error: false,
        loading: true,
    },
    setState: () => { },
});

interface CarsProviderProps {
    children: React.ReactNode;
}

export const CarsProvider = ({ children }: CarsProviderProps) => {
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
            {children}
        </CarsContext.Provider>
    );
}
