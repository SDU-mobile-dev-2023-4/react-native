import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text } from '../components/atoms/Text';
import { LocationsProvider } from '../components/molecules/LocationContext';

export default function App() {
  return (
    <LocationsProvider>
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <StatusBar style="auto" />
      </View>
    </LocationsProvider>
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
