import { getServerSession } from "next-auth";
import GetCurrentUser from "./getCurrentUser";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";

export default async function GetTransfer() {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.access_token;
    const config = { headers: { Authorization: `Bearer ${accessToken}` } };

    const currentUser = await GetCurrentUser();

    const transfer = await axios.get(
      `${process.env.API_URL}/transfer?userId=${currentUser?.userId}`, config
    );

    if (!transfer) {
      return null;
    }

    return transfer.data;
  } catch (error) {}
}
