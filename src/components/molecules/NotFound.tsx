import React from "react";
import { View } from "react-native";
import { DefaultBodyStyle } from "../../utils/styles/ContainerStyles";
import { H1 } from "../atoms/Text/H1";
import Button from "../atoms/Button";

type NotFoundProps = {
    goBack: () => void;
}

export default function NotFound(props: NotFoundProps) {
    return (
        <View style={DefaultBodyStyle as object}>
            {/* <!-- Begin a nested container for the app's main content --> */}
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