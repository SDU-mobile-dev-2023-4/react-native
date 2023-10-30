import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { Image, View, Button as ReactButton, Pressable } from "react-native";
import { AppStackList } from "./App";
import { CarsContext } from "../components/molecules/CarsContext";
import NotFound from "../components/molecules/NotFound";
import { H1 } from "../components/atoms/Text/H1";
import Button from "../components/atoms/Button";
import CarDetailsLayout from "../components/molecules/CarDetailsLayout";
import { AntDesign } from '@expo/vector-icons';
import { Text } from "../components/atoms/Text/Text";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { OutlineButtonStyle, OutlineWhiteButtonStyle } from "../utils/styles/ButtonStyle";

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
                    onPress={() => props.navigation.pop()}
                >
                    <H1 color="light" bold>Order car</H1>
                    <View style={{ marginTop: 2 }}>
                        <AntDesign name="shoppingcart" size={25} color="white" style={{ marginLeft: 10 }} />
                    </View>
                </Button>
            }>
                <OrderDetails />
            </CarDetailsLayout>
        </>
    );
}

/**
 * Render the order details section.
 * 
 * This includes handling the state of the order details.
 * 
 * @returns A component for the order details section
 */
function OrderDetails() {
    // Pick-up date is defaulted to today
    const [pickUpDate, setPickUpDate] = useState(new Date());
    // Dropoff date is defaulted to 1 day after pickup date
    const [dropOffDate, setDropOffDate] = useState(new Date(pickUpDate.getTime() + 86400000));

    return (
        <View style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: 'row',
            width: "100%",
        }}>
            {/* Pick-up */}
            <View style={{
                alignItems: 'flex-end',
            }}>
                <Text style={{ marginVertical: verticalSpacing }}>Pick-up</Text>
                <DateTimePicker date={pickUpDate} setDate={setPickUpDate} />
            </View>
            {/* Icons */}
            <View style={{
                marginHorizontal: 10,
                alignItems: 'center',
            }}>
                <Text style={{ marginVertical: verticalSpacing }}>-</Text>
                <View style={{ marginVertical: verticalSpacing * 1.75 }}>
                    <AntDesign name="clockcircleo" size={24} color={mainColor} />
                </View>
            </View>
            {/* Drop-off */}
            <View style={{
                alignItems: 'flex-start',
            }}>
                <Text style={{ marginVertical: verticalSpacing }}>Drop-off</Text>
                <DateTimePicker date={dropOffDate} setDate={setDropOffDate} />
            </View>
        </View>
    )
}

/**
 * Render a date time picker
 * 
 * @param props The properties for the date time picker, including a date and a function to set the date
 * @returns A date time picker component
 */
function DateTimePicker(props: {
    date: Date,
    setDate: (date: Date) => void,
}) {
    const { date, setDate } = props;

    // Date picker state, for showing and hiding the date picker
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    /**
     * Show the date picker when the button is pressed.
     */
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    /**
     * Hide the date picker when the date is picked.
     */
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    /**
     * Handle the date being picked.
     * 
     * @param date The date that was picked
     */
    const handleConfirm = (date: Date) => {
        console.warn("A date has been picked: ", date);
        setDate(date);
        hideDatePicker();
    };

    // Render the date time picker
    return (
        <View style={{ marginVertical: verticalSpacing }}>
            {/* Button to show the date time picker */}
            <Pressable style={{ ...(OutlineButtonStyle as object), borderColor: mainColor }} >
                <ReactButton
                    // Custom datetime format
                    title={date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes()}
                    onPress={showDatePicker}
                    color={mainColor}
                />
            </Pressable>
            {/* The date time picker, which triggers the native date time picker */}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                date={date}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
}

/**
 * Render an error page.
 */
function errorPage(props: OrderProps) {
    return (
        <NotFound goBack={() => props.navigation.pop()} />
    );
}

/**
 * Main color of order page elements
 */
const mainColor = "#666666";

/**
 * Spacing between elements vertically
 */
const verticalSpacing = 10;
