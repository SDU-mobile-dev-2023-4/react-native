import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const CardCard = () => {
    return (
        <View style={styles.buttontext}>
            <Text>Car card!</Text>
        </View>
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
    buttontext: {
        color: '#fff',
        alignSelf: 'center',
        fontWeight: '100',
        textTransform: 'uppercase',
        fontSize: 32,
        marginRight: 15,
        fontFamily: 'Inter_500Medium',
        backgroundColor: '#fff',
    },
});