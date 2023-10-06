import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Pressable, Text, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { DefaultGradient } from "../components/molecules/DefaultGradient";

export default function Home({ navigation }: { navigation: any }) {
    const [fontsLoaded] = useFonts({
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold
      });
      
      if (!fontsLoaded) {
        // You can return a loading screen or a placeholder here until the font is loaded
        return <View>
            <DefaultGradient />
            <Text>Loading...</Text>
            </View>;
      }
    return (
        <View style={styles.body}>
            <DefaultGradient />
            <View style={styles.container}>
            <Text style={styles.text}>Car Rental App</Text>
            <Pressable style={styles.cityselect}>
                <Text style={styles.cityText}>Select City</Text>
            </Pressable>
            <StatusBar style="auto" />
            <Pressable
                style={styles.button}
                onPress={() => navigation.push('CarBrowser')}
            >
                <View style={styles.row}>
                    <Text style={styles.buttontext}>GO! </Text>
                    <Image source={require('../../assets/GO.png')} style={{ width: imageSize, height: imageSize }} />
                </View>
            </Pressable>
            </View>
        </View>
    );
}

const imageSize= 30;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#transparent',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    container: {
        backgroundColor: '#transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '45%',
    },
    button: {
        backgroundColor: '#EA4646',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 80,
    },
    buttontext: {
        color: '#fff',
        alignSelf: 'center',
        fontWeight: '100',
        textTransform: 'uppercase',
        fontSize: 32,
        marginRight: 15,
        fontFamily: 'Inter_500Medium',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',  // This will vertically center-align the text and image
    },
    text: {
        color: '#fff',
        fontFamily: 'Inter_700Bold',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        marginRight: 15,
    },
    cityselect: {
        color: '#transparent',
        alignSelf: 'center',
        fontSize: 30,
        marginRight: 15,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    cityText: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Inter_600SemiBold',
        alignSelf: 'center',
        fontSize: 20,
        marginRight: 15,
    },

});