
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import UserCard from '../../../ui/UserCard'
import DescriptionCard from '../../../ui/DescriptionCard'
import imag from "../../../assets/images/staff.png";

import StyledTable from '../../../ui/StyledTable';

const data = {
    name: "Event name",
    title: "Offline",
    phone: "9865432123",
    email: "Prabfitz@gmail.com",
    img: imag,
  };
export default function 
() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
      };
      
  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    console.log("Selected items:", newSelectedIds);
  };

  const handleView = (id) => {
    console.log("View item:", id);
  };
  return (
    <>
     <Box padding={"30px"} bgcolor={"#FFFFFF"}>
        <Typography variant="h4" color={"#4A4647"}>
          Events / Event Name 
        </Typography>
      </Box>   
      <Grid container spacing={4} padding={4} >
        <Grid item md={4} spacing={2}>
          <UserCard user={data} />
        </Grid>
        <Grid item md={4} spacing={2}>
        <UserCard user={data} />
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
          paddingTop: "34px",
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
        <Tab label="Attendees" />
        
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
        
      </Box>
    </>
  )
}
