import GetApproveOwnershipById from '@/app/actions/getApproveOwnershipById';
import GetPropertyDetail from '@/app/actions/getPropertyDetail';
import ManageApartment from '@/app/components/dashboard/ManageApartment';
import requireAuth from '@/app/libs/requireAuth';
import React from 'react';

interface IParams {
  slug: any[];
}
export default async function EditApartment({ params }: { params: IParams }) {
  const { slug } = params;
  const [propertyId, userId, roomId] = slug;

  const detailCoOwner = await GetApproveOwnershipById(params);
  const propertyDetail = await GetPropertyDetail(propertyId);

  return requireAuth(
    <div>
      <div className="mt-7">
        Dashboard {'>'} <span>Ownership</span> {'>'}{' '}
        <span className="text-common">Detail Apartment Owner</span>
      </div>
      <ManageApartment detailCoOwner={detailCoOwner} propertyDetail={propertyDetail} slug={slug} />
    </div>,
    [2, 4]
  );
}
