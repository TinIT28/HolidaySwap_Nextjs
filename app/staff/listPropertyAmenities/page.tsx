import React from 'react';
import ListPropertyAmenities from './ListPropertyAmenities';
import requireAuth from '@/app/libs/requireAuth';

export default function ListPropertyAmenitiesPage() {
  return requireAuth(<ListPropertyAmenities />, [3]);
}
