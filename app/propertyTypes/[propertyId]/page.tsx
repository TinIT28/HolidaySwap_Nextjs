import GetPropertyById from "@/app/actions/getPropertyById";
import React from "react";
import DetailProperty from "./DetailProperty";

interface IParams {
  propertyId?: string;
}

const PropertyPage = async ({ params }: { params: IParams }) => {
  const property = await GetPropertyById(params);

  return <DetailProperty property={property} />;
};

export default PropertyPage;
