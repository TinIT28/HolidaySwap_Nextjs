import axios from 'axios';

interface IParams {
  availableId?: string;
}

export default async function GetApartmentById(params: IParams) {
  try {
    const { availableId } = params;
    const apartment = await axios.get(`${process.env.API_URL}/apartment-for-rent/${availableId}`);

    console.log('Check apartment', apartment.data);

    if (!apartment) {
      return null;
    }

    return apartment.data;
  } catch (error) {}
}
