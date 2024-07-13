import React from "react";
import { Typography, Stack, Box, Grid } from "@mui/material";

export default function CounsellingTypeCard() {
  return (
    <Grid
      container
      spacing={2}
      bgcolor={"white"}
      borderRadius={"12px"}
      padding={"16px"}
      height={"160px"}
    >
      <Grid item md={6} justifyContent={"center"} alignItems={"center"}>
        <Stack spacing={2}>
          {" "}
          <Typography variant="h6" color={"#2C2829"}>
            Counselling Type
          </Typography>
          <Typography variant="h6" color={"#4A4647"}>
            Experience level
          </Typography>
          <Typography variant="h6" color={"#4A4647"}>
            No: of Sessions
          </Typography>{" "}
        </Stack>
      </Grid>
      <Grid item md={6} justifyContent={"center"} alignItems={"center"}>
        <Stack spacing={2}>
          {" "}
          <span
            style={{
              border: "2px solid #2196f3",
              borderRadius: "20px",
              padding: "2px ",
              fontSize: "13px",
              color: "#0288D1",
            }}
          >
            Behavioral Counselling
          </span>
          <Typography variant="h5" fontWeight={400} color={'#004797'}>Intermediate</Typography>
          <Typography variant="h5" color={'#686465'}>5</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
