import React from 'react';
import requireAuth from '@/app/libs/requireAuth';
import ChangePassword from '@/app/components/dashboard/ChangePassword';
import GetCurrentUser from '@/app/actions/getCurrentUser';

export const metadata = {
  title: 'Change Password',
};

export default async function DashBoard() {
  const currentUser = await GetCurrentUser();
  return requireAuth(
    <div>
      <ChangePassword currentUser={currentUser} />
    </div>,
    [2, 4]
  );
}
