import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function GetCurrentUser() {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.access_token;
    const config = { headers: { Authorization: `Bearer ${accessToken}` } };

    const currentUser = await axios.get(
      `${process.env.API_URL}/users/profile`,
      config
    );

    if (!currentUser) {
      return null;
    }

    return currentUser.data;
  } catch (error: any) {}
}
