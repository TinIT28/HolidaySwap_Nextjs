'use client';

import React, { Fragment, useEffect, useRef, useState } from 'react';
import CardListResort from '../components/listResort/CardListResort';
import axios from 'axios';
import { Pagination } from 'flowbite-react';
import { format } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface ListResortProps {
  listApartment: any;
  resortId: any;
  dateRange: any;
  numberOfGuest: any;
  currentUser: any;
}

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 100000000),
  key: 'selection',
};

const ListResort: React.FC<ListResortProps> = ({
  listApartment,
  resortId,
  dateRange,
  numberOfGuest,
  currentUser,
}) => {
  const [page, setPage] = useState<number>(1);
  const [listResort, setListResort] = useState<any>();
  const [resortIdValue, setResortIdValue] = useState<any>();
  const [numberOfGuestValue, setNumberOfGuestValue] = useState<number>(0);
  const [initialDate, setInitialDate] = useState(initialDateRange);
  const [dateRangeNew, setDateRangeNew] = useState<any>(initialDateRange);
  const [totalPages, setTotalPages] = useState<any>();
  const { data: session } = useSession();

  const searchParams = useSearchParams();
  const resortIdParams = searchParams?.get('resortId');
  const dateRangeParamsSearch = searchParams?.get('dateRange');
  let dateRangeParams: any;
  const numberOfGuestParams = searchParams?.get('numberOfGuest');
  const router = useRouter();

  // useEffect(() => {
  //   setDateRangeNew(dateRange);

  //   if (dateRangeParamsSearch) {
  //     dateRangeParams = JSON.parse(searchParams?.get('dateRange') ?? '');
  //   }
  // }, [dateRange, dateRangeParamsSearch]);

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

    if (numberOfGuestParams) {
      setNumberOfGuestValue(Number(numberOfGuestParams));
    }
  }, [resortIdParams, dateRangeParamsSearch, numberOfGuestParams]);

  // useEffect(() => {
  //   const getList = async () => {
  //     if (resortIdValue && numberOfGuestValue) {
  // let apiUrl = `https://holiday-swap.click/api/v1/apartment-for-rent?min=0&max=1000000&pageNo=${
  //   page - 1
  // }&guest=${numberOfGuestValue}&resortId=${resortIdValue}&pageSize=12&sortBy=id`;

  //       if (
  //         dateRangeNew &&
  //         dateRangeNew.endDate.toDateString() !== initialDate.endDate.toDateString()
  //       ) {
  //         apiUrl += `&checkIn=${format(dateRangeNew.startDate, 'yyyy-MM-dd')}&checkOut=${format(
  //           dateRangeNew.endDate,
  //           'yyyy-MM-dd'
  //         )}`;
  //       }

  //       const config = { headers: { Authorization: `Bearer ${session?.user.access_token}` } };
  //       let list;

  //       if (currentUser) {
  //         list = await axios.get(apiUrl, config);
  //       } else {
  //         list = await axios.get(apiUrl);
  //       }
  //       setListResort(list.data);
  //       setTotalPages(list.data?.totalPages);
  //     } else {
  //       let apiUrl = `https://holiday-swap.click/api/v1/apartment-for-rent?min=0&max=1000000&pageNo=${
  //         page - 1
  //       }&pageSize=12&sortBy=id`;

  //       if (dateRangeNew && dateRangeNew.endDate !== initialDate.endDate) {
  // apiUrl += `&checkIn=${format(
  //   new Date(dateRangeNew.startDate),
  //   'yyyy-MM-dd'
  // )}&checkOut=${format(new Date(dateRangeNew.endDate), 'yyyy-MM-dd')}`;
  //       }

  //       const config = { headers: { Authorization: `Bearer ${session?.user.access_token}` } };
  //       let list;

  //       if (currentUser) {
  //         list = await axios.get(apiUrl, config);
  //       } else {
  //         list = await axios.get(apiUrl);
  //       }
  //       setListResort(list.data);
  //       setTotalPages(list.data?.totalPages);
  //     }
  //   };

  //   getList();
  // }, [
  //   page,
  //   numberOfGuest,
  //   resortId,
  //   dateRangeNew,
  //   initialDate,
  //   numberOfGuestValue,
  //   resortIdValue,
  //   session?.user.access_token,
  // ]);

  const config = { headers: { Authorization: `Bearer ${session?.user.access_token}` } };

  useEffect(() => {
    if (
      numberOfGuestValue === 0 &&
      JSON.stringify(dateRangeNew) === JSON.stringify(initialDateRange) &&
      resortIdValue === undefined
    ) {
      setListResort(listApartment);
      setTotalPages(listApartment?.totalPages);
    }
  }, [numberOfGuestValue, dateRangeNew, resortIdValue, listApartment]);

  useEffect(() => {
    const getListResort = async () => {
      let url = `https://holiday-swap.click/api/v1/apartment-for-rent?pageNo=${
        page - 1
      }&pageSize=12&sortBy=startTime&sortDirection=asc`;

      if (
        numberOfGuestValue === 0 &&
        JSON.stringify(dateRangeNew) === JSON.stringify(initialDateRange) &&
        resortIdValue === undefined
      ) {
        let list;
        if (currentUser) {
          list = await axios.get(url, config);
        } else {
          list = await axios.get(url);
        }

        setListResort(list?.data);
        setTotalPages(list?.data?.totalPages);
      } else {
        if (resortIdValue) {
          url += `&resortId=${resortIdValue}`;
        }

        if (
          dateRangeNew !== undefined &&
          JSON.stringify(dateRangeNew) !== JSON.stringify(initialDateRange)
        ) {
          if (dateRangeNew) {
            url += `&checkIn=${format(
              new Date(dateRangeNew?.startDate),
              'yyyy-MM-dd'
            )}&checkOut=${format(new Date(dateRangeNew?.endDate), 'yyyy-MM-dd')}`;
          }
        } else if (
          dateRangeNew !== undefined &&
          JSON.stringify(dateRangeNew) === dateRangeParamsSearch
        ) {
          const newDateRange = JSON.parse(dateRangeParamsSearch);
          url += `&checkIn=${format(
            new Date(newDateRange.startDate),
            'yyyy-MM-dd'
          )}&checkOut=${format(new Date(newDateRange.endDate), 'yyyy-MM-dd')}`;
        } else {
          url += ``;
        }

        if (numberOfGuestValue > 0) {
          url += `&guest=${numberOfGuestValue}`;
        }

        let list;
        if (currentUser) {
          list = await axios.get(url, config);
        } else {
          list = await axios.get(url);
        }

        setListResort(list?.data);
        setTotalPages(list?.data?.totalPages);
      }
    };

    getListResort();
  }, [page, currentUser, dateRangeNew, numberOfGuestValue, resortIdValue]);

  return (
    <Fragment>
      <div className="bg-white px-[20px] flex flex-col items-center justify-center xl:px-[50px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-5 py-[30px] w-full">
          {listResort && listResort.content.length > 0 ? (
            listResort?.content?.map((item: any, index: number) => (
              <CardListResort key={index} data={item} />
            ))
          ) : (
            <div className="w-full md:col-span-2 lg:col-span-3 xl:col-span-4 col-span-1 h-[500px] text-3xl font-bold justify-center">
              Not have apartment. You can search more apartment
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center mb-7">
        {listResort && listResort.totalElements > listResort.pageable.pageSize ? (
          <Pagination
            currentPage={page}
            onPageChange={(page: number) => {
              setPage(page);
            }}
            showIcons
            totalPages={totalPages}
          />
        ) : (
          ''
        )}
      </div>
    </Fragment>
  );
};

export default ListResort;
