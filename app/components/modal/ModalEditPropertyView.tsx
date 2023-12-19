'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import Modal from './Modal';
import InputComponent from '../input/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Textarea, Label } from 'flowbite-react';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import toast from 'react-hot-toast';
import useEditPropertyViewModal from '@/app/hooks/useEditPropertyViewModal';

export default function ModalEditPropertyView() {
  const [isLoading, setIsLoading] = useState(false);
  const editPropertyViewModal = useEditPropertyViewModal();
  const propertyView = editPropertyViewModal.propertyView;
  const axiosAuthClient = useAxiosAuthClient();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      propertyViewName: '',
      propertyViewDescription: '',
    },
  });

  useEffect(() => {
    if (propertyView) {
      setValue('propertyViewName', propertyView.propertyViewName);
      setValue('propertyViewDescription', propertyView.propertyViewDescription);
    }
  }, [propertyView]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    const config = { headers: { 'Content-type': 'application/json' } };

    axiosAuthClient
      .put(`https://holiday-swap.click/api/v1/property-view/${propertyView?.id}`, data, config)
      .then(() => {
        toast.success('Update property view success!');
        editPropertyViewModal.onClose();
        editPropertyViewModal.onEditSuccess();
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
        label="Property View Name"
        id="propertyViewName"
        errors={errors}
        register={register}
        required
      />
      <div className="w-full">
        <div className="mb-2 block">
          <label>Property View Description</label>
        </div>
        <Textarea
          id="propertyViewDescription"
          placeholder="Leave a comment..."
          required
          rows={4}
          {...register('propertyViewDescription')}
        />
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={editPropertyViewModal.isOpen}
      title="Edit property view"
      actionLabel="Submit"
      onClose={editPropertyViewModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}
