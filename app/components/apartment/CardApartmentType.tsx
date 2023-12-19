"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";
import { AiTwotoneStar } from "react-icons/ai";

interface CardApartmentTypeProps {
  propertyTypes?: any;
}

const CardApartmentType: React.FC<CardApartmentTypeProps> = ({
  propertyTypes,
}) => {
  const router = useRouter();
  return (
    <Fragment>
      {propertyTypes?.map((item: any) => (
        <div
          key={item.id}
          onClick={() => router.push(`/propertyTypes/${item.id}`)}
          className="bg-white w-[400px] h-auto shadow-sm rounded-md relative cursor-pointer"
        >
          <div className="overflow-hidden object-cover">
            <img
              className="object-cover h-[250px] relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
              src="/images/resort3.jpg"
              alt=""
            />
          </div>{" "}
          <div className="bg-black w-auto h-auto text-white absolute -mt-[70px] -mr-[200px] px-8 flex flex-row py-3">
            <div>From: </div>
            <span className="ml-1"> $90</span>
          </div>
          <div className="py-5 px-5">
            <div className="py-5 text-[25px]">{item.propertyTypeName}</div>
            <div className="text-gray-500 pb-5">
              {item.propertyTypeDescription}
            </div>
            <div className="flex flex-row items-center py-2 ">
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
              <span className="pl-1">(1 Review)</span>
            </div>
            <Link
              className="hover:border-b hover:border-gray-700 mb-5"
              href="#"
            >
              Book Now
            </Link>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default CardApartmentType;
