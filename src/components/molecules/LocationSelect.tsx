import React, { useContext } from "react";
import { LocationsContext } from "./LocationContext";
import SelectDropdown from "react-native-select-dropdown";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { Location } from "../../utils/types/Location";

export type LocationSelectProps = {
    /** Choosen location */
    location: Location | null;
    /** Setter for the location */
    setLocation: React.Dispatch<React.SetStateAction<Location | null>>;
    /** Text for the button */
    buttonText: string;
    /** Styling for the button */
    buttonStyle?: StyleProp<ViewStyle>;
    /** Styling for the button text */
    buttonTextStyle?: StyleProp<TextStyle>;
    /** Styling for the dropdown */
    rowStyle?: StyleProp<ViewStyle>;
    /** Styling for the dropdown text */
    rowTextStyle?: StyleProp<TextStyle>;
};

/**
 * Select button - This is a custom component, which handles the selection of a location
 * 
 * It uses the SelectDropdown by react-native-select-dropdown.  
 * This component is only used on the `Home` screen and is therefore not exported.
 * 
 * @param props - The properties passed to the component
 */
export function LocationSelect(props: LocationSelectProps) {
    // Get the location context
    const locationsContext = useContext(LocationsContext);

    return (
        // Use the SelectDropdown component
        <SelectDropdown
            defaultButtonText={props.buttonText}
            data={locationsContext.state.locations}
            onSelect={(selectedItem) => {
                props.setLocation(selectedItem); // Update the state of the choosen location through the setter
            }}

            // Styling for the component
            buttonTextAfterSelection={(selectedItem) => selectedItem.name}
            rowTextForSelection={(item) => item.name}
            buttonStyle={props.buttonStyle}
            buttonTextStyle={props.buttonTextStyle}
            dropdownStyle={{
                borderWidth: 0,
                borderRadius: 15,
                height: "auto", // Ensure that the dropdown is as high as it needs to be
            }}
            rowStyle={
                props.rowStyle
            }
            rowTextStyle={props.rowTextStyle}
        />
    );
}