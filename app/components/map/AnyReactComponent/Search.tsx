'use client';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

interface SearchProps {
  setCheckOutDate: (value: string) => void;
  setCheckInDate: (value: string) => void;
  top: any;
  left: any;
  position: any;
}

export function Search({ setCheckOutDate, setCheckInDate, top, left, position }: SearchProps) {
  const dispatch = useDispatch();
  const params = useSelector((state: any) => state.apartmentForRent.searchParams);
  const [startDate, setStartDate]
    = useState(dayjs(params?.checkIn, 'YYYY-MM-DD').isValid()
      ?dayjs(params?.checkIn, 'YYYY-MM-DD').toDate():new Date());
  const [endDate, setEndDate]
    = useState(dayjs(params?.checkOut, 'YYYY-MM-DD').isValid()
      ?dayjs(params?.checkOut, 'YYYY-MM-DD').toDate():new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  function handleSelect(ranges: any) {
    setStartDate(ranges.selection.startDate);
    setCheckInDate(ranges.selection.startDate.toString().slice(0, 15));
    setEndDate(ranges.selection.endDate);
    setCheckOutDate(ranges.selection.endDate.toString().slice(0, 15));
  }

  return <SearchWrapper position={position} left={left} className={''}>
    <DateRangePicker className='rounded-l-xl' minDate={new Date()} ranges={[selectionRange]} onChange={handleSelect} />
  </SearchWrapper>;
}

export const SearchWrapper = styled.div<{ position: any, left: any, className: any }>`
  left: ${(props: any) => (props.left)};
  width: 30vw;
  background-color: white;
  position: ${(props: any) => (props.position)};
  top: 70px;
  box-shadow: 1px 7px 27px -3px black;
  animation: 0.8s AnimateRight 0s forwards;
  transform: translateX(-30%);
  font-size: 14px;
  border-radius: 1rem;
  z-index: 1;
`;