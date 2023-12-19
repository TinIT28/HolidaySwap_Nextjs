'use client';

import { format } from 'date-fns';
import Image from 'next/image';
import React from 'react';
import ReactStars from 'react-stars';

interface ApartmentReviewBoxProps {
  rating: any;
}

const ApartmentReivewBox: React.FC<ApartmentReviewBoxProps> = ({ rating }) => {
  console.log('Check user review', rating?.user);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-2">
        <Image
          src={rating?.user?.avatar || '/images/placeholder.jpg'}
          width={50}
          height={50}
          alt="Avatar"
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="text-black text-base">
            {rating?.ratingType === 'PRIVATE'
              ? 'Anonymous users'
              : rating?.user?.fullName
              ? rating?.user?.fullName
              : rating?.user?.username}
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <ReactStars edit={false} count={5} size={15} color2="orange" value={rating?.rating} />
        <div>·</div>
        {rating && rating.createDate && (
          <div className="text-sm text-black">
            {format(new Date(rating?.createDate), "dd/MM/yyyy 'at' h:mm a")}
          </div>
        )}
      </div>

      <div className="text-base font-normal line-clamp-3">{rating?.comment}</div>
    </div>
  );
};

export default ApartmentReivewBox;
