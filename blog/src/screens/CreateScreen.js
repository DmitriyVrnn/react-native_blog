import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  View, Text, StyleSheet, TextInput,
  Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { THEME } from "../theme";
import { addPost } from "../store/actions/post";
import { PhotoPicker } from "../components/PhotoPicker";


export const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const img = 'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg'

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: img,
      booked: false
    };
    dispatch(addPost(post));
    navigation.navigate('Blog');
  };

  return (
    <ScrollView style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создание поста</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Введите текст поста"
            value={text}
            onChangeText={setText}
            multiline
          />
          <Image
            style={{ width: '100%', height: 200, marginBottom: 10 }}
            source={{
              uri: img,
            }}/>
          <Button
            title="Создать пост"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
          />
          <PhotoPicker/>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular',
    marginVertical: 10
  },
  textarea: {
    padding: 10,
    marginBottom: 10
  }
});
