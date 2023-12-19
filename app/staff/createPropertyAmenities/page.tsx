import React from 'react';
import CreatePropertyAmenities from './CreatePropertyAmenities';
import GetPropertyAmenitiesForCreate from '@/app/actions/getPropertyAmenitiesForCreate';

export default async function CreatePropertyAmenitiesPage() {
  const amenitiesType = await GetPropertyAmenitiesForCreate();
  return <CreatePropertyAmenities amenitiesType={amenitiesType} />;
}
