import React, {useContext} from "react";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { DefaultGradient } from "../components/molecules/DefaultGradient";
import { AntDesign } from '@expo/vector-icons';
import { CarsContext } from "../components/molecules/CarsContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackList } from "./App";
import { Car } from "../utils/types/Car";
import { H3 } from "../components/atoms/Text/H3";
import { H1 } from "../components/atoms/Text/H1";

const filter_groups = [
	{
		name: "Car type",
		filters: [
			"SUV",
			"Sportscar",
			"Limo",
			"Supercar",
			"Sedan",
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
	const { state } = useContext(CarsContext);
	return (
		<View style={styles.container}>
			<DefaultGradient />
			{/* Header Section */}
			<View style={styles.header}>
				<TouchableOpacity style={styles.filterButton} onPress={() => {props.navigation.pop()}}>
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
								<AntDesign name="checkcircleo" size={24} color="black" />
								<H3>{filter}</H3>
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
