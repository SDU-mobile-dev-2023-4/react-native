import React from "react";
import { Location } from "../../utils/types/Location";

interface LocationsState {
    locations: Location[];
}

interface LocationsContextType {
    state: LocationsState;
    setState: React.Dispatch<React.SetStateAction<LocationsState>>;
}

export const LocationsContext = React.createContext<LocationsContextType>({
    state: { 
        locations: []
    },
    setState: () => {},
});

interface LocationsProviderProps {
    children: React.ReactNode;
}

export const LocationsProvider = ({ children }: LocationsProviderProps) => {
    const [state, setState] = React.useState<LocationsState>({
        locations: [],
    });

    return (
        <LocationsContext.Provider value={{ state: state, setState }}>
            {children}
        </LocationsContext.Provider>
    );
}
