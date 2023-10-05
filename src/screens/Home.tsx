import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { Text } from '../components/atoms/Text';

export default function Home({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Start Page :D</Text>
            <Button
                title="Go to CarBrowser..."
                onPress={() => navigation.push('CarBrowser')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});