'use client';

import { Tooltip } from 'flowbite-react';
import React, { Fragment, useEffect, useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { BiHelpCircle } from 'react-icons/bi';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

interface InputProps {
  id: string;
  label: string;
  tooltipContent?: string;
  value?: any;
  valueRegister?: any;
  onChange?: (value: any) => void;
  onKeyUp?: (value: any) => void;
  type?: string;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean;
  formatPrice?: boolean;
  min?: number;
  max?: number;
  maxLength?: number;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  setValue?: UseFormSetValue<FieldValues>;
  errors: FieldErrors;
}

interface FormInputs {
  multipleErrorInput: string;
}

const InputPassword: React.FC<InputProps> = ({
  id,
  label,
  type,
  placeholder = '',
  valueRegister,
  disabled,
  tooltipContent,
  formatPrice,
  value,
  required,
  min,
  max,
  maxLength,
  readonly,
  register,
  setValue,
  onChange,
  onKeyUp,
  errors,
}) => {
  const emailPattern = id.includes('email')
    ? new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    : /^.*$/;

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [typeInput, setTypeInput] = useState(type);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  useEffect(() => {
    if (isShowPassword) {
      setTypeInput('text');
    } else {
      setTypeInput('password');
    }
  }, [isShowPassword]);

  return (
    <div className="w-full flex-col flex">
      {/* {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )} */}
      <div className="py-3 flex flex-row gap-1 items-center">
        <label>
          {label} <span className="text-rose-500">{required ? '*' : ''}</span>
        </label>
        {tooltipContent && (
          <Tooltip content={tooltipContent}>
            <BiHelpCircle size={20} />
          </Tooltip>
        )}
      </div>
      <div className="relative">
        <input
          id={id}
          disabled={disabled}
          {...register(id, {
            required: `${label} is required`,
            pattern: {
              value: emailPattern,
              message: id.includes('email') ? 'Invalid email format' : 'Invalid phone number',
            },
          })}
          placeholder={placeholder}
          name={id}
          type={typeInput}
          min={min}
          max={max}
          maxLength={maxLength}
          readOnly={readonly}
          value={value}
          onKeyUp={onKeyUp}
          onChange={onChange}
          className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed focus:ring-0
        ${errors[id] ? 'border-red-400' : 'border-gray-400'} ${
            errors[id] ? 'focus:border-red-400' : 'focus:border-black'
          }`}
        />
        {type === 'password' ? (
          <Fragment>
            {isShowPassword ? (
              <div
                onClick={handleShowPassword}
                className="absolute inset-y-0 z-50 right-0 pr-3 flex items-center text-sm leading-5 hover:cursor-pointer hover:opacity-90"
              >
                <FaRegEye size={20} />
              </div>
            ) : (
              <div
                onClick={handleShowPassword}
                className="absolute inset-y-0 z-50 right-0 pr-3 flex items-center text-sm leading-5 hover:cursor-pointer hover:opacity-90"
              >
                <FaRegEyeSlash size={20} />
              </div>
            )}
          </Fragment>
        ) : (
          ''
        )}
      </div>
      <div className="pt-1">
        <ErrorMessage
          errors={errors}
          name={id}
          render={({ message }) => <p className="text-sm text-rose-500">{message}</p>}
        />
      </div>
    </div>
  );
};

export default InputPassword;
