import React from "react";
import { Text as NativeText } from "react-native";

type TextProps = {
    children: string;
    style?: any;
    bold?: boolean;
    light?: boolean;
    italic?: boolean;
    color?: "light" | "dark";
    size?: number;
}

export const Text = (props: TextProps) => {
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