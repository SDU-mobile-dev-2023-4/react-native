import React from "react";
import { Text as NativeText } from "react-native";

/**
 * Props for the Text component. Allows for further customization through styling.
 * 
 * The bold, light, and italic props are used to change the font styling.
 */
type TextProps = {
    children: string;
    style?: any;
    bold?: boolean;
    light?: boolean;
    italic?: boolean;
    color?: "light" | "dark";
    size?: number;
}

/**
 * Text component, equivalent to <p> tag in HTML.
 * 
 * Text color is dark by default, but can be changed to light by passing "light" to the color prop.
 * There are further customization options through the bold, light, and italic props.
 * 
 * @param {TextProps} props - Props to pass to the Text component, allows for further customization.
 * @returns {JSX.Element} Text component
 * @see TextProps
 */
export const Text = (props: TextProps): JSX.Element => {
    // Default style for the text
    const style: any = {
        fontFamily: "Inter_400Regular",
        fontSize: 16,
    };

    if (props.bold) {
        style.fontFamily = "Inter_700Bold";
    }

    if (props.light) {
        style.fontFamily = "Inter_300Light";
    }

    if (props.italic) {
        style.fontStyle = "italic";
    }

    if (props.color === "light") {
        style.color = "#fff";
    } else {
        style.color = "#000";
    }

    if (props.size) {
        style.fontSize = props.size;
    }

    return (
        <NativeText style={{ ...style, ...props.style }}>
            {props.children}
        </NativeText>
    );
}