import React from 'react';

import { DATA } from "../data";

import { Post } from "../components/Post";
import { PostList } from "../components/PostList";


export const MainScreen = ({ navigation, }) => {
  const openPostHandler = (post) => {
    navigation.push('Post', {
      postId: post.id,
      postDate: post.date,
      booked: post.booked,
    })
  };

  return <PostList data={DATA} onOpen={openPostHandler}/>
};