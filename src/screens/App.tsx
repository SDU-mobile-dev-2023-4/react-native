import { CarsContext, CarsProvider } from '../components/molecules/CarsContext';
import { LocationsProvider } from '../components/molecules/LocationContext';
import Loading from './Loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import { CarBrowser } from './CarBrowser';
import { useContext } from 'react';
import { Text, View } from 'react-native';

const stack = createNativeStackNavigator();
stack.Navigator.defaultProps = {
  screenOptions: {
    headerShown: false
  }
}
stack.Navigator.defaultProps = {
  screenOptions: {
    headerShown: false
  }
}
export default function App() {
  return (
    <CarsProvider>
      <LocationsProvider>
        <NavigationContainer >
          <stack.Navigator initialRouteName="CarBrowser">
            <stack.Screen name="Home" component={Home}/>
            <stack.Screen name="CarBrowser" component={CarBrowser} />
          </stack.Navigator>
        </NavigationContainer>
      </LocationsProvider>
    </CarsProvider>
  );
}

