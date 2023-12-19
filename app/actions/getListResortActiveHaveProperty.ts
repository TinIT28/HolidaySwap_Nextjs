import axios from 'axios';

export default async function GetListResortActiveHaveProperty() {
  try {
    let apiUrl = `https://holiday-swap.click/api/v1/resorts/getList`;

    const listResort = await axios.get(apiUrl);

    return listResort.data;
  } catch (error) {
    console.error('Error fetching list of resorts:', error);
    throw error;
  }
}
