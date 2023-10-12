import React from "react";
import { StatusBar } from 'expo-status-bar';
import { CardCard } from "../components/molecules/CarCard";
import { View, StyleSheet } from "react-native";

export function CarBrowser({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <DefaultGradient />
      <CardCard></CardCard>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fff',
    },
});