import React from "react";
import { Grid, Typography } from "@mui/material";
import sampleData from "../assets/json/DashboardData";
import eventData from "../assets/json/EventData"; 
import DashboardCard from "../ui/DashboardCard";

const DashboardData = () => {
  return (
    <>
      <Grid container spacing={2} marginBottom={2}>
        {sampleData.map((data) => (
          <Grid item md={2} key={data.id} spacing={2}>
            <DashboardCard data={data} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6"color={'#828282'} fontWeight={900} padding={2}>
        Events
      </Typography>

      <Grid container spacing={2} >
        {eventData.map((event) => (
          <Grid item md={2} key={event.id} spacing={2}>
            <DashboardCard data={event} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DashboardData;
