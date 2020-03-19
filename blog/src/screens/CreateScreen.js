import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  View, Text, StyleSheet, TextInput,
  Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { THEME } from "../theme";
import { addPost } from "../store/actions/post";
import { PhotoPicker } from "../components/PhotoPicker";


export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [img, setImg] = useState('');

  const photoPickHandler = (uri) => {
    setImg(uri)
  };

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img,
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
          <PhotoPicker onPick={photoPickHandler}/>
          <Button
            title="Создать пост"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
            disabled={!text || !img}
          />
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
