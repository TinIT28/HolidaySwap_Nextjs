import React from 'react';
import OwnerBookingDetail from './OwnerBookingDetail';
import GetOwnerHistoryBookingById from '@/app/actions/getOwnerHistoryBookingById';
import GetListUser from '@/app/actions/getListUser';
import GetListResort from '@/app/actions/getListResort';
import GetRatingByBookingId from '@/app/actions/getRatingByBookingId';
import requireAuth from '@/app/libs/requireAuth';

interface IParams {
  bookingId: string;
}

export default async function OwnerBookingDetailPage({ params }: { params: IParams }) {
  const ownerBookingDetail = await GetOwnerHistoryBookingById(params);
  const rating = await GetRatingByBookingId(params);
  const memberBooking = await GetListUser({ email: ownerBookingDetail?.memberBookingEmail });
  const ownerResort = await GetListResort('0', { resortName: ownerBookingDetail?.resortName });

  return requireAuth(
    <OwnerBookingDetail
      ownerBookingDetailId={params}
      ownerBookingDetail={ownerBookingDetail}
      memberBooking={memberBooking}
      ownerResort={ownerResort}
      rating={rating}
    />,
    [2]
  )
}
