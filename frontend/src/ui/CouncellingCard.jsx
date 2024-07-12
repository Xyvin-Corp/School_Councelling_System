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
          <Typography variant="h8">Counselling Type</Typography>
          <Typography variant="h8">Experience level</Typography>
          <Typography variant="h8">No: of Sessions</Typography>{" "}
        </Stack>
      </Grid>
      <Grid item md={6} justifyContent={"center"} alignItems={"center"}>
        <Stack spacing={2}>
          {" "}
          <span
            style={{
              border: "2px solid #2196f3",
              borderRadius: "20px",
              padding: "2px 8px",
              display: "inline-block",
              fontSize: "14px",
            }}
          >
            Behavioral Counselling
          </span>
          <Typography variant="h8">Intermediate</Typography>
          <Typography variant="h8">5</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
