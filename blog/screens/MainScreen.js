import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const MainScreen = ({ navigation }) => {

  const goToPostScreen = () => {
    navigation.push('Post')
  };

  return(
    <View style={styles.center}>
      <Text>MainScreen</Text>
      <Button onPress={goToPostScreen} title="go"/>
    </View>
  )
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
