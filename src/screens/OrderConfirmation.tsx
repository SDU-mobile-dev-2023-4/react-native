import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { View } from "react-native";
import { AppStackList } from "./App";
import { CarsContext } from "../components/molecules/CarsContext";
import { H1 } from "../components/atoms/Text/H1";
import Button from "../components/atoms/Button";
import CarDetailsLayout from "../components/molecules/CarDetailsLayout";
import { AntDesign } from '@expo/vector-icons';
import NotFound from "../components/molecules/NotFound";
import { H2 } from "../components/atoms/Text/H2";

type OrderConfirmationProps = NativeStackScreenProps<AppStackList, 'OrderConfirmation'>;

/**
 * Order confirmation page.
 * 
 * @param props Properties for the component
 * @returns A full page component for the order confirmation page
 */
export default function OrderConfirmation(props: OrderConfirmationProps) {

    // Get the car context which contains the cars
    const cars = useContext(CarsContext);

    // Get the car id from the navigation parameters
    const carId = props.route.params.carId;

    // Handle car id not being passed correctly
    if (!carId) {
        return errorPage(props);
    }

    // Find the car with the given id
    const car = cars.state.cars.find(car => car.id === carId) ?? null;

    // Handle the case where the car is not found
    if (!car) {
        return errorPage(props);
    }

    // Render the page
    return (
        <>
            <CarDetailsLayout car={car} navigation={props.navigation} button={
                <Button
                    onPress={() => props.navigation.navigate("CarBrowser", { location: car.location.id })}
                    style={{
                        backgroundColor: "#37D346",
                    }}
                >
                    <H1 color="light" bold>Done</H1>
                </Button>
            }>
                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: "100%",
                }}>
                    <AntDesign name="checkcircle" size={150} color="#37D346" />
                    <H1 color="dark" bold style={{
                        marginTop: 40,
                    }}>Car ordered</H1>
                </View>
            </CarDetailsLayout>
        </>
    );
}

/**
 * Render an error page.
 */
function errorPage(props: OrderConfirmationProps) {
    return (
        <NotFound goBack={() => props.navigation.pop()} />
    );
}