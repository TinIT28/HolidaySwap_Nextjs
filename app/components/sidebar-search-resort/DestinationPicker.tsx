// pages/index.js
"use client";
import { useState } from "react";

const DestinationPicker = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: "o_check-box-1", checked: false },
    { id: "o_check-box-2", checked: false },
    { id: "o_check-box-3", checked: true },
  ]);

  const handleCheckboxChange = (id: any) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === id) {
        checkbox.checked = !checkbox.checked;
      }
      return checkbox;
    });
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div className="space-y-4 flex flex-col">
      <div>Province</div>
      {checkboxes.map((checkbox) => (
        <label key={checkbox.id} className="inline-flex items-center">
          <input
            id={checkbox.id}
            type="checkbox"
            className="form-checkbox text-red-500 w-4 h-4"
            checked={checkbox.checked}
            onChange={() => handleCheckboxChange(checkbox.id)}
          />
          <span
            className={`ml-2 ${
              checkbox.checked ? "text-blue-500" : "text-gray-700"
            }`}
          >
            {checkbox.id === "o_check-box-1" && "Khánh Hòa"}
            {checkbox.id === "o_check-box-2" && "Lâm Đồng"}
            {checkbox.id === "o_check-box-3" && "Đak Lăk"}
          </span>
        </label>
      ))}
    </div>
  );
};

export default DestinationPicker;
