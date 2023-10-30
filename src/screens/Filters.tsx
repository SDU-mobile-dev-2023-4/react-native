import React, {useContext, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { DefaultGradient } from "../components/molecules/DefaultGradient";
import { AntDesign } from '@expo/vector-icons';
import { CarsContext } from "../components/molecules/CarsContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackList, FilterType } from "./App";
import { Car } from "../utils/types/Car";
import { H3 } from "../components/atoms/Text/H3";
import { H1 } from "../components/atoms/Text/H1";
import FilterOption from "../components/atoms/FilterOption";

const filter_groups = [
	{
		name: "Car type",
		filters: [
			"SUV",
			"Sports",
			"Hybrid",
			"Hatchback",
			"Sedan",
			"convertible",
			"Coupe",
			"Military Jet",
			"limo",
			"Van",
			"Compact",
			"Electric",
			"Muscle",
			"UFO"
		],
	},
	{
		name: "Gear type",
		filters: [
			"Manual H-stick",
			"Manual sequential",
			"Automatic",
		],
	},
	{
		name: "Brand",
		filters: [
			"Ferrari",
			"Rolls Royce",
			"Mercedes",
			"BMW",
			"Tesla",
		]
	},
]

type FiltersProps = NativeStackScreenProps<AppStackList, 'Filters'>;
/**
 * @see NativeStackScreenProps from @react-navigation/native-stack
 * @param props don't worry about the props, it is only used through the navigation system.
 * @returns a full page component for the filters page
 */
export function Filters(props: FiltersProps) {
	const { state, setState } = useContext(CarsContext); // Accessing state and setState
	const [localFilters, setLocalFilters] = useState(props.route.params.filters || []); // Local state for filters

    const addFilter = (checked: boolean, filterName: string, filterGroup: string) => {
        if (checked) {
			setLocalFilters(prev => [...prev, { group: filterGroup, filters: [filterName] }]);
		} else {
			setLocalFilters(prev => prev.filter(f => f.group !== filterGroup || !f.filters.includes(filterName)));
		}
    };

	const applyFilters = () => {
		const filteredCars = state.cars.filter((car) => {
			for (let filter of localFilters) {
				if (filter.group === "Car type" && !filter.filters.includes(car.type)) {
					return false;
				}
				if (filter.group === "Brand" && !filter.filters.includes(car.brand)) {
					return false;
				}
			}
			return true;
		});
		setState(prevState => ({ ...prevState, cars: filteredCars }));
	}
	return (
		<View style={styles.container}>
			<DefaultGradient />
			{/* Header Section */}
			<View style={styles.header}>
				<TouchableOpacity style={styles.filterButton} onPress={() => {
					applyFilters();
					props.navigation.pop()}
					}>
					{/* Filter Icon from vector lib */}
					<AntDesign name="leftcircleo" size={32} color="white" />
				</TouchableOpacity>
				<Text style={styles.headerText}>Car Rental App</Text>
			</View>
			<ScrollView style={styles.filterGroups}>
				{filter_groups.map((filter_group) => (
					<View style={styles.filterGroup}>
						<H1>{filter_group.name}</H1>
						{filter_group.filters.map((filter) => (
							<View style={styles.filter} >
								<FilterOption 
								onToggle={addFilter} 
								filterName={filter}
								filterGroup={filter_group.name}
								/>
							</View>
						))}
					</View>
				))}
			</ScrollView>
			{/* Line below header */}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	filterGroups: {
		padding: 16,
	},
	filterGroup: {
		backgroundColor: 'rgb(255, 255, 255)',
		padding: 10,
		borderRadius: 10,
		rowGap: 8,
		marginTop: 16,
	},
	filter: {
		flexDirection: 'row',
		columnGap: 10,
		alignItems: 'center',
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
});
