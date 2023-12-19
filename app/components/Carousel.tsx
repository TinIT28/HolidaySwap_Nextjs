'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { AiFillStar } from 'react-icons/ai';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperButton from './apartment/SwiperButton';
import { differenceInDays } from 'date-fns';
import useNewDateRange from '../hooks/useNewDateRange';
import { useRouter } from 'next/navigation';

interface CarouselProps {
  slices: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slices }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const router = useRouter();

  const calculateNightDifference = (startDate: any, endDate: any) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nightDifference = differenceInDays(end, start);
    return nightDifference;
  };

  const newDateRange = useNewDateRange();

  const handleRedirectApartmentDetail = (url: string) => {
    newDateRange.setNew();
    router.push(url);
  };

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener('resize', updateSlidesPerView);
    updateSlidesPerView();

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  return (
    <div className="flex gap-4 ">
      {' '}
      {/* Center the entire carousel */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ height: 500, width: '100%' }}
      >
        <div>
          <SwiperButton>
            <FaArrowLeft size={30} />
          </SwiperButton>

          {slices?.slice(0, 9).map((s: any, index: any) => (
            <SwiperSlide
              onClick={() =>
                handleRedirectApartmentDetail(
                  `/apartment/${s.availableTime.id}?propertyId=${s.coOwnerId.propertyId}&roomId=${s.coOwnerId.roomId}`
                )
              }
              key={index}
              
            >
              <div
                className="flex flex-col items-center justify-end hover:cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                
              >
                <div className={hoveredIndex === index ? 'opacity-90' : ''}>
                  <img
                    src={s.property.propertyImage[0].link}
                    alt="destination"
                    height={700}
                    width="100%"
                    className="object-cover rounded-xl relative "
                    style={{ height: 500 }}
                  />
                </div>

                <div
                  className={`text-white md:text-3xl md:px-[100px] text-lg px-[80px] flex flex-col items-center font-bold absolute ${
                    hoveredIndex === index
                      ? '-translate-y-14 duration-300'
                      : 'translate-y-0 duration-300'
                  }`}
                >
                  {hoveredIndex === index ? (
                    <>
                      <span>{s.property.propertyName}</span>
                      <div className="text-base font-light text-white flex flex-col justify-center items-center">
                        <span className="flex justify-center md:w-[200px] flex-col lg:w-[250px] xl:w-[300px]">
                          {calculateNightDifference(
                            s.availableTime.startTime,
                            s.availableTime.endTime
                          )}{' '}
                          {calculateNightDifference(
                            s.availableTime.startTime,
                            s.availableTime.endTime
                          ) === 1
                            ? 'night'
                            : 'nights'}
                          <span className="flex justify-between">
                            <div className="flex">
                              <AiFillStar size={20} color="yellow" />
                              <AiFillStar size={20} color="yellow" />
                              <AiFillStar size={20} color="yellow" />
                              <AiFillStar size={20} color="yellow" />
                            </div>

                            <div className="text-white text-base">
                              {s.availableTime.pricePerNight} point
                            </div>
                          </span>
                        </span>
                      </div>
                    </>
                  ) : (
                    <span className="pb-8 w-[200px] text-center">{s.property.propertyName}</span>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
