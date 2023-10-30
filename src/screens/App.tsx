import { CarsContext, CarsProvider } from '../components/molecules/CarsContext';
import { LocationsContext, LocationsProvider } from '../components/molecules/LocationContext';
import Loading from './Loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import { CarBrowser } from './CarBrowser';
import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import CarDetails from './CarDetails';
import Error from './Error';
import { SafeAreaView } from 'react-native';
import { Filters } from './Filters';
import Order from './Order';
import OrderConfirmation from './OrderConfirmation';

/**
 * Screens in main stack navigator.
 * 
 * This type defines the screens that can be navigated to from the stack navigator.
 * 
 * @see https://reactnavigation.org/docs/typescript
 */

export type FilterType = {
  group: string;
  filters: string[];
};

export type AppStackList = {
  Home: undefined;
  CarBrowser: { location: number | null };
  CarDetails: { carId: number };
  Filters: {filters: FilterType[]};
  Order: { carId: number };
  OrderConfirmation: { carId: number };
};

/**
 * Main stack navigator for the app.
 */
export const stack = createNativeStackNavigator<AppStackList>();

/**
 * Default properties for the main stack navigator.
 */
stack.Navigator.defaultProps = {
  screenOptions: {
    headerShown: false,
  },
};

/**
 * Main app handler.
 */
export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "rgb(121, 12, 172)" }} />
      <StatusBar style="light" />
      <CarsProvider>
        <LocationsProvider>
          <Navigation />
        </LocationsProvider>
      </CarsProvider>
    </>
  );
}

/**
 * Navigation aspect of the app.
 * 
 * This is used, to better separate the navigation from the main app handler.  
 * It also allows for better usage of the context providers.
 */
function Navigation() {
  // Get the context providers
  const carsContext = useContext(CarsContext);
  const locationsContext = useContext(LocationsContext);

  // Use the 'useFonts' hook to load the specified fonts and store their loading status in the 'fontsLoaded' constant
  const [fontsLoaded] = useFonts({
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  // Show loading screen if the app is not quite ready yet
  if (carsContext.state.loading || locationsContext.state.loading || !fontsLoaded) {
    return (
      <Loading />
    )
  }

  // Show error screen if the app failed to load
  if (carsContext.state.error || locationsContext.state.error) {
    return (
      <Error />
    )
  }

  // Log the app loading, for debugging purposes
  console.debug("App Loaded", carsContext, locationsContext);

  // Return the navigation container
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="CarBrowser" component={CarBrowser} initialParams={{ location: null }} />
        <stack.Screen name="CarDetails" component={CarDetails} initialParams={{ carId: 0 }} />
        <stack.Screen name="Filters" component={Filters} />
        <stack.Screen name="Order" component={Order} initialParams={{ carId: 0 }} />
        <stack.Screen name="OrderConfirmation" component={OrderConfirmation} initialParams={{ carId: 0 }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
