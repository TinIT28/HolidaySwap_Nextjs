import requireAuth from '@/app/libs/requireAuth';
import React from 'react';
import ListResortAmenities from './ListResortAmenities';
import GetResortAmenityTypeForCreate from '@/app/actions/getResortAmenityTypeForCreate';

export default async function ListResortAmenitiesPage() {
  const amenitiesType = await GetResortAmenityTypeForCreate();
  return requireAuth(<ListResortAmenities amenitiesType={amenitiesType} />, [3]);
}
