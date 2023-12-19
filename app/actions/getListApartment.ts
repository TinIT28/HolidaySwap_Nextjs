import { authOptions } from '@/pages/api/auth/[...nextauth]';
import axios from 'axios';
import { getServerSession } from 'next-auth';
import GetCurrentUser from './getCurrentUser';

export default async function GetListApartment() {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.access_token;
    const config = { headers: { Authorization: `Bearer ${accessToken}` } };
    const currentUser = await GetCurrentUser();

    if (currentUser) {
      const listApartment = await axios.get(
        `${process.env.API_URL}/apartment-for-rent?pageNo=0&pageSize=12&sortDirection=asc`,
        config
      );

      if (!listApartment) {
        return null;
      }

      return listApartment.data;
    } else {
      const listApartment = await axios.get(
        `${process.env.API_URL}/apartment-for-rent?pageNo=0&pageSize=12&sortBy=startTime&sortDirection=asc`
      );

      if (!listApartment) {
        return null;
      }

      return listApartment.data;
    }
  } catch (error) {}
}
