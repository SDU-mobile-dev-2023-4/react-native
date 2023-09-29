import React from "react";
import { Text as NativeText } from "react-native";

type TextProps = {
    children: string;
}

export const Text = (props: TextProps) => {
    return (
        <NativeText>
            {props.children}
        </NativeText>
    );
}