'use client';

import { Checkbox, Label } from 'flowbite-react';
import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';

interface InputAmenitiesTypeProps {
  amenities?: any;
  handleAmenitiesChange: (value: any[]) => void;
}

const InputAmenitiesType: React.FC<InputAmenitiesTypeProps> = ({
  amenities,
  handleAmenitiesChange,
}) => {
  const [amenitiesValue, setAmenitiesValue] = useState<any>([]);
  const handleChangeAmenities = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setAmenitiesValue((prev: any) => [...prev, e.target.value]);
    } else {
      setAmenitiesValue((prev: any) => prev.filter((item: any) => item !== e.target.value));
    }
  };

  useEffect(() => {
    handleAmenitiesChange(amenitiesValue);
  }, [amenitiesValue]);

  console.log('Check amenities', amenitiesValue);

  return (
    <div className="flex flex-row gap-2">
      <div>
        Amenities<span className="text-red-500">*</span>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 p-3 border border-slate-300 rounded-md">
        {amenities.map((item: any, index: number) => (
          <div key={item.id} className="flex flex-row items-center gap-2">
            <Checkbox
              className="w-[30px] h-[30px]"
              onChange={handleChangeAmenities}
              id="promotion"
              color={'#5C98F2'}
              value={item.id}
            />
            <Label htmlFor="promotion">{item.resortAmenityName}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputAmenitiesType;
