import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Image, View } from "react-native";
import { AppStackList } from "./App";
import { CarsContext } from "../components/molecules/CarsContext";
import { DefaultBodyStyle } from "../utils/styles/ContainerStyles";
import NotFound from "../components/molecules/NotFound";
import { H1 } from "../components/atoms/Text/H1";
import Button from "../components/atoms/Button";
import { LinearGradient } from "expo-linear-gradient";
import { H3 } from "../components/atoms/Text/H3";
import { FontAwesome5 } from '@expo/vector-icons';

type OrderProps = NativeStackScreenProps<AppStackList, 'Order'>;

/**
 * Order page, to enter the information needed to book a specific car.
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

    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            {/* Image view - Is absolute to render behind the content of the order page */}
            <View style={{ width: "100%", height: "40%", position: "absolute" }}>
                {/* <Image source={{ uri: car.pictures[0].srcUrl }} style={{ width: "100%", height: "100%" }} /> */}
                <LinearGradient
                    colors={['transparent', "#ffffffe6", 'white']}
                    locations={[0, 0.8, 1]}
                    style={{
                        position: 'absolute', // Absolute position for the gradient
                        left: 0,
                        right: 0,
                        bottom: 0,    
                        height: '50%', // covers half the image from the bottom up
                        borderColor: "transparent",
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                />
            </View>
            {/* Content view */}
            <View style={{ ...(DefaultBodyStyle as object), height: '100%', width: "100%", position: "absolute" }}>
                < View style={{
                    backgroundColor: '#transparent',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '100%',
                    width: "90%",
                }}>
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: "85%",
                    }}>
                        <H1 bold style={{ fontSize: 35 }}>
                            {car.name}
                        </H1>
                        <H3 style={{
                            marginTop: 10,
                        }}>
                            {car.type}
                        </H3>
                    </View>
                    {/* Move forward button */}
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: "15%"
                    }}>
                        <Button
                            onPress={() => props.navigation.goBack()}
                        >
                            <H1 color="light" bold>Order car</H1>
                            <View style={{ marginTop: 2 }}>
                                <FontAwesome5 name="shopping-cart" size={24} color="white" />
                                {/* <Image source={require('../../assets/right-arrow.png')} style={{ width: 26, height: 26, marginLeft: 10 }} /> */}
                            </View>
                        </Button>
                    </View>
                </View >
            </View >
        </View>
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
