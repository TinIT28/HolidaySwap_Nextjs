"use client";

import Image from "next/image";
import React from "react";
import { TbPhotoPlus } from "react-icons/tb";

interface ImageUploadProps {
  onChange?: (value: string) => void;
  value?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  return (
    <div
      onClick={() => open?.()}
      className="relative cursor-pointer hover:opacity-70 transition border-dashed rounded-md border-2 p-5 border-gray-300 flex flex-col justify-center items-center gap-4 text-gray-600"
    >
      <TbPhotoPlus size={30} />
      <div className="font-semibold text-sm text-center">Click to upload</div>
      {/* {value && (
        <div className="absolute inset-0 w-full h-full">
          <Image alt="upload" fill style={{ objectFit: "cover" }} src={value} />
        </div>
      )} */}
    </div>
  );
};

export default ImageUpload;
