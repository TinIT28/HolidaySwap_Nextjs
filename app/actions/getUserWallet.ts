import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import axios from 'axios';

export default async function GetUserWallet() {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.access_token;
    const config = { headers: { Authorization: `Bearer ${accessToken}` } };

    const userWallet = await axios.get(`${process.env.API_URL}/point/user_wallet`, config);

    if (!userWallet) {
      return null;
    }

    return userWallet.data;
  } catch (error) {}
}
