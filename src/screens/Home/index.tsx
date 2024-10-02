import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


function Home(): JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')
      }>
      <Text>Redirect to Details</Text>
      </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'white',
    alignItems : 'center',
    justifyContent : 'center',
  }
});

export default Home;
