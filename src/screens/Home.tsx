// Import the base React library
import React from "react";

// Import the StatusBar component from the 'expo-status-bar' package
import { StatusBar } from 'expo-status-bar';

// Import multiple components and modules from the 'react-native' library
import { StyleSheet, View, Button, Pressable, Text, Image } from 'react-native';

// Import the LinearGradient component from the 'expo-linear-gradient' package
import { LinearGradient } from "expo-linear-gradient";

// Import the useFonts hook and specific font styles from the '@expo-google-fonts/inter' package
import { useFonts, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

// Import the DefaultGradient component from a local file path
import { DefaultGradient } from "../components/molecules/DefaultGradient";

/*
* Declare and export the 'Home' functional component which receives a 'navigation' prop
*/
export default function Home({ navigation }: { navigation: any }) {

    // Use the 'useFonts' hook to load the specified fonts and store their loading status in the 'fontsLoaded' constant
    const [fontsLoaded] = useFonts({
        Inter_500Medium,       // Load the 'Inter_500Medium' font style
        Inter_600SemiBold,     // Load the 'Inter_600SemiBold' font style
        Inter_700Bold          // Load the 'Inter_700Bold' font style
    });
    //Check if fonts are loaded 
      if (!fontsLoaded) {
        //If not loaded return a loading screen
        return (
          <view style={styles.body}>
            {/* <!-- apply the default gradient as a background --> */}
            <DefaultGradient />
            {/* <!-- display a "loading..." text with a specific style --> */}
            <text style={styles.buttontext}>loading...</text>
          </view>
        );
      }
    // If fonts are loaded, return the following
      return (
        // Begin a container for the main body
        <View style={styles.body}>
            {/* <!-- Apply the default gradient as a background --> */}
            <DefaultGradient />
            {/* <!-- Begin a nested container for the app's main content --> */}
            <View style={styles.container}>
                {/* <!-- Display the app's title "Car Rental App" with a specific style --> */}
                <Text style={styles.text}>Car Rental App</Text>
                {/* <!-- Create a clickable (pressable) button for city selection --> */}
                <Pressable style={styles.cityselect}>
                    {/* <!-- Display the "Select City" text within the button with a specific style --> */}
                    <Text style={styles.cityText}>Select City</Text>
                </Pressable>
                {/* <!-- Display the device's status bar with an automatic style --> */}
                <StatusBar style="auto" />
                {/* <!-- Create a clickable (pressable) button that will navigate to the 'CarBrowser' screen when pressed --> */}
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.push('CarBrowser')}
                >
                    {/* <!-- Begin a container for the button's content which includes text and an image --> */}
                    <View style={styles.row}>
                        {/* <!-- Display the "GO!" text with a specific style --> */}
                        <Text style={styles.buttontext}>GO! </Text>
                        {/* <!-- Display an image next to the "GO!" text, loading the image from a specific path and applying specific dimensions --> */}
                        <Image source={require('../../assets/GO.png')} style={{ width: imageSize, height: imageSize }} />
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

// Define a constant for image size
const imageSize= 30;

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
        marginRight: 15,                  
        // Apply margin to the right
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
    
    // Styling for a general text element
    text: {
        color: '#fff',                    
        // Set text color to white
        fontFamily: 'Inter_700Bold',      
        // Set font family
        alignSelf: 'center',              
        // Center the text element within its parent container
        fontWeight: 'bold',               
        // Set font weight to bold
        fontSize: 40,                     
        // Set font size
        marginRight: 15,                  
        // Apply margin to the right
    },
    
    // Styling for a city selection element
    cityselect: {
        color: '#transparent',            
        // Set text color to transparent
        alignSelf: 'center',              
        // Center the element within its parent container
        fontSize: 30,                     
        // Set font size
        marginRight: 15,                  
        // Apply margin to the right
        borderColor: '#fff',              
        // Set border color to white
        borderWidth: 2,                   
        // Set border width
        borderRadius: 15,                 
        // Round the corners with a radius of 15
        paddingVertical: 10,              
        // Apply vertical padding
        paddingHorizontal: 10,            
        // Apply horizontal padding
    },
    
    // Styling for the text within the city selection element
    cityText: {
        color: '#fff',                    
        // Set text color to white
        fontWeight: 'bold',               
        // Set font weight to bold
        fontFamily: 'Inter_600SemiBold',  
        // Set font family
        alignSelf: 'center',              
        // Center the text element within its parent container
        fontSize: 20,                     
        // Set font size
        marginRight: 15,                  
        // Apply margin to the right
    },

});
