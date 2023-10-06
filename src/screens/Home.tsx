import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Pressable, Text, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

export default function Home({ navigation }: { navigation: any }) {
    const [fontsLoaded] = useFonts({
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold
      });
      
      if (!fontsLoaded) {
        // You can return a loading screen or a placeholder here until the font is loaded
        return <View>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgb(121, 12, 172)', 'rgb(255,218,185)']}
                style={styles.background}
                start={{ x: 0.6, y: 0.25 }}
                end={{ x: 1, y: 1 }}
            />
            <Text>Loading...</Text>
            </View>;
      }
    return (
        <View style={styles.body}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgb(121, 12, 172)', 'rgb(35, 163, 181)']}
                style={styles.background}
                start={{ x: 0.6, y: 0.25 }}
                end={{ x: 1, y: 1 }}
            />
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
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
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