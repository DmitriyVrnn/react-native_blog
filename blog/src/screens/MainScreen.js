import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Post } from "../components/Post";
import { PostList } from "../components/PostList";
import { loadPosts } from "../store/actions/post";


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

  return <PostList data={allPosts} onOpen={openPostHandler}/>
};