import StepCreateApartmentRegister from '@/app/components/register/StepCreateApartmentRegister';
import React from 'react';
import GetListResort from '../actions/getListResort';

export default async function CreateApartmentSteps() {
  const listResort = await GetListResort('0');

  return <StepCreateApartmentRegister listResort={listResort} />;
}
