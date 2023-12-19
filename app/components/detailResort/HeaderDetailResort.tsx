"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
    <Box className="w-full mt-[150px] ">
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={<span className="font-sans">Detail</span>}
            {...a11yProps(0)}
          />
          <Tab
            label={<span className="font-sans">Itinerary</span>}
            {...a11yProps(1)}
          />
          <Tab
            label={<span className="font-sans">Map</span>}
            {...a11yProps(2)}
          />
          <Tab
            label={<span className="font-sans">FAQ</span>}
            {...a11yProps(3)}
          />
          <Tab
            label={<span className="font-sans">Reviews</span>}
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
    </Box>
  );
}
