'use client';

import ApartmentOfMembership from '@/app/components/staff/ApartmentOfMembership';
import DropDownBanMember from '@/app/components/staff/DropDownBanMember';
import { format } from 'date-fns';
import Image from 'next/image';
import React from 'react';

interface MembershipDetailProps {
  userDetail: any;
}

const MembershipDetail: React.FC<MembershipDetailProps> = ({ userDetail }) => {
  return (
    <div>
      <div className="bg-gray-200 w-auto h-auto rounded-lg px-20 pt-14">
        <div>
          <div className="flex flex-row justify-between items-center pb-10">
            <div className="text-[20px] font-bold text-common">Membership Profile</div>

            <DropDownBanMember />
          </div>
          <div className="flex flex-row">
            <Image
              className="rounded-full object-cover w-24 h-24 mr-10"
              width={50}
              height={50}
              src={userDetail?.avatar || '/images/placeholder.jpg'}
              alt=""
            />
            <div className="flex flex-row mb-14 ">
              <div className="flex flex-col mr-10 text-gray-400 ">
                <div className="mb-5">Name</div>
                <div className="mb-5">Birth Date</div>
                <div className="mb-5">Email</div>
              </div>
              <div className="flex flex-col mr-16 text-gray-600 ">
                <div className="mb-5 ml-9">{userDetail?.fullName}</div>
                <div className="mb-5 ml-9">{format(new Date(userDetail?.dob), 'dd-MM-yyyy')}</div>
                <div className="mb-5 ml-9">{userDetail?.email}</div>
              </div>
              <div className="flex flex-col mr-10 text-gray-400 ">
                <div className="mb-5 ml-9">Gender</div>
                <div className="mb-5 ml-9"> Country</div>
                <div className="mb-5 ml-9"> Phone</div>
              </div>
              <div className="flex flex-col text-gray-600 ">
                <div className="mb-5 ml-9">{userDetail?.gender}</div>
                <div className="mb-5 ml-9">VietNam</div>
                <div className="mb-5 ml-9">{userDetail?.phone}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ApartmentOfMembership /> */}
    </div>
  );
};

export default MembershipDetail;
