import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import UserCard from "../ui/UserCard";
import CaseCard from "../ui/CaseCard";

const SessionSinglePage = () => {
  const data = {
    id: 'STD920282',
    name: "John Doe",
    title: "XI A",
    phone: "+1234567890",
    email: "john.doe@example.com",
  };

  const counselorData = {
    name: "Prabodhan Fitzgerald",
    title: "Designation",
    phone: "9865432123",
    email: "Prabfitz@gmail.com",
  };

  return (
    <>
      <Box padding={"30px"} bgcolor={"#FFFFFF"}>
        <Typography variant="h4" color={"#4A4647"}>
          Cases / Case ID / Session No
        </Typography>
      </Box>
      <Grid container spacing={2} padding={4}>
        <Grid item md={4}>
          <Stack marginBottom={4}> <Box marginBottom={4}>
            <Typography variant="h8" fontWeight="900" color={"#828282"}>
              Student
            </Typography></Box>
            <UserCard user={data} />{" "}
            <Box marginBottom={4} marginTop={4}>
            <Typography variant="h8" fontWeight="900" color={"#828282"}>
              Counselor
            </Typography></Box>
            <UserCard user={counselorData} />
          </Stack>
        </Grid>
        <Grid item md={8}>
          <CaseCard />
        </Grid>
        <Grid item md={4}>
         
        </Grid>
      </Grid>
    </>
  );
};

export default SessionSinglePage;
