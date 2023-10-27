import React from "react";
import { Car } from "../../utils/types/Car";
import { Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackList } from "../../screens/App";
import { Pressable } from "react-native";
import { DefaultBodyStyle } from "../../utils/styles/ContainerStyles";
import { H1 } from "../atoms/Text/H1";
import { H3 } from "../atoms/Text/H3";

export type CarDetailsLayoutProps = {
    car: Car;
    navigation: NativeStackNavigationProp<AppStackList>
    button: React.ReactNode;
    children?: React.ReactNode;
}

export default function CarDetailsLayout(props: CarDetailsLayoutProps) {
    const { car } = props;

    return (
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
                    {
                        props.children
                    }
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: "15%"
                    }}>
                        {
                            props.button
                        }
                    </View>
                </View >
            </View >
            <View style={{
                position: "absolute",
                top: 0,
                left: 0,
            }}>
                <Pressable onPress={() => props.navigation.pop()}>
                    <Image source={require('../../../assets/right-arrow.png')} style={{ width: 30, height: 30, marginLeft: 15, marginTop: 15, transform: [{ rotate: "180deg" }] }} />
                </Pressable>
            </View>
        </View>
    )
}