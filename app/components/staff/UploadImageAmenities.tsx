'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import Image from 'next/image';
import { FaRegTimesCircle } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface UploadImageAmenitiesProps {
  resortImages: any;
  handleDeleteImages: () => any;
  handeChangeNewImages: (image: any) => void;
}

const UploadImageAmenities: React.FC<UploadImageAmenitiesProps> = ({
  resortImages,
  handleDeleteImages,
  handeChangeNewImages,
}) => {
  const [amenityImage, setAmenityImage] = useState<any>(resortImages);
  const [newImages, setNewImages] = useState<any[]>([]);
  const [previewImage, setPreviewImage] = useState<any>();

  useEffect(() => {
    if (resortImages) {
      setPreviewImage(resortImages);
    }
  }, [resortImages]);

  const handleDeleteImage = () => {
    setPreviewImage(null);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    if (file) {
      handeChangeNewImages(file);
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setPreviewImage((old: any) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file[0]);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1">
        {previewImage && (
          <div className="relative">
            <div className="p-2 border-gray-300 border rounded-md">
              <Image
                src={previewImage}
                alt="image"
                width={1000}
                height={700}
                className="object-cover"
              />
            </div>
            <FaRegTimesCircle
              onClick={() => {
                handleDeleteImage();
                handleDeleteImages();
              }}
              size={20}
              className="absolute top-1 right-1 cursor-pointer hover:opacity-90"
            />
          </div>
        )}

        <div className={`py-10 md:py-0 lg:py-0 xl:py-0 ${previewImage ? 'hidden' : 'block'}`}>
          <label
            htmlFor="avatar"
            className="flex flex-col h-[120px] items-center justify-center border-dashed border border-gray-400 rounded-md hover:opacity-80 hover:cursor-pointer"
          >
            <GoPlus size={30} />
            <span>Upload</span>
          </label>
          <input
            onChange={handleImageChange}
            type="file"
            id="avatar"
            className="hidden"
            accept="image/*"
          />
        </div>
      </div>
    </>
  );
};

export default UploadImageAmenities;
