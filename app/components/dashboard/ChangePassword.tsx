'use client';
import React, { useState } from 'react';
import HeadingDashboard from '../HeadingDashboard';
import InputComponent from '../input/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { signOut, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import useLoginModal from '@/app/hooks/useLoginModal';
import { Button, Modal } from 'flowbite-react';
import InputPassword from '../input/InputPassword';

interface ChangePasswordProps {
  currentUser: any;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ currentUser }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { data: session } = useSession();
  const loginModal = useLoginModal();

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue) {
      window.location.href = selectedValue;
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: currentUser.email,
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (currentUser) {
      setIsLoading(true);
      const body = {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
        confirmPassword: data.confirmPassword,
      };
      const config = {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${session?.user.access_token}`,
        },
      };
      axios
        .patch(`https://holiday-swap.click/api/v1/users/change-password`, body, config)
        .then(() => {
          signOut();
          setOpenModal(false);
          toast.success('Change password successfully!');
          reset();
        })
        .catch((response) => {
          toast.error(response.response.data.message);
          setOpenModal(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="px-10">
      <div className="w-full lg:w-[600px] xl:w-[600px]">
        <div className="block lg:hidden xl:hidden">
          <select
            className="w-full rounded-lg my-4"
            name=""
            id=""
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="/dashboard">Dashboard</option>
            <option value="/dashboard/editProfile">Edit Profile</option>
            <option value="/dashboard/changePassword">Change password</option>
            <option value="/dashboard/ownership">Ownership</option>
            <option value="/dashboard/wallet">wallet</option>
            <option value="/dashboard/transfer">Transfer</option>
            <option value="/dashboard/myBooking">My Booking</option>
          </select>
        </div>
        <div className="mt-8">
          <HeadingDashboard
            routerDashboard="/dashboard"
            pageCurrentContent="Change password"
            pageCurrentRouter="/dashboard/changePassword"
          />
        </div>

        <div className="mt-10">
          <div className=" flex flex-col mb-10  md:flex md:flex-row md:mb-14">
            {/* <div className="w-[277px] text-gray-700">Old Password*</div>
            <input
              type="email"
              className=" text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent rounded-md"
            /> */}
            <InputPassword
              register={register}
              id="currentPassword"
              label="Current Password"
              errors={errors}
              type="password"
              required={true}
            />
          </div>
          <div className=" flex flex-col mb-10  md:flex md:flex-row md:mb-14">
            <InputPassword
              register={register}
              type="password"
              id="newPassword"
              label="New Password"
              errors={errors}
              required={true}
            />
          </div>
          <div className=" flex flex-col mb-10  md:flex md:flex-row md:mb-14">
            <InputPassword
              register={register}
              type="password"
              id="confirmPassword"
              label="Confirm New Password"
              errors={errors}
              required={true}
            />
          </div>
          <button
            disabled={isLoading}
            onClick={() => setOpenModal(true)}
            className=" text-[15px] bg-common px-4 py-2 rounded-md text-white md:bg-[#5C98F2] md:px-4 md:py-3 md:text-white md:rounded-md md:ml-56"
          >
            Update Password
          </button>
        </div>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Change password</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Are you want to change password?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-end">
          <Button color="green" className="font-bold text-lg" onClick={handleSubmit(onSubmit)}>
            Update password
          </Button>
          <Button color="gray" className="text-lg" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChangePassword;
