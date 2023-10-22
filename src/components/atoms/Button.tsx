import React from "react";
import { Pressable, View } from "react-native";
import { RedButtonStyle } from "../../utils/styles/ButtonStyle";
import { Text } from "./Text/Text";

export type ButtonProps = {
    onPress: () => void;
    children?: React.ReactNode;
    color?: "red" | "blue";
    text?: string;
}

export default function Button(props: ButtonProps) {
    let extraStyling = {};

    if (props.color === "blue") {
        extraStyling = {
            backgroundColor: "#007AFF",
        }
    }

    return (
        <Pressable
            style={{ ...RedButtonStyle, ...extraStyling }}
            onPress={props.onPress}
        >
            {/* <!-- Begin a container for the button's content which includes text and an image --> */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                {props.text && <Text color="light">{props.text}</Text>}
                {props.children}
            </View>
        </Pressable>
    )
}