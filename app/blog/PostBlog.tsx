'use client';

import React, { useEffect } from 'react';
import Container from '../components/Container';
import CardBlog from '../components/blogNews/CardBlog';
import SidebarBlogNews from '../components/blogNews/SidebarBlogNews';

interface PostBlogProps {
  post: any;
  currentUser: any;
}

const PostBlog: React.FC<PostBlogProps> = ({ post, currentUser }) => {
  return (
    <Container className="py-32 bg-white">
      <div className="flex flex-row gap-5 ">
        <div className="w-full">
          <CardBlog post={post} currentUser={currentUser} />
        </div>
        
      </div>
    </Container>
  );
};

export default PostBlog;
