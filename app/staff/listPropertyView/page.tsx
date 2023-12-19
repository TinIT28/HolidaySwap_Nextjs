import requireAuth from '@/app/libs/requireAuth';
import React from 'react';
import ListPropertyView from './ListPropertyView';

export default async function ListPropertyViewPage() {
  return requireAuth(<ListPropertyView />, [3]);
}
