import React from "react";
import { View } from "react-native";
import { DefaultBodyStyle } from "../../utils/styles/ContainerStyles";
import { H1 } from "../atoms/Text/H1";
import Button from "../atoms/Button";

/**
 * Properties for the not found component.
 * 
 * @property goBack Function to call when the user wants to go back
 * @see NotFound
 */
type NotFoundProps = {
    goBack: () => void;
}

/**
 * Error page for when a page is not found.
 * 
 * This is not a page, but a component a page can use to display a 404 error.
 * 404 - Page not found.
 * 
 * @param props Properties for the component
 * @see NotFoundProps
 * @returns A full page component for a 404 error
 */
export default function NotFound(props: NotFoundProps) {
    return (
        <View style={DefaultBodyStyle as object}>
            <View style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <H1 style={{ marginBottom: 20 }}>Not found</H1>
                <Button
                    onPress={props.goBack}
                    color="blue"
                    text="Go back"
                />
            </View>
        </View>
    );
}