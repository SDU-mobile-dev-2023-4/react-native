import React from "react";
import { StatusBar } from 'expo-status-bar';
import { CarCard } from "../components/molecules/CarCard";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { DefaultGradient } from "../components/molecules/DefaultGradient";
import { Ionicons } from '@expo/vector-icons';

export function CarBrowser({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <DefaultGradient />
       {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Car Rental App</Text>
        <TouchableOpacity style={styles.filterButton}>
            {/* Filter Icon from vector lib */}
            <Ionicons name="filter" size={24} color="white" />
        </TouchableOpacity>
      </View>
        <View style={styles.line} /> {/* Small white line below the header */}
        <ScrollView style={styles.cardGrid} contentContainerStyle={styles.cardGridContent}>
            {/* Car cards */}
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
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: 'transparent',
        width: '100%',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    filterButton: {
        padding: 10,
    },
    line: {
        height: 2,
        backgroundColor: 'white', // Small white line below the header, still NOT working
    },
    cardGridContent: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Create a grid layout
        justifyContent: 'space-between',
    },
    cardGrid: {
        flex: 1,
        padding: 16, // Add padding to space out the cards
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    }
);