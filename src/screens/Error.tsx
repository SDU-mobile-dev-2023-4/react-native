import React from "react";
import { View, StyleSheet } from "react-native";
import { DefaultGradient } from "../components/molecules/DefaultGradient";
import { useFonts, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { H1 } from "../components/atoms/Text/H1";
import { H3 } from "../components/atoms/Text/H3";

export default function Error() {
    const [fontsLoaded] = useFonts({
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold
    });

    return (
        <View style={styles.body}>
            <DefaultGradient />
            <H1 color="light">An error occured.</H1>
            <H3 color="light">Please try again later</H3>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#transparent',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    }
});
