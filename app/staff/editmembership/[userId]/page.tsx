import ApartmentOfMembership from '@/app/components/staff/ApartmentOfMembership';
import DropDownBanMember from '@/app/components/staff/DropDownBanMember';
import requireAuth from '@/app/libs/requireAuth';
import React from 'react';
import MembershipDetail from './MembershipDetail';
import GetUserById from '@/app/actions/getUserById';

interface IParams {
  userId: any;
}

export default async function EditMembership({ params }: {params: IParams}) {
  const userDetail = await GetUserById(params);
  return requireAuth(
   <MembershipDetail userDetail={userDetail} />,
    [3]
  );
}
