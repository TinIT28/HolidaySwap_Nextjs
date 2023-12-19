import axios from 'axios';

interface IParams {
  postId: string;
  userId?: string;
}

export default async function GetPostById(params: IParams) {
  try {
    const { postId, userId } = params;
    let link = `https://holiday-swap.click/api/post/get/${postId}`;

    if (userId) {
      link += `?userId=${userId}`;
    }

    const post = await axios.get(link);

    if (!post) {
      return null;
    }

    return post.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
}
