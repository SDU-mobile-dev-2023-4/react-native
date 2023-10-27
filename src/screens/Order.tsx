import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Image, View } from "react-native";
import { AppStackList } from "./App";
import { CarsContext } from "../components/molecules/CarsContext";
import NotFound from "../components/molecules/NotFound";
import { H1 } from "../components/atoms/Text/H1";
import Button from "../components/atoms/Button";
import CarDetailsLayout from "../components/molecules/CarDetailsLayout";

type OrderProps = NativeStackScreenProps<AppStackList, 'Order'>;

/**
 * Order page. Her pickup details are specified.
 * 
 * @param props Properties for the component
 * @returns A full page component for the order page
 */
export default function Order(props: OrderProps) {

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
                    onPress={() => props.navigation.goBack()}
                >
                    <H1 color="light" bold>Order car</H1>
                    <View style={{ marginTop: 2 }}>
                        <Image source={require('../../assets/right-arrow.png')} style={{ width: 26, height: 26, marginLeft: 10 }} />
                    </View>
                </Button>
            }>
            </CarDetailsLayout>
        </>
    );
}

/**
 * Render an error page.
 */
function errorPage(props: OrderProps) {
    return (
        <NotFound goBack={() => props.navigation.goBack()} />
    );
}
