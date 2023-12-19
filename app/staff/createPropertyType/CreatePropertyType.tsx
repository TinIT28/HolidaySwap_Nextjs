'use client';

import Button from '@/app/components/Button';
import HeadingDashboard from '@/app/components/HeadingDashboard';
import Input from '@/app/components/input/Input';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const CreatePropertyType = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const axiosAuthClient = useAxiosAuthClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      propertyTypeName: '',
      propertyTypeDescription: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    const config = { headers: { 'Content-type': 'application/json' } };

    axiosAuthClient
      .post(`/property-types`, data, config)
      .then(() => {
        router.push('/staff/listPropertyType');
        toast.success('Create property type success');
        reset();
      })
      .catch((response) => {
        toast.error(response.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div>
      <div className="mt-2">
        <HeadingDashboard
          routerDashboard="/staff"
          pageCurrentContent="Create property type"
          pageCurrentRouter="/staff/createPropertyType"
        />
      </div>

      <div className="pb-10 grid grid-cols-2">
        <div>
          <div className="py-4">
            <Input
              id="propertyTypeName"
              label="Property Type Name"
              register={register}
              errors={errors}
            />
          </div>
          <div className="py-4">
            <Input
              id="propertyTypeDescription"
              label="Property Type Description"
              register={register}
              errors={errors}
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

export default CreatePropertyType;
