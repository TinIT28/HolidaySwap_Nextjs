import axios from "axios";

interface IParams {
  resortId?: string;
}

export default async function GetResortById(params: IParams) {
  try {
    const { resortId } = params;

    const resort = await axios.get(
      `${process.env.API_URL}/resorts/${resortId}`
    );

    if (!resort) {
      return null;
    }

    return resort.data;
  } catch (error) {}
}
