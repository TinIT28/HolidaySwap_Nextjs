import React from 'react';
import DetailOwnershipApprove from './DetailOwnershipApprove';
import GetApproveOwnershipById from '@/app/actions/getApproveOwnershipById';
import GetPropertyDetail from '@/app/actions/getPropertyDetail';
import GetUserById from '@/app/actions/getUserById';
import requireAuth from '@/app/libs/requireAuth';

interface IParams {
  slug: any[];
}

export default async function DetailOwnershipApprovePage({ params }: { params: IParams }) {
  const { slug } = params; // Destructure the slug array from params.
  const [propertyId, userId, roomId] = slug;

  const approveDetail = await GetApproveOwnershipById(params);
  return requireAuth(<DetailOwnershipApprove approveDetail={approveDetail} />, [3]);
}
