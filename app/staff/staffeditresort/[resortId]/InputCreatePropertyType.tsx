'use client';

import { Checkbox, Label } from 'flowbite-react';
import React, { ChangeEvent, useEffect, useState } from 'react';

interface InputCreatePropertyTypeProps {
  propertyTypesResort?: any;
  handlePropertiesChange: (value: any[]) => void;
  propertyTypesArray: any;
}

const InputCreatePropertyType: React.FC<InputCreatePropertyTypeProps> = ({
  propertyTypesResort,
  handlePropertiesChange,
  propertyTypesArray,
}) => {
  const [propertyTypeValue, setPropertyTypeValue] = useState<any>([]);
  const [propertyTypesArrayValue, setPropertyTypesArrayValue] = useState<any[]>(propertyTypesArray);

  useEffect(() => {
    setPropertyTypeValue(propertyTypesArray.map((item: any) => item.id.toString()));
  }, []);

  const handleChangeProperties = (e: ChangeEvent<HTMLInputElement>, itemValue: any) => {
    if (e.target.checked) {
      setPropertyTypeValue((prev: any) => [...prev, e.target.value]);
      setPropertyTypesArrayValue((prev: any) => [...prev, itemValue]);
    } else {
      setPropertyTypeValue((prev: any) => prev.filter((item: any) => item !== e.target.value));
      setPropertyTypesArrayValue((prev: any) =>
        prev.filter((item: any) => item.id !== itemValue.id)
      );
    }
  };

  useEffect(() => {
    handlePropertiesChange(propertyTypeValue);
  }, [propertyTypeValue]);

  return (
    <div className="flex flex-row gap-5">
      <div>Property type</div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 p-3 border border-slate-300 rounded-md">
        {propertyTypesResort.map((item: any, index: number) => (
          <div key={item.id} className="flex flex-row items-center gap-2">
            <Checkbox
              className="w-[30px] h-[30px]"
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeProperties(e, item)}
              id="promotion"
              color={'#5C98F2'}
              value={item.id}
              checked={propertyTypesArrayValue.some((element: any) => element.id === item.id)}
            />
            <Label htmlFor="promotion">{item.propertyTypeName}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputCreatePropertyType;
