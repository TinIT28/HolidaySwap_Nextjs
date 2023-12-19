"use client";

import axios from "axios";

interface IParams {
  propertyId?: string;
}

export default async function GetPropertyById(params: IParams) {
  try {
    const { propertyId } = params;

    const property = await axios.get(
      `https://holiday-swap.click/api/v1/property-types/${propertyId}`
    );

    if (!property) {
      return null;
    }

    return property.data;
  } catch (error) {}
}
