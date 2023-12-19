import axios from 'axios';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import GetCurrentUser from './getCurrentUser';

export default async function GetHistoryTransaction() {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.access_token;
    const config = { headers: { Authorization: `Bearer ${accessToken}` } };
    const currentUser = await GetCurrentUser();

    const historyTransaction = await axios.get(
      `${process.env.API_URL}/payment/history/${currentUser.userId}`,
      config
    );

    if (!historyTransaction) {
      return null;
    }

    return historyTransaction.data;
  } catch (error) {}
}
