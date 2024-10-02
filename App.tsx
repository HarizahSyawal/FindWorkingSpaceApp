import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Success from './src/screens/Success';
import Checkout from './src/screens/Checkout';
import Booking from './src/screens/Booking';
import Details from './src/screens/Details';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;