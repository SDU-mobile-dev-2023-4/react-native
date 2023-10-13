import React, {useContext} from "react";
import { StatusBar } from 'expo-status-bar';
import { CarCard } from "../components/molecules/CarCard";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { DefaultGradient } from "../components/molecules/DefaultGradient";
import { Ionicons } from '@expo/vector-icons';
import { CarsContext } from "../components/molecules/CarsContext";

export function CarBrowser({ navigation }: { navigation: any }) {
  const { state } = useContext(CarsContext);
  return (
    <View style={styles.container}>
      <DefaultGradient />
       {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Car Rental App</Text>
        <TouchableOpacity style={styles.filterButton}>
            {/* Filter Icon from vector lib */}
            <Ionicons name="filter" size={24} color="white" />
        </TouchableOpacity>
      </View>
        <ScrollView style={styles.cardGrid} contentContainerStyle={styles.cardGridContent}>
            {state.cars.map((car) => (
                <CarCard
                    key={car.id}
                    carName={car.name}
                    carType={car.type}
                    imageLocation={require("../../assets/carpic.png")}
                />
            ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
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
    cardGridContent: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Create a grid layout
        justifyContent: 'space-between',
    },
    cardGrid: {
        flex: 1,
        padding: 16, // Add padding to space out the cards
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    }
);