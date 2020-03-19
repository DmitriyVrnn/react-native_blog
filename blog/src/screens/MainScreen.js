import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import { Post } from "../components/Post";
import { PostList } from "../components/PostList";
import { loadPosts } from "../store/actions/post";
import { THEME } from "../theme";


export const MainScreen = ({ navigation, }) => {
  const openPostHandler = (post) => {
    navigation.push('Post', {
      postId: post.id,
      postDate: post.date,
      booked: post.booked,
    })
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch]);

  const allPosts = useSelector(state => state.post.allPosts);
  const loading = useSelector(state => state.post.loading);

  if (loading) {
    return <View style={styles.center}>
      <ActivityIndicator color={THEME.MAIN_COLOR}/>
    </View>
  }

  return <PostList data={allPosts} onOpen={openPostHandler}/>
};


const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});