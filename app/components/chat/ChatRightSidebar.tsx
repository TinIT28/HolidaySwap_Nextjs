"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BsMoonStarsFill } from "react-icons/bs";
import ChatDatePicker from "../chat/ChatDatePicker";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="-mt-[48px] bg-gray-200 h-[668px]">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Your Trip" {...a11yProps(0)} />
          <Tab label="Hung Trip" {...a11yProps(1)} />
          <Tab label="Contract" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div>
          <img
            className="w-[300px] h-[180px]"
            src="./images/resort2.jpg"
            alt=""
          />
        </div>

        <div className="flex flex-row items-center justify-between py-3">
          <div className="text-[20px]">Thức House</div>

          <div className="flex flex-row items-center">
            <BsMoonStarsFill size={25} />
            <div className="text-gray-500 text-[15px]">9h Night</div>
          </div>
        </div>
        <div className="-mt-[18px] text-[13px] text-gray-500 font-bold ml-2">
          Ho Chi Minh city
        </div>
        <div className="mt-6">
          <div>Số Lượng người ở </div>
          <input
            type="text"
            className="border border-gray-400 px-2 py-2 w-full rounded-md"
          />
        </div>
        <div className="flex flex-row w-[300px] gap-2">
          <ChatDatePicker />
          <ChatDatePicker />
        </div>
        <div className="w-full h-[1px] bg-slate-400 mt-8"></div>
        <div className="flex flex-row items-center justify-between mt-2 ">
          <div>Total</div>
          <div>2000 Point</div>
        </div>
        <button className="bg-[#5C98F2] px-24 py-3 rounded-lg text-white mt-4">
          Chấp Thuận
        </button>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div>
          <img
            className="w-[300px] h-[180px]"
            src="./images/resort1.jpg"
            alt=""
          />
        </div>

        <div className="flex flex-row items-center justify-between py-3">
          <div className="text-[20px]">Thức House</div>

          <div className="flex flex-row items-center">
            <BsMoonStarsFill size={25} />
            <div className="text-gray-500 text-[15px]">9h Night</div>
          </div>
        </div>
        <div className="-mt-[18px] text-[13px] text-gray-500 font-bold ml-2">
          Ho Chi Minh city
        </div>
        <div className="mt-6">
          <div>Số Lượng người ở </div>
          <input
            type="text"
            className="border border-gray-400 px-2 py-2 w-full rounded-md"
          />
        </div>
        <div className="flex flex-row w-[300px] gap-2">
          <ChatDatePicker />
          <ChatDatePicker />
        </div>
        <div className="w-full h-[1px] bg-slate-400 mt-8"></div>
        <div className="flex flex-row items-center justify-between mt-2 ">
          <div>Total</div>
          <div>2000 Point</div>
        </div>
        <button className="bg-[#5C98F2] px-24 py-3 rounded-lg text-white mt-4 hover:bg-blue-600">
          Chấp Thuận
        </button>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="w-[300px] h-[594px] overflow-y-auto max-h-[100vh] py-2">
          <div className="flex flex-row justify-center">
            <div className="text-[25px]  font-semibold text-center">
              Exchange Apartment Contract
            </div>
          </div>
          <div className="py-2">
            <div className="text-[20px] font-semibold py-2">Party A</div>
            <div className="flex flex-col">
              <div>
                <div>
                  <div className="text-[15px]">
                    <span className="font-semibold">Represented by: </span>
                    <span>Bui Tri Thuc</span>
                  </div>

                  <div className="mt-[5px] text-[15px]">
                    <span className="font-semibold">Date of Birth: </span>
                    <span>10th August, 2001</span>
                  </div>
                  <div className="mt-[5px] text-[15px]">
                    <span className="font-semibold">Phone Number: </span>
                    <span>0856597778</span>
                  </div>
                  <div className="mt-[5px] text-[15px]">
                    <span className="font-semibold">Email: </span>
                    <span>buitrithuc1008@gmail.com</span>
                  </div>
                  <div className="mt-[5px] text-[15px]">
                    <span className="font-semibold">Address: </span>
                    <span>
                      64/33 Hang Tre street, 9 district Ho Chi Minh city
                    </span>
                  </div>
                </div>

                <div className="text-[20px] font-semibold py-2">
                  Apartment Infomation
                </div>
                <div>
                  <span className="font-semibold">ResortName: </span>
                  <span>Amanoi Resort</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold">Apartment Name: </span>
                  <span>801</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold"> Adress: </span>
                  <span>Nhon Ly, Ninh Hai, Ninh Thuan.</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold"> Acreage: </span>
                  <span>100m2</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold"> Bedrooms: </span>
                  <span>3</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold"> Bathrooms: </span>
                  <span>4</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold"> Kitchen: </span>
                  <span>2</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold"> Interior amenities: </span>
                  <span>
                    Fully furnished including refrigerator, air conditioner,
                    heater, night light...
                  </span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold"> View: </span>
                  <span>sea view</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold">Wi-Fi and Cable TV: </span>
                  <span>yes</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold">Price: </span>
                  <span>None</span>
                </div>
                <div className="text-[20px] font-semibold py-2">Rules</div>
                <ul>
                  <li>- Smoking not allowed</li>
                  <li>- Pets not allowed</li>
                  <li>- Swimming pool closed from 8.00pm - 6.00am</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-2">
            <div className="text-[20px] font-semibold py-2">Party B</div>
            <div className="flex flex-col">
              <div>
                <div>
                  <div className="text-[15px]">
                    <span className="font-semibold">Represented by: </span>
                    <span>Nguyen Trong Tin</span>
                  </div>

                  <div className="mt-[5px] text-[15px]">
                    <span className="font-semibold">Date of Birth: </span>
                    <span>14th May, 2001</span>
                  </div>
                  <div className="mt-[5px] text-[15px]">
                    <span className="font-semibold">Phone Number: </span>
                    <span>0965487776</span>
                  </div>
                  <div className="mt-[5px] text-[15px]">
                    <span className="font-semibold">Email: </span>
                    <span>trongtin@gmail.com</span>
                  </div>
                  <div className="mt-[5px] text-[15px]">
                    <span className="font-semibold">Address: </span>
                    <span>
                      321/1 Nguyen Van Tang street, 9 district Ho Chi Minh city
                    </span>
                  </div>
                </div>

                <div className="text-[20px] font-semibold py-2">
                  Apartment Infomation
                </div>
                <div>
                  <span className="font-semibold">ResortName: </span>
                  <span>Six Senses Ninh Van Bay</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold">Apartment Name: </span>
                  <span>31</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold"> Adress: </span>
                  <span> Long Beach, Cam Ranh, Khanh Hoa.</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold"> Acreage: </span>
                  <span>82m2</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold"> Bedrooms: </span>
                  <span>3</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold"> Bathrooms: </span>
                  <span>4</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold"> Kitchen: </span>
                  <span>2</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold"> Interior amenities: </span>
                  <span>
                    Fully furnished including refrigerator, air conditioner,
                    heater, night light...
                  </span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold"> View: </span>
                  <span>moutaint view</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold">Wi-Fi and Cable TV: </span>
                  <span>yes</span>
                </div>
                <div className="mt-[5px] text-[15px]">
                  <span className="font-semibold">Price: </span>
                  <span>None</span>
                </div>
                <div className="text-[20px] font-semibold py-2">Rules</div>
                <ul>
                  <li>- Smoking not allowed</li>
                  <li>- Pets not allowed</li>
                  <li>- Swimming pool closed from 8.00pm - 6.00am</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <input type="checkbox" />
              <span className="font-bold ml-2">
                I agree to all of the above agreements
              </span>
            </div>
            <button className="bg-[#5C98F2] px-4 py-3 rounded-md text-white hover:bg-blue-500">
              Accept
            </button>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
