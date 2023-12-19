"use client";

import axios from "axios";

interface IParams {
  propertyId?: string;
}

export default async function GetImagePropertiesById(params: IParams) {
  try {
    const { propertyId } = params;

    console.log("Check id", propertyId);

    const propertyImage = await axios.get(
      `https://holiday-swap.click/api/v1/properties/${propertyId}/property-in-room-amenity-types`
    );

    if (!propertyImage) {
      return null;
    }

    return propertyImage.data;
  } catch (error) {}
}
