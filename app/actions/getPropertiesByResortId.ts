import axios from "axios";

interface IParams {
  resortId?: string;
}

export default async function GetProperitesByResortId(params: IParams) {
  try {
    const { resortId } = params;

    const properties = await axios.get(
      `${process.env.API_URL}/properties?resortId=${resortId}&pageNo=0&pageSize=10&sortBy=id`
    );

    if (!properties) {
      return null;
    }

    return properties.data.content;
  } catch (error) {}
}
