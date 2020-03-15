import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { DATA } from "../data";
import { Post } from "../components/Post";


export const BookedScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.push('Post', {
      postId: post.id,
      postDate: post.date,
      booked: post.booked,
    })
  };

  const filteredPosts = DATA.filter(post => post.booked);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={filteredPosts}
        keyExtractor={post => post.id}
        renderItem={({ item }) => {
          return <Post post={item} onOpen={openPostHandler}/>
        }}/>
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
});
