import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import { AppStackList } from "./App";
import { CarsContext } from "../components/molecules/CarsContext";
import { DefaultBodyStyle, DefaultContainerStyle } from "../utils/styles/ContainerStyles";
import NotFound from "../components/molecules/NotFound";
import { H1 } from "../components/atoms/Text/H1";
import Button from "../components/atoms/Button";
import { LinearGradient } from "expo-linear-gradient";
import { H3 } from "../components/atoms/Text/H3";
import PlatformSelect from "../components/molecules/PlatformSelect";

type CarDetailsProps = NativeStackScreenProps<AppStackList, 'CarDetails'>;

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
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <PlatformSelect
                native={
                    <View style={{ width: "100%", height: "40%", position: "absolute" }}>
                        <Image source={{ uri: car.pictures[0].srcUrl }} style={{ width: "100%", height: "100%" }} />
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
                }
                default={
                    <div style={{
                        height: "45%",
                        width: "100%",
                        position: "absolute",
                    }}>
                        <img src={car.pictures[0].srcUrl} style={{
                            width: "100%",
                            height: "99%",
                            objectFit: "cover",
                            position: "absolute",
                        }} />
                        <div style={{
                            background: "linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,1) 100%)",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                        }} />
                    </div>
                }
            />
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
                                <Image source={require('../../assets/right-arrow.png')} style={{ width: imageSize, height: imageSize, marginLeft: 10 }} />
                            </View>
                        </Button>
                    </View>
                </View >
            </View >
        </View>
    );
}

const imageSize = 26;

function errorPage(props: CarDetailsProps) {
    return (
        <NotFound goBack={() => props.navigation.goBack()} />
    );
}
