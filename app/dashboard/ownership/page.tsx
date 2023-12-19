import React, { Fragment } from 'react';
import Ownership from '../../components/dashboard/Ownership';
import GetOwnershipByUserId from '@/app/actions/getOwnershipByUserId';
import GetListResort from '@/app/actions/getListResort';
import GetCurrentUser from '@/app/actions/getCurrentUser';
import requireAuth from '@/app/libs/requireAuth';
import GetListResortActiveHaveProperty from '@/app/actions/getListResortActiveHaveProperty';
import GetListResortForCreateOwner from '@/app/actions/getListResortForCreateOwner';

export const metadata = {
  title: 'My apartment',
};

const OwnershipPage = async () => {
  const ownershipUser = await GetOwnershipByUserId();
  const listResort = await GetListResortActiveHaveProperty();
  const currentUser = await GetCurrentUser();

  return requireAuth(
    <Fragment>
      <Ownership ownershipUser={ownershipUser} resort={listResort} currentUser={currentUser} />
    </Fragment>,
    [2, 4]
  );
};

export default OwnershipPage;
