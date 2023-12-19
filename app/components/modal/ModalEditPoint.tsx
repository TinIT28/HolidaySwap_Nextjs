'use client';

import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../input/Input';
import Modal from './Modal';
import { toast } from 'react-hot-toast';
import useCreatePlanModal from '@/app/hooks/useCreatePlanModal';
import { Label, Select, Textarea, FileInput } from 'flowbite-react';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import useEditPointModal from '@/app/hooks/useEditPointModal';
import TooltipCreatePoint from '../admin/tooltip/TooltipCreatePoint';

export const priceType = [
  {
    id: 1,
    priceType: 'ONE_TIME',
  },
  {
    id: 2,
    priceType: 'RECURRING',
  },
];

export const planPriceInterval = [
  {
    id: 1,
    planPriceInterval: 'MONTHLY',
  },
  {
    id: 2,
    planPriceInterval: 'YEARLY',
  },
  {
    id: 3,
    planPriceInterval: 'LIFETIME',
  },
  {
    id: 4,
    planPriceInterval: 'NONE',
  },
];

export default function ModalEditPoint() {
  const { data: session } = useSession();
  const router = useRouter();
  const editPointModal = useEditPointModal();
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<any[]>([]);
  const [priceTypeValue, setPriceTypeValue] = useState<any>();
  const [planPriceIntervalValue, setPlanPriceIntervalValue] = useState<any>();
  const axiosAuthClient = useAxiosAuthClient();

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return null;
    } else {
      const selectedFile = Array.from(e.target.files);
      if (selectedFile) {
        setFile(selectedFile);
      }
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const setCustomeValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const handleChangePriceType = (value: any) => {
    setPriceTypeValue(value);
  };

  const handleChangePlanPriceInterval = (value: any) => {
    setPlanPriceIntervalValue(value);
  };

  useEffect(() => {
    setCustomeValue('priceType', priceTypeValue);
    setCustomeValue('planPriceInterval', planPriceIntervalValue);
  }, [priceTypeValue, planPriceIntervalValue, file]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    const formData = new FormData();

    formData.append('planName', data.planName);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('priceType', data.priceType);
    formData.append('planPriceInterval', data.planPriceInterval);
    formData.append('image', new Blob([JSON.stringify(file)], { type: 'image/jpeg' }));

    const config = {
      headers: { Authorization: `Bearer ${session?.user.access_token}` },
    };

    axios
      .post('https://holiday-swap.click/api/v1/plan', formData, config)
      .then(() => {
        toast.success('Create plan success');
        reset();
        setPriceTypeValue(null);
        setPlanPriceIntervalValue(null);
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggle = useCallback(() => {
    editPointModal.onClose();
  }, [editPointModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="w-full">
        <div className="flex flex-row items-center gap-4">
          <div className="font-bold">1 point</div>
          <div className="text-common">=</div>
          <div className="flex flex-row items-center gap-2">
            <input
              value="3000"
              placeholder="Input point price"
              className="peer px-2 py-2 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed"
            />
            <TooltipCreatePoint />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="w-full">
          <Label value="Description" />
          <Textarea id="description" {...register('description')} />
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={editPointModal.isOpen}
      title="Update Point"
      actionLabel="Update"
      onClose={editPointModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}
