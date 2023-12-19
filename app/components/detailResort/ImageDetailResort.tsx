"use client";

import Image from "next/image";
import React from "react";

interface ImageDetailResortProps {
  resortImages: any;
}

const ImageDetailResort: React.FC<ImageDetailResortProps> = ({
  resortImages,
}) => {
  return (
    <div className=" flex flex-row justify-between">
      {resortImages?.slice(0, 1).map((item: any) => (
        <Image
          key={item.id}
          src={item.link}
          alt="destination"
          height={800}
          width={350}
          className="w-[900px] h-[455px] rounded-xl"
        />
      ))}
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3 pl-[20px]">
          {resortImages?.slice(1, 3).map((item: any) => (
            <Image
              key={item.id}
              src={item.link}
              alt="destination"
              height={800}
              width={350}
              className="w-[195px] h-[219px] rounded-xl"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 pl-[20px]">
          {resortImages?.slice(3, 5).map((item: any) => (
            <Image
              key={item.id}
              src={item.link}
              alt="destination"
              height={800}
              width={350}
              className="w-[195px] h-[219px] rounded-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageDetailResort;
