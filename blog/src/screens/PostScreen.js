import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { THEME } from "../theme";

import { removePost, toggleBooked } from "../store/actions/post";


export const PostScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === route.params.postId));
  const post = useSelector(state => state.post.allPosts.find(post => post.id === route.params.postId));

  useEffect(() => {
    navigation.setOptions({ booked })
  }, [booked]);

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(route.params.postId))
  }, [dispatch, route.params.postId]);

  useEffect(() => {
    navigation.setParams({ toggleHandler })
  }, [toggleHandler]);

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы уверены?',
      [
        {
          text: 'Отменить',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            navigation.goBack();
            dispatch(removePost(route.params.postId))
          }
        },
      ],
      { cancelable: false },
    );
  };

  if (!post) {
    return null
  }

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
