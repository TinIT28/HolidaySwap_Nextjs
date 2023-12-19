import axios from 'axios';

export default async function GetPropertyAmenitiesForCreate() {
  try {
    const amenitiesType = await axios.get(
      `https://holiday-swap.click/api/v1/in-room-amenity-types?pageNo=0&pageSize=9999&sortDirection=asc&sortBy=id`
    );

    if (!amenitiesType) {
      return null;
    }

    return amenitiesType.data;
  } catch (error) {}
}
