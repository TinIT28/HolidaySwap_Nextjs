import React from 'react';
import MyProfile from '../components/profile/MyProfile';
import requireAuth from '../libs/requireAuth';
import GetCurrentUser from '../actions/getCurrentUser';
import getBookingHistory from '../actions/getBookingHistory';

export const metadata = {
  title: 'DashBoard',
};

export default async function DashBoard() {
  const currentUser = await GetCurrentUser();
  const historyBooking = await getBookingHistory();
  return requireAuth(
    <div className="py-3">
      <div>
        <MyProfile currentUser={currentUser} historyBooking={historyBooking} />
      </div>
    </div>,
    [2, 4]
  );
}
