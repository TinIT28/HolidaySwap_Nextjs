'use client';

import React, { useState } from 'react';
import { IconType } from 'react-icons/lib';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { GrSubtractCircle } from 'react-icons/gr';
import Image from 'next/image';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface SizeHomeInputProps {
  id: string;
  icon: string;
  label: string;
  count: number;
  register: UseFormRegister<FieldValues>;
  setCustomeValue: (id: string, value: any[]) => void;
}

const SizeHomeInput: React.FC<SizeHomeInputProps> = ({
  id,
  register,
  icon,
  label,
  count,
  setCustomeValue,
}) => {
  const [number, setNumber] = useState(count);

  const descreaseCount = (count: number) => {
    if (count < 1) {
      return 0;
    } else {
      setNumber((value) => value - 1);
      const newCount = count - 1;
      setCustomeValue(id, newCount as any);
    }
  };

  const increaseCount = (count: number) => {
    setNumber((value) => value + 1);
    const newCount = count + 1;
    setCustomeValue(id, newCount as any);
  };

  return (
    <div className="grid grid-cols-2 gap-6 py-4">
      <div className="gap-3 flex items-center">
        <Image src={icon} width={40} height={40} alt="icon" />
        <p>{label}</p>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => descreaseCount(number)}
          type="button"
          className="hover:opacity-90 mr-8"
        >
          <GrSubtractCircle size={30} />
        </button>
        <input
          id={id}
          value={number}
          {...register(id)}
          className="w-4 border-0 outline-none focus:outline-none"
        />
        <button
          onClick={() => increaseCount(number)}
          type="button"
          className="hover:opacity-90 ml-8"
        >
          <AiOutlinePlusCircle size={30} />
        </button>
      </div>
    </div>
  );
};

export default SizeHomeInput;
