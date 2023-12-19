'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import Modal from './Modal';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Textarea } from 'flowbite-react';
import useEditPropertyTypeModal from '@/app/hooks/useEditPropertyTypeModal';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import InputComponent from '../input/Input';
import GetPropertyTypeStaff from '@/app/actions/getPropertyTypeStaff';

export default function ModalEditPropertyType() {
  const [isLoading, setIsLoading] = useState(false);
  const editPropertyTypeModal = useEditPropertyTypeModal();
  const propertyType = editPropertyTypeModal.propertyType;
  const axiosAuthClient = useAxiosAuthClient();
  const router = useRouter();

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      propertyTypeName: '',
      propertyTypeDescription: '',
    },
  });

  useEffect(() => {
    if (propertyType) {
      setValue('propertyTypeName', propertyType.propertyTypeName);
      setValue('propertyTypeDescription', propertyType.propertyTypeDescription);
    }
  }, [propertyType]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    const config = { headers: { 'Content-type': 'application/json' } };

    axiosAuthClient
      .put(`https://holiday-swap.click/api/v1/property-types/${propertyType?.id}`, data, config)
      .then(async () => {
        toast.success('Update property type success!');
        editPropertyTypeModal.onClose();
        editPropertyTypeModal.onEditSuccess();
      })
      .catch((response) => {
        toast.error(response.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <InputComponent
        label="Property Type Name"
        id="propertyTypeName"
        errors={errors}
        register={register}
        required
      />
      <div className="w-full">
        <div className="mb-2 block">
          <label>Property Type Description</label>
        </div>
        <Textarea
          id="propertyTypeDescription"
          placeholder="Leave a comment..."
          required
          rows={4}
          {...register('propertyTypeDescription')}
        />
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={editPropertyTypeModal.isOpen}
      title="Edit property type"
      actionLabel="Submit"
      onClose={editPropertyTypeModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}
