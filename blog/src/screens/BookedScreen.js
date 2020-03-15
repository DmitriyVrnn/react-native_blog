import React from 'react';

import { DATA } from "../data";

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

  const filteredPosts = DATA.filter(post => post.booked);

  return <PostList data={filteredPosts} onOpen={openPostHandler}/>
};