"use client";

import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextAreaProps {
  id: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  placeholder,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      id={id}
      {...register(id)}
      className="w-full h-96 bg-transparent border border-slate-300 p-4 focus-visible:border-sky-300 rounded-sm"
    ></textarea>
  );
};

export default TextArea;
