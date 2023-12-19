// 'use client';

// import { Select } from 'antd';
// import React, { Fragment, useEffect, useState } from 'react';
// import { AiOutlinePlusCircle } from 'react-icons/ai';

// interface InputInRoomAmenitiesProps {
//   inRoomAmenities?: any;
//   handleAmenitiesChange: (value: any[]) => void;
// }

// interface AmenityTypeProps {
//   inRoomAmenities?: any;
//   onAmenityValueChange: (value: string) => void;
// }

// const InputInRoomAmenities: React.FC<InputInRoomAmenitiesProps> = ({
//   inRoomAmenities,
//   handleAmenitiesChange,
// }) => {
//   const [quantityAmenitiesType, setQuantityAmenitiesType] = useState(1);

//   const [aminetyValue, setAminetyValue] = useState<string[]>([]);
//   const handleAmenityValueChange = (value: string) => {
//     // Update the array of property values when a value is selected
//     if (!aminetyValue.includes(value)) {
//       // Add the value to aminetyValue
//       setAminetyValue((prevValues) => [...prevValues, value]);
//     }
//   };

//   useEffect(() => {
//     handleAmenitiesChange(aminetyValue);
//   }, [aminetyValue]);
//   const [ameniteisTypes, setameniteisTypes] = useState([
//     <AmeniteisType
//       key={0}
//       inRoomAmenities={inRoomAmenities}
//       onAmenityValueChange={handleAmenityValueChange}
//     />,
//   ]);

//   const handleAddPropertyType = () => {
//     setQuantityAmenitiesType((value) => value + 1);
//     setameniteisTypes((prevPropertyTypes) => [
//       ...prevPropertyTypes,
//       <AmeniteisType
//         key={quantityAmenitiesType}
//         inRoomAmenities={inRoomAmenities}
//         onAmenityValueChange={handleAmenityValueChange}
//       />,
//     ]);
//   };

//   return (
//     <Fragment>
//       <div className="w-full mt-16 text-gray-900">Amenity Types*</div>
//       <div className="flex flex-col ">
//         {ameniteisTypes.map((propertyType, index) => (
//           <Fragment key={index}>{propertyType}</Fragment>
//         ))}
//       </div>

//       <button className="mt-2" onClick={handleAddPropertyType}>
//         <AiOutlinePlusCircle size={30} />
//       </button>
//     </Fragment>
//   );
// };

// const AmeniteisType: React.FC<AmenityTypeProps> = ({ inRoomAmenities, onAmenityValueChange }) => {
//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     // Check if event.target is defined and event.target.value is not null or undefined
//     const selectedValue = event.target?.value;
//     console.log("Check selected", selectedValue)

//     if (selectedValue !== undefined && selectedValue !== null) {
//       onAmenityValueChange(selectedValue);
//     }
//   };
//   return (
//     <Fragment>
//       <div className="flex flex-row">
//         <Select
//           id="inRoomAmenities"
//           className="border-2 h-[44px] mt-2 rounded-md border-gray-400 w-full "
//           onChange={handleSelectChange}
//           showSearch
//           optionFilterProp="children"
//           filterOption={(input: string, option?: { children: string }) =>
//             (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
//           }
//         >
//           <option value="">-</option>
//           {inRoomAmenities?.content.map((item: any) => (
//             <Select.Option key={item.id} value={item.id}>
//               {item.inRoomAmenityName}
//             </Select.Option>
//           ))}
//         </Select>
//       </div>
//     </Fragment>
//   );
// };

// export default InputInRoomAmenities;

'use client';

import { Checkbox, Label } from 'flowbite-react';
import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';

interface InputInRoomAmenitiesProps {
  inRoomAmenities?: any;
  handleAmenitiesChange: (value: any[]) => void;
}

const InputInRoomAmenities: React.FC<InputInRoomAmenitiesProps> = ({
  inRoomAmenities,
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

  return (
    <div className="flex flex-row gap-2">
      <div>Amenities</div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 p-3 border border-slate-300 rounded-md">
        {inRoomAmenities?.content.map((item: any, index: number) => (
          <div key={item.id} className="flex flex-row items-center gap-2">
            <Checkbox
              className="w-[30px] h-[30px]"
              onChange={handleChangeAmenities}
              id="promotion"
              color={'#5C98F2'}
              value={item.id}
            />
            <Label htmlFor="promotion">{item.inRoomAmenityName}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputInRoomAmenities;
