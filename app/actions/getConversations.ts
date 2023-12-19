import { getServerSession } from "next-auth";
import useAxiosAuth from "../hooks/useAxiosAuth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";

export default async function GetConversations() {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.access_token;
    const config = { headers: { Authorization: `Bearer ${accessToken}` } };
    const conversations = await axios.get(
      `${process.env.API_URL}/conversation/current-user`,
      config
    );

    console.log("Conversations", conversations.data);

    if (!conversations) {
      return null;
    }

    return conversations.data;
  } catch (error: any) {}
}
