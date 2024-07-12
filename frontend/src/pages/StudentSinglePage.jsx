import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import UserCard from "../ui/UserCard";
import StyledTable from "../ui/StyledTable";
import { userColumns, userData } from "../assets/json/TableData";
const StudentSinglePage = () => {
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
    id: "STD920282",
    name: "John Doe",
    title: "XI A",
    phone: "+1234567890",
    email: "john.doe@example.com",
  };
  return (
    <>
      <Box padding={"30px"} bgcolor={"#FFFFFF"}>
        <Typography variant="h4" color={"#4A4647"}>
          Student List / John Doe
        </Typography>
      </Box>{" "}
      <Grid container spacing={2} padding={4}>
        <Grid item md={4} spacing={2}>
          <UserCard user={data} />
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
            fontWeight: 600,
          },
          "& .Mui-selected": {
            color: "#0072BC",
          },
        }}
      >
        <Tab label="Counselling Sessions" />
        <Tab label="Reports" />
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
        {selectedTab === 1 && <Typography>Not Found</Typography>}
        {selectedTab === 2 && <Typography>Not Found</Typography>}
      </Box>
    </>
  );
};

export default StudentSinglePage;
