import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { DefaultGradient } from "../components/molecules/DefaultGradient";
import { useFonts, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

export default function Loading() {
    const [fontsLoaded] = useFonts({
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold
    });

    return (
        <View style={styles.body}>
            <DefaultGradient />
            <ActivityIndicator size={"large"} color={"#6d149e"} />
            <Text style={styles.text}>Loading...</Text>
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
    },
    text: {
        color: 'white',
        fontSize: 30,
        marginTop: 50,
        fontFamily: 'Inter_500Medium',
    },
});
