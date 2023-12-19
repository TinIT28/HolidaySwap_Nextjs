import React from 'react';
import GetPostUser from '../actions/getPostUser';
import PostBlog from './PostBlog';
import GetCurrentUser from '../actions/getCurrentUser';

export const metadata = {
  title: 'Blog',
};

export default async function PostBlogPage() {
  const currentUser = await GetCurrentUser();
  let post;
  if (currentUser) {
    const userId = currentUser.userId;
    post = await GetPostUser({ userId });
  } else {
    post = await GetPostUser();
  }

  return <PostBlog post={post} currentUser={currentUser} />;
}
