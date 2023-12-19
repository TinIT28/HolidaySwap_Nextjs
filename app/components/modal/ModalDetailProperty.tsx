"use client";

import useDetailPropertyModal from "@/app/hooks/useDetailPropertyModal";
import React, { useState } from "react";
import ModalBaseDetail from "./ModalBaseDetail";
import Image from "next/image";
import { BiSolidBed } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import GetImagePropertiesById from "@/app/actions/getImagePropertiesById";

const ModalDetailProperty = () => {
  const detailPropertyModal = useDetailPropertyModal();
  const [isLoading, setIsLoading] = useState(false);
  const data = detailPropertyModal.data;

  const bodyContent = (
    <div className="flex h-[90%] flex-row">
      <div className="w-4/6 h-full grid grid-cols-2 gap-2 overflow-x-hidden overflow-y-auto mr-5">
        {data?.propertyImageResponses.map((item: any, index: number) => (
          <Image
            key={index}
            src={item.link}
            alt="resort-detail"
            width={400}
            height={350}
            className="rounded-md object-cover"
          />
        ))}
      </div>
      <div className="w-2/6 h-full overflow-x-hidden overflow-y-auto">
        <div className="font-bold text-common text-lg">
          {data?.propertyName}
        </div>

        <div className="flex flex-row items-center gap-2">
          <BiSolidBed size={18} color="#5C98F2" />
          <div className="text-base text-common font-bold">
            {data?.propertyDescription}
          </div>
        </div>

        <div className="text-sm mb-3">
          Extra beds and cribs are unavailable for this room type
        </div>

        {/* Aminities */}
        {data?.inRoomAmenityTypeResponses.map((item: any) => (
          <div className="flex flex-col my-3" key={item.id}>
            <div className="font-bold text-lg mb-2">
              {item?.inRoomAmenityTypeName}
            </div>
            <div className="grid grid-cols-2">
              {item?.inRoomAmenities?.map((amenity: any) => (
                <div
                  key={amenity.id}
                  className="flex flex-row items-center my-2"
                >
                  {/* <AiOutlineCheckCircle size={20} /> */}
                  <Image
                    src={amenity.inRoomAmenityLinkIcon}
                    height={30}
                    width={30}
                    alt="icon"
                  />
                  <div className="text-sm">{amenity?.inRoomAmenityName}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <ModalBaseDetail
      body={bodyContent}
      isOpen={detailPropertyModal.isOpen}
      onClose={detailPropertyModal.onClose}
    />
  );
};

export default ModalDetailProperty;
