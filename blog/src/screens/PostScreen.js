import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native';

import { THEME } from "../theme";

import { DATA } from "../data";


export const PostScreen = ({ route }) => {
  const post = DATA.find(post => post.id === route.params.postId);

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы уверены?',
      [
        {
          text: 'Отменить',
          style: 'cancel',
        },
        { text: 'Удалить', style: 'destructive', onPress: () => {} },
      ],
      { cancelable: false },
    );
  };

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image}/>
      <View style={styles.textWrap}>
        <Text style={styles.postTitle}>{post.text}</Text>
      </View>
      <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={removeHandler}/>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  postTitle: {
    fontFamily: 'open-regular'
  }
});
