import React from 'react';
import { useSelector } from "react-redux";

import { Post } from "../components/Post";
import { PostList } from "../components/PostList";


export const BookedScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.push('Post', {
      postId: post.id,
      postDate: post.date,
      booked: post.booked,
    })
  };

  const bookedPosts = useSelector(state => state.post.bookedPosts);

  return <PostList data={bookedPosts} onOpen={openPostHandler}/>
};