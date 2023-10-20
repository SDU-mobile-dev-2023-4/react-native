import React, { useContext } from "react";
import { StyleSheet, View, Pressable, Image } from 'react-native';
import { DefaultGradient } from "../components/molecules/DefaultGradient";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackList } from "./App";
import { LocationsContext } from "../components/molecules/LocationContext";
import { Location } from "../utils/types/Location";
import SelectDropdown from "react-native-select-dropdown";
import { H1TextStyle, whiteTextStyle } from "../utils/styles/generalTextStyle";
import { Text } from "../components/atoms/Text/Text";
import { OutlineWhiteButtonStyle } from "../utils/styles/ButtonStyle";

type HomeProps = NativeStackScreenProps<AppStackList, 'Home'>;

/**
 * Home screen - This is the main start screen for the user, and handles the selection of a location and navigation to the `CarBrowser` screen
 * 
 * @param navigation - Used to navigate between screens
 */
export default function Home(props: HomeProps) {
    // Internally set state for the choosen location in the location selection element
    const [choosenLocation, setChoosenLocation] = React.useState<Location | null>(null);

    return (
        <View style={styles.body}>
            {/* <!-- Apply the default gradient as a background, which is its own component --> */}
            <DefaultGradient />
            {/* <!-- Begin a nested container for the app's main content --> */}
            <View style={styles.container}>
                <Text style={{ fontSize: 40 }} bold color="light">Car Rental App</Text>
                {/* Select button have been abstracted into its own component, due to the complexity of the component */}
                <SelectButton choosenLocation={choosenLocation} setChoosenLocation={setChoosenLocation} />
                {/* Go button have been abstracted into its own component, since it is a combination of multiple components */}
                <GoButton {...props} choosenLocation={choosenLocation} />
            </View>
        </View>
    );
}

/**
 * Select button - This is a custom component, which handles the selection of a location
 * 
 * It uses the SelectDropdown by react-native-select-dropdown.  
 * This component is only used on the `Home` screen and is therefore not exported.
 * 
 * @param porps - The properties passed to the component
 */
function SelectButton(porps: {
    choosenLocation: Location | null;
    setChoosenLocation: React.Dispatch<React.SetStateAction<Location | null>>;
}) {
    // Get the location context
    const locationsContext = useContext(LocationsContext);

    return (
        // Use the SelectDropdown component
        <SelectDropdown
            defaultButtonText="Select a location"
            data={locationsContext.state.locations}
            onSelect={(selectedItem) => {
                porps.setChoosenLocation(selectedItem); // Update the state of the choosen location through the setter
            }}

            // Styling for the component
            buttonTextAfterSelection={(selectedItem) => selectedItem.name}
            rowTextForSelection={(item) => item.name}
            buttonStyle={OutlineWhiteButtonStyle as object}
            buttonTextStyle={{ ...H1TextStyle, ...whiteTextStyle }}
            dropdownStyle={{
                borderWidth: 2,
                borderRadius: 15,
                height: "auto", // Ensure that the dropdown is as high as it needs to be
            }}
            rowStyle={{
                paddingVertical: 10,
            }}
        />
    );
}

/**
 * Go button - This is a custom component, which handles the navigation to the `CarBrowser` screen
 * 
 * @param props - Same props as the main `Home` screen, but with the addition of the choosen location state
 * @returns {JSX.Element} Go button component
 */
function GoButton(props: HomeProps & { choosenLocation: Location | null }): JSX.Element {
    return (
        <Pressable
            style={styles.button}
            onPress={() => props.navigation.push('CarBrowser', { location: props.choosenLocation?.id ?? null })}
        >
            {/* <!-- Begin a container for the button's content which includes text and an image --> */}
            <View style={styles.row}>
                {/* <!-- Display the "GO!" text with a specific style --> */}
                <Text style={styles.buttontext}>GO! </Text>
                {/* <!-- Display an image next to the "GO!" text, loading the image from a specific path and applying specific dimensions --> */}
                <Image source={require('../../assets/GO.png')} style={{ width: imageSize, height: imageSize }} />
            </View>
        </Pressable>
    );
}

// Define a constant for image size
const imageSize = 30;

const styles = StyleSheet.create({

    // Styling for the main body container
    body: {
        backgroundColor: '#transparent',
        // Set background color to transparent
        alignItems: 'center',
        // Horizontally center child elements
        justifyContent: 'center',
        // Vertically center child elements
        height: '100%'
        // Occupy the full height of the parent
    },

    // Styling for a secondary container
    container: {
        backgroundColor: '#transparent',
        // Set background color to transparent
        alignItems: 'center',
        // Horizontally center child elements
        justifyContent: 'space-between',
        // Distribute child elements evenly with space between them
        height: '45%',
        // Occupy 45% of the parent's height
    },

    // Styling for a button element
    button: {
        backgroundColor: '#EA4646',
        // Set background color to a shade of red
        borderRadius: 20,
        // Round the corners with a radius of 20
        paddingVertical: 10,
        // Apply vertical padding
        paddingHorizontal: 80,
        // Apply horizontal padding
    },

    // Styling for the text within the button
    buttontext: {
        color: '#fff',
        // Set text color to white
        alignSelf: 'center',
        // Center the text element within its parent container
        fontWeight: '100',
        // Set font weight
        textTransform: 'uppercase',
        // Convert text to uppercase
        fontSize: 32,
        // Set font size
        fontFamily: 'Inter_500Medium',
        // Set font family
    },

    // Styling for a container that arranges children in a row
    row: {
        flexDirection: 'row',
        // Arrange children horizontally
        alignItems: 'center',
        // Vertically center-align the children
    },
});
