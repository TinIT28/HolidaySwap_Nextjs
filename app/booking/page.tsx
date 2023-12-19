import React from 'react';
import Booking from './Booking';
import GetCurrentUser from '../actions/getCurrentUser';

import requireAuth from '../libs/requireAuth';


export const metadata = {
  title: 'Confirm and pay',
};

export default async function BookingPage() {
  const currentUser = await GetCurrentUser();
  return requireAuth(<Booking currentUser={currentUser} />, [2]);
}
