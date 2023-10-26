import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Image, Pressable, SafeAreaView, View } from "react-native";
import { AppStackList } from "./App";
import { CarsContext } from "../components/molecules/CarsContext";
import { DefaultBodyStyle } from "../utils/styles/ContainerStyles";
import NotFound from "../components/molecules/NotFound";
import { H1 } from "../components/atoms/Text/H1";
import Button from "../components/atoms/Button";
import { LinearGradient } from "expo-linear-gradient";
import { H3 } from "../components/atoms/Text/H3";
import { StatusBar } from "expo-status-bar";
import { Text } from "../components/atoms/Text/Text";
import { Car } from "../utils/types/Car";
import { H2 } from "../components/atoms/Text/H2";

type CarDetailsProps = NativeStackScreenProps<AppStackList, 'CarDetails'>;

/**
 * Car details page, to show the details of a specific car.
 * 
 * @param props Properties for the component
 * @returns A full page component for the car details page
 */
export default function CarDetails(props: CarDetailsProps) {

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
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: "#ffffff" }} />
            <View style={{ backgroundColor: "white", height: "100%" }}>
                {/* Image view - Is absolute to render behind the content af the details page */}
                <View style={{ width: "100%", height: "40%", position: "absolute" }}>
                    <Image source={{ uri: car.pictures[0].srcUrl }} style={{ width: "100%", height: "99%" }} />
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
                        {/* Car details */}
                        <View style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: "75%",
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
                        <Metrics car={car} />
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
                                    <Image source={require('../../assets/right-arrow.png')} style={{ width: 26, height: 26, marginLeft: 10 }} />
                                </View>
                            </Button>
                        </View>
                    </View >
                </View >
                <View style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}>
                    <Pressable onPress={() => props.navigation.goBack()}>
                        <Image source={require('../../assets/right-arrow.png')} style={{ width: 30, height: 30, marginLeft: 15, marginTop: 15, transform: [{ rotate: "180deg" }] }} />
                    </Pressable>
                </View>
            </View>
        </>
    );
}

function Metrics(props: {
    car: Car;
}) {
    const { car } = props;

    const dataPoints = [
        {
            'name': 'Top speed',
            'value': car.topSpeed,
            'unit': 'km/t'
        },
        {
            'name': '0-100',
            'value': car.acceleration,
            'unit': 'sec.'
        },
        {
            'name': 'Cylinders',
            'value': car.engine.cylinders,
            'unit': 'cyl.'
        },
        {
            'name': 'Horsepower',
            'value': car.engine.horsePower,
            'unit': 'hp'
        },
        {
            'name': 'Weight',
            'value': car.weight,
            'unit': 'kg'
        },
        {
            'name': 'Manufactured',
            'value': car.manufacturingYear,
            'unit': 'year'
        },
    ]

    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: "100%",
        }}>
            {
                dataPoints.map((dataPoint, index) => (
                    <View
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginBottom: 10,
                            width: "80%",
                        }}
                        key={index}
                    >
                        <H2>{dataPoint.name.toString() + ": "}</H2>
                        <View style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            flexDirection: 'row',
                        }}>
                            <H1
                                bold
                                style={{
                                    color: "#657dff",
                                }}
                            >{dataPoint.value.toString() + " "}</H1>
                            <H3 style={{
                                width: 50,
                            }}>{dataPoint.unit.toString()}</H3>
                        </View>
                    </View>
                ))
            }

        </View>
    );
}

/**
 * Render an error page.
 */
function errorPage(props: CarDetailsProps) {
    return (
        <NotFound goBack={() => props.navigation.goBack()} />
    );
}
