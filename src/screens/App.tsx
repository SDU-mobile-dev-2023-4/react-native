import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { Text } from '../components/atoms/Text';
import { CarsProvider } from '../components/molecules/CarsContext';
import { LocationsProvider } from '../components/molecules/LocationContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import { CarBrowser } from './CarBrowser';

const stack = createNativeStackNavigator();

stack.Navigator.defaultProps = {
  screenOptions: {
    headerShown: false,
  },
};

export default function App() {
  return (
    <CarsProvider>
      <LocationsProvider>
        <NavigationContainer>
          <stack.Navigator initialRouteName="Home">
            <stack.Screen name="Home" component={Home} />
            <stack.Screen name="CarBrowser" component={CarBrowser} />
          </stack.Navigator>
        </NavigationContainer>
      </LocationsProvider>
    </CarsProvider>
  );
}

