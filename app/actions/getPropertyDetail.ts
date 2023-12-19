import axios from 'axios';

interface IParams {
  propertyId: any;
}

export default async function GetPropertyDetail(params: IParams) {
  try {
    const propertyDetail = await axios.get(`${process.env.API_URL}/properties/${params}`);

    if (!propertyDetail) {
      return null;
    }

    return propertyDetail.data;
  } catch (error) {}
}
