import React from "react";
import { Car } from "../../utils/types/Car";

interface CarsState {
    cars: Car[];
}

interface CarsContextType {
    state: CarsState;
    setState: React.Dispatch<React.SetStateAction<CarsState>>;
}

export const CarsContext = React.createContext<CarsContextType>({
    state: { 
        cars: []
    },
    setState: () => {},
});

interface CarsProviderProps {
    children: React.ReactNode;
}

export const CarsProvider = ({ children }: CarsProviderProps) => {
    const [state, setState] = React.useState<CarsState>({
        cars: [],
    });

    return (
        <CarsContext.Provider value={{ state: state, setState }}>
            {children}
        </CarsContext.Provider>
    );
}
