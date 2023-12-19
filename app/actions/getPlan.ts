import { getServerSession } from "next-auth";
import useAxiosAuth from "../hooks/useAxiosAuth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";

export default async function GetPlan() {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.access_token;
    const config = { headers: { Authorization: `Bearer ${accessToken}` } };
    const plan = await axios.get(`${process.env.API_URL}/plan`, config);

    if (!plan) {
      return null;
    }

    return plan.data;
  } catch (error) {}
}
