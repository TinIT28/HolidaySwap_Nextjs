'use client';

import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  //   disabled?: boolean;
  //   formatPrice?: boolean;
  //   required?: boolean;
  //   register: UseFormRegister<FieldValues>;
  //   errors: FieldErrors;
}

const InputMini: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  //   disabled,
  //   formatPrice,
  //   required,
  //   register,
  //   errors,
}) => {
  return (
    <div className="w-full flex-col flex">
      {/* {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )} */}
      <label className="py-3">{label}</label>
      <input
        id={id}
        // disabled={disabled}
        // {...register(id, { required })}
        placeholder={placeholder}
        type={type}
        className={`peer  p-4  font-light bg-white border rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
        `}
      />
    </div>
  );
};

export default InputMini;
