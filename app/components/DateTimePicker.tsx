import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface DateTimePickerProps {
  id: string;
  date: Date;
  onChange: (value: any) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  id,
  date,
  onChange,
}) => {
  return (
    <DatePicker
      className="peer p-4 pt-6 font-light bg-white border rounded-md outline-none transition disabled:opacity-70"
      id={id}
      selected={date}
      onChange={onChange}
    />
  );
};

export default DateTimePicker;
