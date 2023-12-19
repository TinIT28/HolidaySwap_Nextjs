import { authOptions } from '@/pages/api/auth/[...nextauth]';
import axios from 'axios';
import { getServerSession } from 'next-auth';

interface IParams {
  userId?: string;
}

export default async function GetPostUser(params: IParams = {}) {
  try {
    const { userId } = params;
    console.log("check params", params)
    let link = `https://holiday-swap.click/api/post/get`;

    if (userId) {
      link += `?userId=${userId}`;
    }

    console.log("Check link", link)

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
