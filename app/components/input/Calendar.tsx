"use client";

import React from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface CalendarProps {
  value: Range | any;
  onChange: (value: RangeKeyDict | any) => void;
  disabledDates?: Date[];
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  disabledDates,
  className,
}) => {
  return (
    <DateRange
      dateDisplayFormat="yyyy-MM-dd"
      rangeColors={["#5C98F2"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      months={2}
      direction="horizontal"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
      className={`${className}`}
    />
  );
};

export default Calendar;
