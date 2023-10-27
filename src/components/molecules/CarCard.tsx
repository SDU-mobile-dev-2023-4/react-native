import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

// Define the CarCard component to accept carName, carType, and imageLocation as props
type CarCardProps = {
    carName: string;
    carType: string;
    imageLocation: any;
    onPress: () => void;
};

/*
* CarCard
* @param carName - The name of the car
* @param carType - The type of the car
* @param imageLocation - The location of the image, remember require(/path/to/image)
* @returns {JSX.Element} - A car card component
*/
export const CarCard = ({ carName, carType, imageLocation, onPress }: CarCardProps) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.imageContainer}>
                {/* Use the passed imageLocation prop for the Image source */}
                <Image source={imageLocation} style={styles.image} />
                <LinearGradient
                    colors={['transparent', 'white', 'white']}
                    locations={[0, 0.3, 1]}
                    style={styles.gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.5 }}
                />
                {/* Use the passed carName and carType props for the Text components */}
                <Text style={styles.carName}>{carName}</Text>
                <Text style={styles.carType}>{carType}</Text>
            </View>
        </Pressable>
    );
}


const imageSizeX = 167;
const imageSizeY = 167;
const borderRadius = 15;
const verticalSpacing = 25; //adjusting spacing vertical
const styles = StyleSheet.create({
    imageContainer: {
        width: imageSizeX,
        height: imageSizeY,
        position: 'relative', // Set the container's position to relative
        borderRadius: borderRadius,
        marginTop: verticalSpacing, // Add top margin for vertical spacing
        marginBottom: verticalSpacing, // Add bottom margin for vertical spacing
    },
    image: {
        width: '100%',
        height: '100%',
        bottom: '20%',
        borderRadius: borderRadius,
    },
    gradient: {
        position: 'absolute', // Absolute position for the gradient
        left: 0,
        right: 0,
        bottom: 0,
        height: '70%', // covers half the image from the bottom up
        borderRadius: borderRadius,
    },
    carName: {
        position: 'absolute',    // Absolute position for the text
        top: '40%',              // Position the text to the middle vertically
        left: '3%',             // Position the text to the middle horizontally
        color: 'black',          // Set text color to white
        zIndex: 1,               // Ensure text is on top
        textAlign: 'left',       // Center the text horizontally
        fontFamily: 'Inter_700Bold',
        fontWeight: 'bold',
        fontSize: 20,
    },
    
    carType: {
        position: 'absolute',    // Absolute position for the text
        bottom: 10,              // Position the text 10 pixels from the bottom
        left: 0,                 // Start the text from the left edge
        right: 0,                // Extend the text to the right edge
        color: 'black',          // Set text color to black
        zIndex: 2,               // Ensure text is on top
        textAlign: 'center',     // Center the text horizontally
        fontFamily: 'Inter_300Light',
        fontSize: 20,
    },
});
