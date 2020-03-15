import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>Версия приложения <Text style={styles.version}>0.1.1</Text></Text>
    </View>
  )
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  version: {
    fontFamily: 'open-bold'
  }
});
