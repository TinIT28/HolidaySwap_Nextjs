import Image from "next/image";
import React from "react";

export default function TimeShareHeader() {
  return (
    <div className=" flex flex-row justify-between">
      <Image
        src="/images/resort1.jpg"
        alt="destination"
        height={800}
        width={350}
        className="w-[900px] h-[455px] rounded-xl"
      />
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3 pl-[20px]">
          <Image
            src="/images/resortdetail1.jpg"
            alt="destination"
            height={800}
            width={350}
            className="w-[195px] h-[219px] rounded-xl"
          />
          <Image
            src="/images/resortdetail2.jpg"
            alt="destination"
            height={800}
            width={350}
            className="w-[195px] h-[219px] rounded-xl"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 pl-[20px]">
          <Image
            src="/images/resortdetail3.jpg"
            alt="destination"
            height={800}
            width={350}
            className="w-[195px] h-[219px] rounded-xl"
          />
          <Image
            src="/images/resortdetail4.jpg"
            alt="destination"
            height={800}
            width={350}
            className="w-[195px] h-[219px] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
