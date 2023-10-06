import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { Text } from '../components/atoms/Text';

export function CarBrowser({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>Car browser!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});