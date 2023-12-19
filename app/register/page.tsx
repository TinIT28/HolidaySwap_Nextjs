import React from 'react';
import ClientOnly from '../components/ClientOnly';
import RegisterBody from '../components/register/RegisterBody';
import GetListResort from '../actions/getListResort';

export const metadata = {
  title: 'Register',
};

export default async function Register() {
  const listResort = await GetListResort('0');
  return (
    <ClientOnly>
      <RegisterBody listResort={listResort} />
    </ClientOnly>
  );
}
