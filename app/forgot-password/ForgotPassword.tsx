'use client';

import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import InputComponent from '../components/input/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import InputPassword from '../components/input/InputPassword';
import Button from '../components/Button';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import useLoginModal from '../hooks/useLoginModal';

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [token, setToken] = useState<string | null>();
  const searchParams = useSearchParams();
  const loginModal = useLoginModal();

  useEffect(() => {
    if (searchParams?.get('token')) {
      setToken(searchParams?.get('token'));
    }
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    if (token) {
      axios
        .get(`https://holiday-swap.click/api/v1/auth/forgot-password?token=${token}`)
        .then(() => {
          toast.success('Verified, please reset password'!);
        })
        .catch((response) => {
          toast.error(response.response.data.message);
          router.push('/');
        });
    }
  }, [token]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    const body = {
      email: data.email,
      password: data.password,
      token: token,
    };
    if (data.password === data.confirmPassword) {
      axios
        .put(`https://holiday-swap.click/api/v1/auth/reset-password`, body, {
          headers: { 'Content-type': 'application/json' },
        })
        .then(() => {
          toast.success('Reset password success. Please login again!');
          router.push('/');
          reset();
          setToken(null);
          loginModal.onOpen();
        })
        .catch((response) => {
          toast.error(response.response.data.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      toast.error('Confirm passowrd not match with password. Please try again!');
      setIsLoading(false);
    }
  };

  return (
    <Container className="xl:!px-[400px]">
      <div className="flex flex-col py-32 justify-center items-center">
        <div className="py-7 flex flex-row gap-1">
          <h2 className="text-2xl font-bold">Forgot password</h2>
          <span className="mx-1 text-2xl font-bold text-black">
            Holiday<span className="text-2xl text-common">Swap</span>
          </span>
        </div>

        <div className="flex flex-col w-full">
          <InputComponent
            label="Email"
            id="email"
            errors={errors}
            required={true}
            register={register}
          />
          <InputPassword
            label="New Password"
            id="password"
            type="password"
            errors={errors}
            required={true}
            register={register}
          />
          <InputPassword
            label="Confirm New Password"
            id="confirmPassword"
            type="password"
            errors={errors}
            required={true}
            register={register}
          />
          <div className="py-5">
            <Button label="Reset password" onClick={handleSubmit(onSubmit)} disabled={isLoading} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ForgotPassword;
