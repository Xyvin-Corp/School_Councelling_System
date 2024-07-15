import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const CounselorEvent = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedRows, setSelectedRows] = useState([]);
    const [filterOpen, setFilterOpen] = useState(false);
  
    const handleOpenFilter = () => {
      setFilterOpen(true);
    };
  
    const handleCloseFilter = () => {
      setFilterOpen(false);
    };
    const handleSelectionChange = (newSelectedIds) => {
      setSelectedRows(newSelectedIds);
      console.log("Selected items:", newSelectedIds);
    };
  
    const handleView = (id) => {
      console.log("View item:", id);
    };
  
    const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
    };
  return (
    <>
      {" "}
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        aria-label="tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#0072BC",
            height: 4,
            borderRadius: "4px",
          },
        }}
        sx={{
          bgcolor: "white",
          paddingTop: "20px",
          "& .MuiTabs-indicator": {
            backgroundColor: "#0072BC",
          },
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: 600,
          },
          "& .Mui-selected": {
            color: "#0072BC",
          },
        }}
      >
        <Tab label="Events" />
        <Tab label="Add Event" />
      </Tabs>
    </>
  );
};

export default CounselorEvent;
