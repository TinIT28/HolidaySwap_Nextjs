'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { AiFillCalendar, AiFillCaretDown, AiOutlinePlusCircle } from 'react-icons/ai';
import { GrSubtractCircle } from 'react-icons/gr';
import CalendarAparment from './CalendarAparment';
import { format } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date().getTime() + 24 * 60 * 60 * 1000,
  key: 'selection',
};

interface SearchBarResortProps {
  listResort: any;
}

const SearchBarResort: React.FC<SearchBarResortProps> = ({ listResort }) => {
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [visibleGuest, setVisibleGuest] = useState(false);
  const [dateRange, setDateRange] = useState(initialDateRange);
  const [resortId, setResortId] = useState<string>('');
  const [adultsGuest, setAdultsGuest] = useState<number>(1);
  const [chidrenGuest, setChildrenGuest] = useState<number>(0);
  const [totalGuest, setTotalGuest] = useState<number>(0);
  const searchParams = useSearchParams();

  const [resortIdValue, setResortIdValue] = useState<any>();
  const [numberOfGuestValue, setNumberOfGuestValue] = useState<any>();
  const [initialDate, setInitialDate] = useState(initialDateRange);
  const [dateRangeNew, setDateRangeNew] = useState<any>(initialDateRange);

  const resortIdParams = searchParams?.get('resortId');
  const dateRangeParamsSearch = searchParams?.get('dateRange');
  let dateRangeParams: any;
  const numberOfGuestParams = searchParams?.get('numberOfGuest');
  const router = useRouter();

  useEffect(() => {
    if (dateRangeParamsSearch) {
      const JSONDateRange = JSON.parse(dateRangeParamsSearch);
      const newDate = {
        key: 'selection',
        startDate: new Date(JSONDateRange.startDate),
        endDate: new Date(JSONDateRange.endDate),
      };
      setDateRangeNew(newDate);
    }
    if (resortIdParams) {
      setResortIdValue(resortIdParams);
    }

    if (dateRangeParamsSearch) {
      setNumberOfGuestValue(numberOfGuestParams);
    }
  }, [resortIdParams, dateRangeParams, numberOfGuestParams]);

  const handleVisibleCalendar = () => {
    if (visibleGuest) {
      setVisibleGuest(false);
      setVisibleCalendar(!visibleCalendar);
    } else {
      setVisibleCalendar(!visibleCalendar);
    }
  };

  const handleVisibleGuest = () => {
    if (visibleCalendar) {
      setVisibleCalendar(false);
      setVisibleGuest(!visibleGuest);
    } else {
      setVisibleGuest(!visibleGuest);
    }
  };

  const handleDescreaseAdultGuest = (value: number) => {
    if (value <= 1) {
      return 1;
    }

    setAdultsGuest(value - 1);
    setTotalGuest(totalGuest - 1);
    setNumberOfGuestValue(value - 1);
  };

  const handleInscreaseAdultGuest = (value: number) => {
    setAdultsGuest(value + 1);
    setTotalGuest(totalGuest + 1);
    setNumberOfGuestValue(value + 1);
  };

  const handldeDescreaseChildrenGuest = (value: number) => {
    if (value <= 0) {
      return 0;
    }

    setChildrenGuest(value - 1);
    setTotalGuest(totalGuest - 1);
  };

  const handleInscreaseChildrenGuest = (value: number) => {
    setChildrenGuest(value + 1);
    setTotalGuest(totalGuest + 1);
  };

  const handleChangeResortId = (value: any) => {
    setResortId(value);
    setResortIdValue(value);
  };

  const handleSearchApartment = () => {
    let link = `/apartment`;

    if (resortIdValue) {
      if (!link.includes('/apartment?')) {
        link += `?resortId=${resortIdValue}`;
      } else {
        link += `&resortId=${resortIdValue}`;
      }
    }

    if (dateRangeNew && JSON.stringify(dateRangeNew) !== dateRangeParamsSearch) {
      if (!link.includes('/apartment?')) {
        link += `?dateRange=${JSON.stringify(dateRangeNew)}`;
      } else {
        link += `&dateRange=${JSON.stringify(dateRangeNew)}`;
      }
    } else if (dateRangeNew && JSON.stringify(dateRangeNew) === dateRangeParamsSearch) {
      if (!link.includes('/apartment?')) {
        link += `?dateRange=${dateRangeParamsSearch}`;
      } else {
        link += `&dateRange=${dateRangeParamsSearch}`;
      }
    } else {
      link += ``;
    }

    if (numberOfGuestValue) {
      if (!link.includes('/apartment?')) {
        link += `?numberOfGuest=${numberOfGuestValue}`;
      } else {
        link += `&numberOfGuest=${numberOfGuestValue}`;
      }
    }

    router.push(link);
  };

  return (
    <Fragment>
      <div className="bg-resort-banner bg-cover bg-no-repeat bg-center flex items-center py-64 justify-center relative opacity-80">
        <div className="bg-white rounded-3xl w-full flex-row z-20 grid absolute mt-24 md:mt-24 md:w-full lg:grid-cols-4 lg:w-auto lg:mx-5 xl:grid-cols-4 xl:w-[1200px] lg:mt-36 xl:mt-36 ">
          <div className="flex flex-col  xl:p-6 px-3 py-3">
            <p>Resort</p>
            <select
              value={resortIdValue}
              onChange={(e) => handleChangeResortId(e.target.value)}
              className="py-3 w-full outline-none border-0 border-transparent focus:ring-0 rounded-b-lg"
            >
              <option value="">Any</option>
              {listResort?.content.map((item: any, index: number) => (
                <option key={item.id} value={item.id}>
                  {item.resortName}
                </option>
              ))}
            </select>
          </div>

          <div onClick={handleVisibleCalendar} className="flex flex-col gap-2 p-6">
            <p>Check-in / Check-out</p>
            <div className="flex w-full flex-row items-center justify-between py-1">
              <div className="flex flex-row  items-center">
                <AiFillCalendar size={20} />
                <div>
                  {JSON.stringify(dateRangeNew) !== JSON.stringify(initialDateRange) ? (
                    <Fragment>
                      {format(new Date(dateRangeNew?.startDate), 'EEE, dd MMM')} -{' '}
                      {format(new Date(dateRangeNew?.endDate), 'EEE, dd MMM')}
                    </Fragment>
                  ) : (
                    <Fragment>
                      <div className="w-[300px]">Select check in - Select check out</div>
                    </Fragment>
                  )}
                </div>
              </div>

              <AiFillCaretDown size={20} />
            </div>
          </div>

          <div onClick={handleVisibleGuest} className="flex flex-col  xl:p-6 px-3 py-3">
            <p>Guests</p>
            <div className="py-3 flex flex-row items-center justify-between">
              <div className="">{adultsGuest} guests</div>
              <AiFillCaretDown size={20} />
            </div>
          </div>

          <div
            onClick={() => {
              handleSearchApartment();
              setVisibleCalendar(false);
              setVisibleGuest(false);
            }}
            className="bg-common md:rounded-r-3xl md:rounded-l-none rounded-b-3xl py-5 flex flex-col justify-center items-center text-white hover:cursor-pointer hover:bg-sky-500"
          >
            <BiSearch size={18} color="white" />
            <button>Search now</button>
          </div>
        </div>
      </div>
      {visibleCalendar ? (
        <CalendarAparment
          value={dateRangeNew}
          className="w-full grid grid-cols-2 absolute  top-[300px] border border-gray-500 md:w-full  lg:w-[700px] lg:top-[350px] lg:left-72 lg:rounded-lg lg:z-50 xl:w-[700px] xl:absolute xl:top-[370px]  xl:rounded-md xl:left-80 xl:z-50"
          onChange={(value: any) => setDateRangeNew(value.selection)}
          minDate={new Date()}
        />
      ) : (
        ''
      )}

      {visibleGuest ? (
        <div className="w-[300px] flex flex-col  absolute top-[400px] mx-2 z-30 p-5 rounded-md bg-white border border-gray-500 xl:w-[300px] xl:left-[48rem] xl:top-[370px] lg:top-[350px] lg:left-[40rem]">
          <div className="flex flex-row items-center justify-between py-3">
            <div className="flex flex-col">
              <div className="font-bold">Guests</div>
            </div>
            <div className="flex flex-row gap-3">
              <button onClick={() => handleDescreaseAdultGuest(adultsGuest)} type="button">
                <GrSubtractCircle size={20} />
              </button>
              <div>{adultsGuest}</div>
              <button onClick={() => handleInscreaseAdultGuest(adultsGuest)} type="button">
                <AiOutlinePlusCircle size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default SearchBarResort;
