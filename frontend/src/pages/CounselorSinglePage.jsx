import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import UserCard from "../ui/UserCard";
import StyledTable from "../ui/StyledTable";
import { userColumns, userData } from "../assets/json/TableData";

import imag from "../assets/images/staff.png";
import CounsellingTypeCard from "../ui/CouncellingCard";
import DescriptionCard from "../ui/DescriptionCard";
import Review from "../components/Review";
const CounselorSinglePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);

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
  const data = {
    name: "Prabodhan Fitzgerald",
    title: "Designation",
    phone: "9865432123",
    email: "Prabfitz@gmail.com",
    img: imag,
  };
  return (
    <>
      <Box padding={"30px"} bgcolor={"#FFFFFF"}>
        <Typography variant="h4" color={"#4A4647"}>
          Counselor / Prabodhan Fitzgerald
        </Typography>
      </Box>{" "}
      <Grid container spacing={4} padding={4} >
        <Grid item md={4} spacing={2}>
          <UserCard user={data} />
        </Grid>
        <Grid item md={4} spacing={2}>
          <CounsellingTypeCard/>
        </Grid>
        <Grid item md={4} spacing={2}>
          <DescriptionCard/>
        </Grid>
      </Grid>
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
            fontSize:'16px', 
            fontWeight: 600,
          },
          "& .Mui-selected": {
            color: "#0072BC",
          },
        }}
      >
        <Tab label="Counselling Sessions" />
        <Tab label="Reports" />
        <Tab label="Reviews" />
      </Tabs>
      <Box padding="30px" marginBottom={4}>
        {selectedTab === 0 && (
          <StyledTable
            columns={userColumns}
            data={userData}
            onSelectionChange={handleSelectionChange}
            onView={handleView}
          />
        )}
        {selectedTab === 1 && (
          <Typography>
            {" "}
            <StyledTable
              columns={userColumns}
              data={userData}
              onSelectionChange={handleSelectionChange}
              onView={handleView}
            />
          </Typography>
        )}
        {selectedTab === 2 && (
          <Typography>
            <Review />
          </Typography>
        )}
      </Box>
    </>
  );
};

export default CounselorSinglePage;
