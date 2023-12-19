'use client';

import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../input/Input';
import Modal from './Modal';
import { toast } from 'react-hot-toast';
import useCreatePlanModal from '@/app/hooks/useCreatePlanModal';
import { Select, Option, Textarea } from '@material-tailwind/react';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import useCreateOwnershipModal from '@/app/hooks/useCreateOwnershipModal';
import { addDays, addMonths, format, subDays } from 'date-fns';
import CalendarAparment from '@/app/apartment/CalendarAparment';
import useEditDateBookingModal from '@/app/hooks/useEditDateBookingModal';
import { useDateRange } from '@/app/apartment/DateRangeContext';
import useNewDateRange from '@/app/hooks/useNewDateRange';

export default function ModalEditDateBooking() {
  const [isLoading, setIsLoading] = useState(false);

  const editDateBookingModal = useEditDateBookingModal();
  const newDateRange = useNewDateRange();
  const isNew = newDateRange.isNew;
  const isSave = editDateBookingModal.isSave;
  const handleDatePicker = editDateBookingModal.handleDateRangePicker;
  const dateRangeProp = JSON.parse(editDateBookingModal.dateRange);
  const [dateRange, setDateRange] = useState({
    startDate: addDays(new Date(dateRangeProp?.startDate?.split('T', 1)[0] as string), 1),
    endDate: addDays(new Date(dateRangeProp?.endDate?.split('T', 1)[0] as string), 1),
    key: 'selection',
  });

  const {
    dateRangeContext,
    dateRangeDefaultContext,
    setDateRangeContext,
    setDateRangeDefaultContext,
    dateOut,
    setDateOut,
  } = useDateRange();

  const bodyContent = (
    <div className="h-full w-full">
      <CalendarAparment
        value={dateRangeContext}
        onChange={(value: any) => {
          setDateRangeContext(value.selection);
          if (handleDatePicker) {
            handleDatePicker(value);
          }
        }}
        minDate={dateRangeDefaultContext?.startDate}
        maxDate={dateRangeDefaultContext?.endDate}
        disabledDates={dateOut}
        className="w-full"
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={editDateBookingModal.isOpen}
      actionLabel="Save"
      title="Edit date booking"
      onClose={editDateBookingModal.onClose}
      body={bodyContent}
      onSubmit={editDateBookingModal.onClose}
    />
  );
}
