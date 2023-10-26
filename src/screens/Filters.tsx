import React from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { DefaultGradient } from "../components/molecules/DefaultGradient";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackList } from "./App";
import { Text } from "../components/atoms/Text/Text";
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

type FilterProps = NativeStackScreenProps<AppStackList, 'Filters'>;

/**
 * Filters screen - show a list of filters to apply to the car list
 * 
 * @param props - The properties passed to the component
 */
export default function Filters(props: FilterProps) {
    return (
        <View style={styles.container}>
          <DefaultGradient />
           {/* Header Section */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.filterButton}>
                {/* Filter Icon from vector lib */}
                <AntDesign name="leftcircleo" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Car Rental App</Text>
          </View>
            {/* Line below header */}
                
          <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    justifyCenter: {
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fff',
    },
    header: {
        flexDirection: 'row', // Arrange header items horizontally
        alignItems: 'center', // Align header items vertically
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: 'transparent',
        width: '100%',
    },
    headerText: {
        fontSize: 32, // Set header text size
        fontWeight: 'bold', // Set header text to bold
        color: 'white', // Set header text color to white
        flex: 1, // Allow the text to expand and center itself
        textAlign: 'center', // Center the text horizontally
    },
    filterButton: {
        padding: 10,

    },
    cardGridContent: {
        flexDirection: 'row', // Arrange the cards in rows
        flexWrap: 'wrap', // Create a grid layout
        justifyContent: 'space-between', // Space out the cards evenly
        gap: 40, // Add some spacing between the cards
    },
    cardGrid: {
        flex: 1, // Take up all screen space
        padding: 16, // Add padding to space out the cards
    },
    cardRow: {
        flexDirection: 'row', // Arrange the cards in rows
        justifyContent: 'space-between', // Space out the cards evenly
    },
    line: {
        height: 2,
        backgroundColor: 'white', // Small white line below the header, still NOT working
    },
});