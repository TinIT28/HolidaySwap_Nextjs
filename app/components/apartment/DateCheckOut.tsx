"use client";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker"; // Rename the import

export default function DateCheckOut() {
  // Rename the function
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <div className="flex flex-col">
          <MuiDatePicker className="h-[58px]" />
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
