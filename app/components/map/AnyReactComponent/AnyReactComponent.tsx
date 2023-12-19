"use client";

import { Transition } from "@headlessui/react";
import StayCard from "./StayCard";
import React, { FC, Fragment } from "react";
import { useState } from "react";
import ApartmentIcon from '@mui/icons-material/Apartment';
import { StayDataType } from '@/app/components/map/type';

export interface AnyReactComponentProps {
  className?: string;
  listing?: StayDataType;
  isSelected?: boolean;
  lat: number;
  lng: number;
}

const AnyReactComponent: FC<AnyReactComponentProps> = ({
  className = "",
  listing,
  isSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`nc-AnyReactComponent relative  ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span
        className={`flex px-1 py-1 rounded-lg bg-white dark:bg-neutral-900 text-sm font-semibold items-center justify-center min-w-max shadow-lg hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors${
          isSelected
            ? " !bg-white text-neutral-900 !opacity-100 animate-bounce dark:bg-white dark:text-neutral-900 relative !z-50"
            : ""
        }`}
      >
        {isSelected && <span>P{listing?.price}</span>}
        {!isSelected && <ApartmentIcon className="!text-base"/>}
      </span>
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute z-50 bottom-full pb-3 -left-12 w-[260px] aspect-w-1">
          {listing && (
            <StayCard size="small" data={listing} className="shadow-2xl" />
          )}
        </div>
      </Transition>
    </div>
  );
};

export default AnyReactComponent;
