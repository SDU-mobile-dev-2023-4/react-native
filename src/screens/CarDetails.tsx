import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Image, View } from "react-native";
import { AppStackList } from "./App";
import { CarsContext } from "../components/molecules/CarsContext";
import NotFound from "../components/molecules/NotFound";
import { H1 } from "../components/atoms/Text/H1";
import Button from "../components/atoms/Button";
import { H3 } from "../components/atoms/Text/H3";
import { Car } from "../utils/types/Car";
import { H2 } from "../components/atoms/Text/H2";
import CarDetailsLayout from "../components/molecules/CarDetailsLayout";

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
            <CarDetailsLayout car={car} navigation={props.navigation} button={
                <Button
                    onPress={() => props.navigation.push('Order', { carId: car.id })}
                >
                    <H1 color="light" bold>Order car</H1>
                    <View style={{ marginTop: 2 }}>
                        <Image source={require('../../assets/right-arrow.png')} style={{ width: 26, height: 26, marginLeft: 10 }} />
                    </View>
                </Button>
            }>
                <Metrics car={car} />
            </CarDetailsLayout>
        </>
    );
}

/**
 * Metrics component to show the metrics of the car.
 * 
 * @param props
 * @returns Metrics component
 */
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
        <NotFound goBack={() => props.navigation.pop()} />
    );
}
