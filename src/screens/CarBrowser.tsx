import React from "react";
import { StatusBar } from 'expo-status-bar';
import { CarCard } from "../components/molecules/CarCard";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { DefaultGradient } from "../components/molecules/DefaultGradient";

export function CarBrowser({ navigation }: { navigation: any }) {
  
  return (
    <View style={styles.container}>
      <DefaultGradient />
       {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Car Rental</Text>
        <TouchableOpacity style={styles.filterButton}/>
      </View>
      <View style={styles.container}>
        <CarCard 
      carName="Bentley Continental GT" 
      carType="COUPE" 
      imageLocation={require('../../assets/carpic.png')}
      />
      <CarCard 
      carName="Bentley Continental GT" 
      carType="COUPE" 
      imageLocation={require('../../assets/carpic.png')}
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 60,
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
    header: {
    },
    headerText: {

    },
    filterButton: {

    }
    }
);