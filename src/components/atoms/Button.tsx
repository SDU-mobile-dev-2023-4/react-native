import React from "react";
import { Pressable, View } from "react-native";
import { RedButtonStyle } from "../../utils/styles/ButtonStyle";
import { Text } from "./Text/Text";

/**
 * Properties for the button component.
 * 
 * @property onPress Function to call when the button is pressed
 * @property children Children of the button
 * @property color Color of the button
 * @property text Text to display on the button
 * @see Button
 */
export type ButtonProps = {
    onPress: () => void;
    children?: React.ReactNode;
    color?: "red" | "blue";
    text?: string;
}

/**
 * A primary button, that is solid filled in with a color (default red).
 * 
 * @param props Button properties
 * @returns A button component with specified properties
 * @see ButtonProps
 */
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