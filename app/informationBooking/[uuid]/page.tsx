import React from 'react';
import InformationBooking from './InformationBooking';
import GetBookingHistoryById from '@/app/actions/getBookingHistoryById';
import GetListUser from '@/app/actions/getListUser';
import GetListResort from '@/app/actions/getListResort';
import GetBookingDetailBySecure from '@/app/actions/getBookingDetailBySecure';

interface IParams {
  uuid: any;
}

export default async function InformationBookingPage({ params }: { params: IParams }) {
  const booking = await GetBookingDetailBySecure(params);
  const ownerUser = await GetListUser({ email: booking?.ownerEmail });
  const ownerResort = await GetListResort('0', { resortName: booking?.resortName });
  return <InformationBooking booking={booking} ownerUser={ownerUser} ownerResort={ownerResort} />;
}
