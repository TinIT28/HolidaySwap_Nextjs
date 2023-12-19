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

export default function TabRightSideBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
        <div className="flex flex-col -ml-[30px]">
          <div className="flex flex-row py-6">
            <BiCalendar size={25} color="#5C98F2" className="mr-[10px]" />
            <div>February 1, 2030</div>
          </div>
          <div className="text-[12px] text-gray-400 ml-[35px]">
            Available: 17 seats
          </div>
          <div className="flex flex-row py-6">
            <BsPeople size={25} color="#5C98F2" className="mr-[10px]" />
            <select className="pr-[100px] py-2" name="" id="">
              <option className="text-gray-500" value="">
                Number Of People
              </option>
              <option className="text-gray-500" value="">
                1
              </option>
              <option className="text-gray-500" value="">
                2
              </option>
              <option className="text-gray-500" value="">
                3
              </option>
              <option className="text-gray-500" value="">
                4
              </option>
            </select>
          </div>
          <div className="flex flex-row items-center py-6">
            <AiFillThunderbolt
              size={25}
              color="#5C98F2"
              className="mr-[10px]"
            />
            <div className="bg-[#5C98F2] w-full h-[50px] text-white font-medium rounded-md flex flex-row justify-center items-center">
              <Link href="./detail-booking">Proceed Booking</Link>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="flex flex-col items-center">
          <div className="w-full ">
            <div className="-ml-[20px] pb-[10px] text-gray-400">Full Name*</div>
            <input
              className="border border-gray-200 py-4  pr-24  pl-1 -ml-[20px]  rounded-sm"
              type="text"
            />
          </div>
          <div className="w-full pt-[20px]">
            <div className="-ml-[20px] pb-[10px] text-gray-400">
              Email Address*
            </div>
            <input
              className="border border-gray-200 py-4  pr-24  pl-1 -ml-[20px]  rounded-sm"
              type="text"
            />
          </div>
          <div className="w-full pt-[20px]">
            <div className="-ml-[20px] pb-[10px] text-gray-400">
              Your Enquiry*
            </div>
            <textarea className="border border-gray-200 py-4  pr-[118px]  pl-1 -ml-[20px]  rounded-sm" />
          </div>
          <div className="flex -ml-[20px]">
            <input type="checkbox" />
            <div className="pt-[20px]">
              * I agree with Terms of Service and Privacy Statement.
            </div>
          </div>
          <button className="w-[314px] h-[56px] bg-[#5C98F2] my-3 text-white font-medium">
            Submit Enquiry
          </button>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
