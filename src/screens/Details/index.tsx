import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


function Details(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
  }
});

export default Details;
