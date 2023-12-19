'use client';

import { useRouter } from 'next/navigation';
import React, { ChangeEvent, Fragment, useCallback, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import InputComponent from '../input/Input';
import Modal from './Modal';
import { toast } from 'react-hot-toast';
import useCreatePlanModal from '@/app/hooks/useCreatePlanModal';
import { Label, Select, Textarea, FileInput } from 'flowbite-react';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import useCreatePublicTimeModal from '@/app/hooks/useCreatePublicTimeModal';
import CalendarAparment from '@/app/apartment/CalendarAparment';
import { startOfWeek, endOfWeek, format, addDays, addMonths, subDays, setDate } from 'date-fns';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import weekday from 'dayjs/plugin/weekday';
import ModalCreate from './ModalCreate';
import InputYear from '../input/InputYear';

dayjs.extend(isoWeek);

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
};
interface IDate {
  checkIn: string;
  checkOut: string;
}
export default function ModalCreatePublicTime() {
  const { data: session } = useSession();
  const router = useRouter();
  const createPublicTime = useCreatePublicTimeModal();
  const detailCoOwner = createPublicTime.detailCoOwner;
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<any[]>([]);
  const [priceTypeValue, setPriceTypeValue] = useState<any>();
  const [planPriceIntervalValue, setPlanPriceIntervalValue] = useState<any>();
  const axiosAuthClient = useAxiosAuthClient();

  const [dateRange, setDateRange] = useState(initialDateRange);
  const [publicDateRange, setPublicDateRange] = useState(dateRange);
  const [timeFramesId, setTimeFramesId] = useState<any>();
  const [timeFramesWeekNumber, setTimeFramesWeekNumber] = useState();
  const [yearCreate, setYearCreate] = useState<number>(new Date().getFullYear() + 1);
  const [dateOut, setDateOut] = useState<any>();
  const [timeHasBooked, setTimeHasBooked] = useState<IDate[]>([{ checkIn: '', checkOut: '' }]);
  const [availableTimeCreated, setAvailableTimeCreated] = useState<IDate[]>([
    { checkIn: '', checkOut: '' },
  ]);
  const [arrayTimeDisAble, setArrayTimeDisAble] = useState<IDate[]>([
    { checkIn: '', checkOut: '' },
  ]);
  useEffect(() => {
    if (detailCoOwner) {
      setTimeFramesId(detailCoOwner?.timeFrames[0]?.id);
    }
  }, [detailCoOwner]);

  const [arrayYear, setArrayYear] = useState<number[]>([]);

  const range = (start: any, stop: any, step: any) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

  useEffect(() => {
    if (detailCoOwner) {
      setArrayYear(
        range(
          new Date().getFullYear(),
          detailCoOwner?.endTime
            ? new Date(detailCoOwner?.endTime).getFullYear()
            : new Date().getFullYear() + 50,
          +1
        )
      );
    }
  }, [detailCoOwner]);

  const getWeekDates = (weekNumber: number, year: number) => {
    const startDate = dayjs().year(year).isoWeek(weekNumber).startOf('isoWeek').startOf('day');
    //.set('hour', 7);
    const endDate = dayjs().year(year).isoWeek(weekNumber).endOf('isoWeek').startOf('day');
    //.set('hour', 7);

    setDateRange({ ...dateRange, startDate: startDate.toDate(), endDate: endDate.toDate() });
    setPublicDateRange({
      ...publicDateRange,
      startDate: startDate.toDate(),
      endDate: endDate.toDate(),
    });
  };

  const getDatesOutsideDateRange = (dateRange: any) => {
    const startDate = dateRange.startDate;
    const endDate = dateRange.endDate;

    const startDateOutsideDateRange = addDays(endDate, 1);
    const endDateOutsideDateRange = subDays(addMonths(startDate, 30), 1);

    const datesOutsideDateRange = [];
    for (
      let i = startDateOutsideDateRange.getTime();
      i <= endDateOutsideDateRange.getTime();
      i += 24 * 60 * 60 * 1000
    ) {
      datesOutsideDateRange.push(new Date(i));
    }

    return datesOutsideDateRange;
  };
  const fetchAvailableTimeCreated = (availableId: number, year: number) => {
    axios
      .get(
        `https://holiday-swap.click/api/v1/available-times/getAvailableTimeCreated?timeFrameId=${availableId}&year=${year}`
      )
      .then((response) => {
        const rs = response.data.map((element: any) => {
          const startDate = element.startTime;
          const endDate = element.endTime;
          const obj = { checkIn: startDate, checkOut: endDate };
          return obj;
        });
        setAvailableTimeCreated(rs);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChangeTimeFrameId = (value: any) => {
    setTimeFramesId(value);
  };
  useEffect(() => {
    setDateOut([]);

    if (timeFramesId) {
      fetchtimeHasBooked(timeFramesId, yearCreate);
      fetchAvailableTimeCreated(timeFramesId, yearCreate);
    }
    setTimeHasBooked([...timeHasBooked, ...availableTimeCreated]);
  }, [timeFramesId, yearCreate, createPublicTime.isOpen]);

  useEffect(() => {
    setArrayTimeDisAble([...timeHasBooked, ...availableTimeCreated]);
  }, [timeHasBooked, availableTimeCreated]);
  //getTimeHasBookedInTimeFrame and year
  const fetchtimeHasBooked = (timeFrameId: number, year: number) => {
    axios
      .get(
        `https://holiday-swap.click/api/booking/timeHasBooked?timeFrameId=${timeFrameId}&year=${year}`
      )
      .then((response) => {
        setTimeHasBooked(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    let checkDateInBoundary: Date[] = checkDateIsInBoundary(arrayTimeDisAble);
    let dateDiffGreaterTwo = dateDiffIsGreaterTwo(arrayTimeDisAble);
    let dateConsecutive = dateIsConsecutive(arrayTimeDisAble);
    setDateOut([...checkDateInBoundary, ...dateDiffGreaterTwo, ...dateConsecutive]);
    // console.log('useEffect timeHasBooked');
  }, [arrayTimeDisAble]);
  const checkDateIsInBoundary = (array: IDate[]) => {
    let arr: Date[] = [];
    array.forEach((element) => {
      let checkIn = new Date(element.checkIn);
      checkIn.setHours(0, 0, 0, 0);
      let checkOut = new Date(element.checkOut);
      checkOut.setHours(0, 0, 0, 0);
      if (checkIn.getTime() == dateRange.startDate.getTime()) {
        arr.push(checkIn);
      }
      if (checkOut.getTime() == dateRange.endDate.getTime()) {
        arr.push(checkOut);
      }
    });
    return arr;
  };

  const dateDiffIsGreaterTwo = (array: IDate[]) => {
    let arr: Date[] = [];
    array.forEach((element) => {
      let checkIn = new Date(element.checkIn);
      let checkOut = new Date(element.checkOut);
      const timeDifference = checkOut.getTime() - checkIn.getTime();
      const daysDifference = timeDifference / (1000 * 3600 * 24);

      if (daysDifference > 1) {
        let theDateStart = checkIn;
        theDateStart = new Date(theDateStart.getTime() + 24 * 60 * 60 * 1000);
        while (theDateStart.getTime() < checkOut.getTime()) {
          arr.push(theDateStart);
          theDateStart = new Date(theDateStart.getTime() + 24 * 60 * 60 * 1000);
        }
      }
    });
    return arr;
  };

  const dateIsConsecutive = (array: IDate[]) => {
    let arr: Date[] = [];
    array.forEach((element) => {
      let checkIn = new Date(element.checkIn);
      let checkOut = new Date(element.checkOut);
      for (let index = 1; index < array.length; index++) {
        const nextCheckIn = new Date(array[index].checkIn);
        const nextCheckOut = new Date(array[index].checkOut);
        if (checkOut.getTime() == nextCheckIn.getTime()) {
          arr.push(nextCheckIn);
        } else if (checkIn.getTime() == nextCheckOut.getTime()) {
          arr.push(nextCheckOut);
        }
      }
    });
    return arr;
  };

  const func4 = (ranges: any, array: IDate[]) => {
    const { selection } = ranges;
    const startDate = selection.startDate;

    const endDate = selection.endDate;
    let result: Date[] = [];
    array.forEach((element) => {
      let checkIn = new Date(element.checkIn);
      checkIn.setHours(0, 0, 0, 0);
      let checkOut = new Date(element.checkOut);
      checkOut.setHours(0, 0, 0, 0);

      if (startDate.getTime() <= checkIn.getTime()) {
        result.push(checkOut);
        // setDateOut(result);
      } else if (startDate.getTime() >= checkIn.getTime()) {
        result.push(checkIn);
        // setDateOut(result);
      }
    });
    let x: Date[] = dateDiffIsGreaterTwo(arrayTimeDisAble);

    x.forEach((e) => {
      result.push(new Date(e));
    });
    result.concat(x);

    setDateOut(result);
  };

  useEffect(() => {
    const yearRegex = new RegExp(`^2\\d{3}$`);
    if (timeFramesWeekNumber && !yearRegex.test(format(new Date(yearCreate), 'yyyy').trim())) {
      // console.log('Check week', timeFramesWeekNumber);
      getWeekDates(timeFramesWeekNumber, yearCreate);
    }
  }, [timeFramesWeekNumber, yearCreate]);

  useEffect(() => {
    if (dateRange) {
      // const newDateOUt = getDatesOutsideDateRange(dateRange);
      // setDateOut(newDateOUt);
    }
  }, [dateRange]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const setCustomeValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    const body = {
      startTime: format(publicDateRange.startDate, 'yyyy-MM-dd'),
      endTime: format(publicDateRange.endDate, 'yyyy-MM-dd'),
      pricePerNight: data.pricePerNight,
    };

    const config = {
      headers: { Authorization: `Bearer ${session?.user.access_token}` },
      'Content-type': 'application/json',
    };

    axios
      .post(`https://holiday-swap.click/api/v1/available-times/${timeFramesId}`, body, config)
      .then(() => {
        toast.success('Create public success');
        createPublicTime.onCreated();
        reset();
        createPublicTime.onClose();
      })
      .catch((response) => {
        toast.error(response.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggle = useCallback(() => {
    createPublicTime.onClose();
  }, [createPublicTime]);

  useEffect(() => {
    if (timeFramesId) {
      const fetchData = async () => {
        const timeFrame = await axios.get(
          `https://holiday-swap.click/api/v1/time-frames/${timeFramesId}`
        );
        setTimeFramesWeekNumber(timeFrame.data.weekNumber);
      };
      fetchData();
    }
  }, [timeFramesId]);

  const bodyContent = (
    <div className="flex flex-col gap-4 overflow-x-hidden overflow-y-auto no-scrollbar h-[100%]">
      <div className="grid grid-cols-1">
        <div className="py-3 flex flex-row gap-1 items-center">
          <label>
            Year to create <span className="text-rose-500">*</span>
          </label>
        </div>
        <Select
          value={yearCreate}
          className="focus:ring-0 focus:border-0"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setYearCreate(Number(e.target.value));
          }}
        >
          {arrayYear.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </div>
      <div className="grid grid-cols-1">
        <label>
          Select week <span className="text-rose-500">*</span>
        </label>
        <Select
          value={timeFramesId}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            handleChangeTimeFrameId(e.target.value);
          }}
        >
          {detailCoOwner?.timeFrames.map((item: any, index: number) => (
            <option key={item.id} value={item.id}>
              {item.weekNumber}
            </option>
          ))}
        </Select>
      </div>
      {timeFramesId && (
        <div className="w-full">
          <Label value="Select dates within that date range to create public" />
          <CalendarAparment
            value={publicDateRange}
            onChange={(value: any) => {
              setPublicDateRange(value.selection);
              func4(value, arrayTimeDisAble);
            }}
            minDate={dateRange.startDate}
            maxDate={dateRange.endDate}
            disabledDates={dateOut}
            className="w-full"
          />
        </div>
      )}
      <div className="grid grid-cols-1">
        <InputComponent
          id="pricePerNight"
          label="Price/Night"
          type="number"
          min={1}
          register={register}
          errors={errors}
          required
        />
      </div>
    </div>
  );

  return (
    <ModalCreate
      disabled={isLoading}
      isOpen={createPublicTime.isOpen}
      title="Create Public Time"
      actionLabel="Submit"
      onClose={createPublicTime.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}
