import axios from 'axios';

interface IParams {
  uuid: any;
}

export default async function GetBookingDetailBySecure(params: IParams) {
  try {
    const { uuid } = params;
    const bookingDetail = await axios.get(
      `https://holiday-swap.click/api/booking/getqrcode/${uuid}`
    );

    if (!bookingDetail) {
      return null;
    }

    return bookingDetail.data;
  } catch (error) {}
}
