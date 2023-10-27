import React, {useContext} from "react";
import { StatusBar } from 'expo-status-bar';
import { CarCard } from "../components/molecules/CarCard";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { DefaultGradient } from "../components/molecules/DefaultGradient";
import { Ionicons } from '@expo/vector-icons';
import { CarsContext } from "../components/molecules/CarsContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackList } from "./App";
import { Car } from "../utils/types/Car";

type CarBrowserProps = NativeStackScreenProps<AppStackList, 'CarBrowser'>;

/**
 * @see NativeStackScreenProps from @react-navigation/native-stack
 * @param props don't worry about the props, it is only used through the navigation system.
 * @returns a full page component for the car browser page
 */
export function CarBrowser(props: CarBrowserProps) {
	const { state } = useContext(CarsContext);
	const location = props.route.params.location;
	if (!location) {
		return (
		<View style={styles.container}>
			<DefaultGradient />
			<Text style={styles.headerText}>No location selected</Text>
		</View>
		);
	}
	const carsFound = state.cars.filter((car) => car.location.id === location);
	return (
		<View style={styles.container}>
			<DefaultGradient />
			{/* Header Section */}
			<View style={styles.header}>
				<Text style={styles.headerText}>Car Rental App</Text>
				<TouchableOpacity style={styles.filterButton} onPress={() => { 
                    props.navigation.push('Filters', {filters: []}) 
                    }}>
					{/* Filter Icon from vector lib */}
					<Ionicons name="filter" size={24} color="white" />
				</TouchableOpacity>
			</View>
			{listCars(props, carsFound)}
			{/* Line below header */}
			<StatusBar style="auto" />
		</View>
	);
}

function listCars(props: CarBrowserProps, carsFound: Array<Car>) {
    if (carsFound.length === 0) {
        return (
            <View style={styles.justifyCenter}>
                <Text style={styles.headerText}>No cars found</Text>
            </View>
        );
    }
    return (
        <ScrollView style={styles.cardGrid} contentContainerStyle={styles.cardGridContent}>
            {carsFound.map((car) => (
                <CarCard
                    key={car.id}
                    carName={car.name}
                    carType={car.type}
                    imageLocation={require("../../assets/carpic.png")}
                    onPress={() => {props.navigation.push('CarDetails', {carId: car.id})}}
                />
            ))}
        </ScrollView>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    cardGrid: {
        flex: 1,
        padding: 10
    },
    cardRow: {
        flexDirection: 'row', // Arrange the cards in rows
        justifyContent: 'space-between', // Space out the cards evenly
    },
    line: {
        height: 2,
        backgroundColor: 'white', // Small white line below the header, still NOT working
    },
    }
);