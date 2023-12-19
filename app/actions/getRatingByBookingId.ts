import axios from 'axios';

interface IParams {
  bookingId: any;
}
export default async function GetRatingByBookingId(params: IParams) {
  try {
    const { bookingId } = params;
    const rating = await axios.get(
      `https://holiday-swap.click/api/v1/rating/property/${bookingId}`
    );

    if (!rating) {
      return null;
    }

    return rating.data;
  } catch (error) {}
}
