import { getServerSession } from "next-auth";
import useAxiosAuth from "../hooks/useAxiosAuth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";

interface IParams {
  bookingId: any;
}

export default async function GetBookingHistoryById(params: IParams) {
  try {
    const { bookingId } = params;
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.access_token;
    const config = { headers: { Authorization: `Bearer ${accessToken}` } };
    const bookingDetail = await axios.get(
      `https://holiday-swap.click/api/booking/historybooking/${bookingId}`,
      config
    );

    if (!bookingDetail) {
      return null;
    }

    return bookingDetail.data;
  } catch (error) {}
}
