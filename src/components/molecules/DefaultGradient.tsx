import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

export const DefaultGradient = () => {
    return (
        <LinearGradient
        // Background Linear Gradient
        colors={['rgb(121, 12, 172)', 'rgb(35, 163, 181)']}
        style={styles.background}
        start={{ x: 0.6, y: 0.25 }}
        end={{ x: 1, y: 1 }}
    />
    );
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
});