import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PostScreen = ({ route }) => {
  return(
    <View style={styles.center}>
      <Text>{route.params.postId}</Text>
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
