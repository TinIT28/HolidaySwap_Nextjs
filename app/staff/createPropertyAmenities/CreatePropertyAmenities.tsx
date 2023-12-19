'use client';

import Button from '@/app/components/Button';
import HeadingDashboard from '@/app/components/HeadingDashboard';
import Input from '@/app/components/input/Input';
import UploadImageCreateOwnership from '@/app/components/modal/UploadImageCreateOwnership';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import { Label, Select } from 'flowbite-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface CreatePropertyAmenitiesProps {
  amenitiesType: any;
}

const CreatePropertyAmenities: React.FC<CreatePropertyAmenitiesProps> = ({ amenitiesType }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [amenityId, setAmenityId] = useState(amenitiesType?.content[0]?.id);
  const axiosAuthClient = useAxiosAuthClient();
  const [file, setFile] = useState<any[]>([]);
  const [isClearImage, setIsClearImage] = useState(false);

  const handleDeleteImage = (image: any) => {
    setFile(file.filter((prev) => prev.size !== image.size));
  };

  const handeChangeNewImages = (image: any) => {
    if (image) {
      setFile((old) => [...old, image]);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      inRoomAmenityName: '',
      inRoomAmenityDescription: '',
      inRoomAmenityTypeId: 0,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    const formData = new FormData();
    const resortAmenity = {
      inRoomAmenityName: data.inRoomAmenityName,
      inRoomAmenityDescription: data.inRoomAmenityDescription,
      inRoomAmenityTypeId: amenityId,
    };

    const resortAmenityBlob = new Blob([JSON.stringify(resortAmenity)], {
      type: 'application/json',
    });
    formData.append('inRoomAmenity', resortAmenityBlob);
    file.forEach((element) => {
      formData.append('inRoomAmenityIcon', element);
    });

    axiosAuthClient
      .post(`/in-room-amenities`, formData)
      .then(() => {
        toast.success('Create Amenity success');
        setFile([]);
        reset();
        router.push('/staff/listResortAmenities');
        router.refresh();
      })
      .catch((response) => {
        console.log(response);
        toast.error(response?.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChangeAmenityId = (value: any) => {
    setAmenityId(value);
  };
  return (
    <div>
      <div className="mt-2">
        <HeadingDashboard
          routerDashboard="/staff"
          pageCurrentContent="Create Property Amenities"
          pageCurrentRouter="/staff/createPropertyAmenities"
        />
      </div>

      <div className="pb-10 grid grid-cols-2">
        <div>
          <div className="py-4">
            <Input
              id="inRoomAmenityName"
              label="Resort Amenity Name"
              register={register}
              errors={errors}
            />
          </div>
          <div className="py-4">
            <Input
              id="inRoomAmenityDescription"
              label="Property Amenity Description"
              register={register}
              errors={errors}
            />
          </div>
          <div className="py-4">
            <Label value="Resort Amenity Type" />
            <Select
              value={amenityId}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                handleChangeAmenityId(e.target.value)
              }
            >
              {amenitiesType.content.map((item: any, index: number) => (
                <option key={item.id} value={item.id}>
                  {item.inRoomAmenityTypeName}
                </option>
              ))}
            </Select>
          </div>
          <div className="py-4">
            <Label value="Property Amenity Icon" />
            <UploadImageCreateOwnership
              handeChangeNewImages={handeChangeNewImages}
              handleDeleteImage={handleDeleteImage}
              isClearImage={isClearImage}
              mutiple={false}
            />
          </div>
          <div>
            <Button label="Create" onClick={handleSubmit(onSubmit)} disabled={isLoading} />
          </div>
        </div>
        <div>
          <Image
            className="hidden md:block"
            src="/images/size.png"
            alt="Home"
            width={600}
            height={720}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePropertyAmenities;
