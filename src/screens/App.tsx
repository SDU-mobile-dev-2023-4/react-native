import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text } from '../components/atoms/Text';
import { CarsProvider } from '../components/molecules/CarsContext';

export default function App() {
  return (
    <CarsProvider>
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <StatusBar style="auto" />
      </View>
    </CarsProvider>
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
