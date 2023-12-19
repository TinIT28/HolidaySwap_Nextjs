import axios from 'axios';

export default async function GetResortAmenityTypeForCreate() {
  try {
    const amenity = await axios.get(
      `https://holiday-swap.click/api/v1/resort-amenity-types?pageNo=0&pageSize=9999&sortDirection=asc&sortBy=id`
    );

    if (!amenity) {
      return null;
    }

    return amenity.data;
  } catch (error) {}
}
