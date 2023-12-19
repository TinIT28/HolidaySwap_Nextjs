import React from 'react';
import Container from '../../components/Container';
import { FaHeart, FaRegComment, FaUser } from 'react-icons/fa6';
import { Image } from 'antd';
import GetPostById from '@/app/actions/getPostById';
import PostDetail from './PostDetail';
import GetCurrentUser from '@/app/actions/getCurrentUser';

interface IParams {
  postId: string;
  userId?: string;
}

export const generateMetadata = async ({ params }: { params: IParams }) => {
  const postDetail = await GetPostById({ postId: params.postId });

  return {
    title: postDetail?.title,
  };
};

const DetailBlogPage: React.FC<{ params: IParams }> = async ({ params }) => {
  const currentUser = await GetCurrentUser();

  let postDetail;
  if (currentUser) {
    const userId = currentUser.userId;
    postDetail = await GetPostById({ postId: params.postId, userId });
  } else {
    postDetail = await GetPostById({ postId: params.postId });
  }

  return <PostDetail postDetail={postDetail} currentUser={currentUser} />;
};

export default DetailBlogPage;
