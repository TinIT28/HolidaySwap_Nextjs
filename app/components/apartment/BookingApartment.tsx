"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Input from "../input/Input";
import { BiCalendar } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import Link from "next/link";
import DatePickerDemo from "../sidebar-search-resort/DatePicker";
import DateCheckIn from "./DateCheckIn";
import DateCheckOut from "./DateCheckOut";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BookingApartment() {
  const [value, setValue] = React.useState(0);
  const [Aldulst, setAldulst] = React.useState(0);
  const [Children, setChildren] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleDecrementAldulst = () => {
    if (Aldulst > 0) {
      setAldulst(Aldulst - 1);
    }
  };

  const handleIncrementAldulst = () => {
    setAldulst(Aldulst + 1);
  };
  const handleDecrementChildren = () => {
    if (Children > 0) {
      setChildren(Children - 1);
    }
  };

  const handleIncrementChildren = () => {
    setChildren(Children + 1);
  };

  return (
    <Box className="w-full">
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={<span className="font-sans">Booking Form</span>}
            {...a11yProps(0)}
          />
          <Tab
            label={<span className="font-sans">Enquiry Form</span>}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="bg-gray-200 px-6 rounded-md py-4">
          <div>
            <div className="px-4 py-3">Checkin</div>
            <div>
              <DateCheckIn />
            </div>
          </div>
          <div className="mt-5">
            <div className="px-4 py-3">CheckOut</div>
            <div>
              <DateCheckOut />
            </div>
          </div>
          <div className="my-5">
            <div className="px-4 py-3">Guest</div>
            <div className="bg-gray-200 rounded-lg w-full h-auto px-4">
              <div className="flex flex-row items-center justify-around">
                <div className="py-3">Aldulst</div>
                <div className="flex flex-row  items-center">
                  <button
                    className="text-[25px] text-gray-500"
                    onClick={handleDecrementAldulst}
                  >
                    -
                  </button>
                  <div className="px-4">{Aldulst}</div>
                  <button
                    className="text-[25px] text-gray-500"
                    onClick={handleIncrementAldulst}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-row items-center justify-around">
                <div className="py-3">Children</div>
                <div className="flex flex-row items-center">
                  <button
                    className="text-[25px] text-gray-500  "
                    onClick={handleDecrementChildren}
                  >
                    -
                  </button>
                  <div className="px-4">{Children}</div>
                  <button
                    className="text-[25px] text-gray-500  "
                    onClick={handleIncrementChildren}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <Link
              href="/detail-booking"
              className="w-auto rounded-lg h-auto text-white bg-common px-5 py-3"
            >
              Book Now
            </Link>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="flex flex-col items-center">
          <div className="w-full ">
            <div className=" pb-[10px] text-gray-400">Full Name*</div>
            <input
              className="border border-gray-200 py-4  pr-24  pl-1   rounded-sm"
              type="text"
            />
          </div>
          <div className="w-full pt-[20px]">
            <div className=" pb-[10px] text-gray-400">Email Address*</div>
            <input
              className="border border-gray-200 py-4  pr-24  pl-1   rounded-sm"
              type="text"
            />
          </div>
          <div className="w-full pt-[20px]">
            <div className=" pb-[10px] text-gray-400">Your Enquiry*</div>
            <textarea className="border border-gray-200 py-4  pr-[118px]  pl-1   rounded-sm" />
          </div>
          <div className="flex -ml-[20px]">
            <input type="checkbox" />
            <div className="pt-[20px] w-[300px]">
              * I agree with Terms of Service and Privacy Statement.
            </div>
          </div>
          <div className="flex flex-row w-full justify-center">
            <button className="w-[314px] h-[56px] bg-[#5C98F2] my-3 text-white font-medium">
              Submit Enquiry
            </button>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
