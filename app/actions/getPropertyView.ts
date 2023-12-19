import axios from "axios";

export default async function GetPropertyView() {
  try {
    const propertyView = await axios.get(
      `${process.env.API_URL}/property-view?pageNo=0&pageSize=10&sortBy=id`
    );

    if (!propertyView) {
      return null;
    }

    return propertyView.data.content;
  } catch (error) {}
}
