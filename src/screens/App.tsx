import { CarsContext, CarsProvider } from '../components/molecules/CarsContext';
import { LocationsContext, LocationsProvider } from '../components/molecules/LocationContext';
import Loading from './Loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import { CarBrowser } from './CarBrowser';
import { useContext } from 'react';
import { Location } from '../utils/types/Location';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

/**
 * Screens in main stack navigator.
 * 
 * This type defines the screens that can be navigated to from the stack navigator.
 * 
 * @see https://reactnavigation.org/docs/typescript
 */
export type AppStackList = {
  Home: undefined;
  CarBrowser: { location: Location | null };
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
 * Main app component.
 */
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
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
 * This is used, to better separate the navigation from the main app component.  
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

  // Show loading screen if either of the context providers are loading
  if (carsContext.state.loading || locationsContext.state.loading || !fontsLoaded) {
    return (
      <Loading />
    )
  }

  console.debug("App Loaded", carsContext, locationsContext);

  // Return the navigation container
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="CarBrowser" component={CarBrowser} initialParams={{ location: null }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
