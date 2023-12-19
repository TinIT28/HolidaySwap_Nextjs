import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";

export default async function getBookingHistory() {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.access_token;
    const config = { headers: { Authorization: `Bearer ${accessToken}` } };
    const historyBooking = await axios.get(
      "https://holiday-swap.click/api/booking/historybooking", config
    );

    if (!historyBooking) {
      return null;
    }

    return historyBooking.data;
  } catch (error) {}
}
