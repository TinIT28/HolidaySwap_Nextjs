'use client';
import useLoginModal from '@/app/hooks/useLoginModal';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Heading from '../Heading';
import InputComponent from '../input/Input';
import Modal from './Modal';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { BiArrowBack } from 'react-icons/bi';
import useDeactiveResortModal from '@/app/hooks/useDeactiveResortModal';
import useMaintanceResortModal from '@/app/hooks/useMaintanceResortModal';
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ModalMaintanceResort() {
  const router = useRouter();
  const maintanceResortModal = useMaintanceResortModal();
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (isForgotPasswordModalOpen) {
    } else {
      signIn('credentials', { ...data, redirect: false }).then(async (callback) => {
        setIsLoading(false);
        if (callback?.ok) {
          toast.success('Logged in');
          router.refresh();
        }

        if (callback?.error) {
          toast.error('Invalid email or password');
        }
      });
    }
  };

  const toggleCreateAccountModal = useCallback(() => {
    setIsForgotPasswordModalOpen(false);
    maintanceResortModal.onClose();
  }, []);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-5">
        <InputComponent
          register={register}
          label="Start date maintance"
          id="startDateMaintance"
          errors={errors}
        />
        <div className='pt-10'>
            <FaLongArrowAltRight size={35} />
        </div>
         <InputComponent
          register={register}
          label="End date maintance"
          id="endDateMaintance"
          errors={errors}
        />
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={maintanceResortModal.isOpen}
      title={'Maintance Resort'}
      actionLabel={'Maintance'}
      onClose={maintanceResortModal.onClose}
      onSubmit={maintanceResortModal.onClose}
      body={bodyContent}
    />
  );
}
