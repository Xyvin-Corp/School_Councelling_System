import React from "react";
import { Stack, Typography, Grid, Divider, Box } from "@mui/material";

const CaseCard = () => {
  return (
    <Stack bgcolor={"white"}   borderRadius={"16px"}>
      <Stack direction="row" justifyContent="space-between" padding={2}>
        <Stack justifyContent="space-between">
          <Typography>Case ID</Typography>
          <Typography>CASE98764</Typography>
        </Stack>
        <Stack justifyContent="space-between">
          <Typography>Session No</Typography>
          <Typography>SESSION123</Typography>
        </Stack>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" padding={2}>
        <Typography>Grade</Typography>
        <Typography>A+</Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        bgcolor={"#F0F8FF"}
        padding={2}
      >
        <Typography>Appointment Date</Typography>
        <Typography>Nov 16, 2024 7:09:36 AM</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" padding={2}>
        <Typography>Type of counselling</Typography>
        <Typography>Behaivoral</Typography>
      </Stack>{" "}
      <Stack
        direction="row"
        justifyContent={"space-between"}
        bgcolor={"#F0F8FF"}
        padding={2}
      >
        <Typography sx={{ width: "50%" }}>Reason for Counselling/Referral</Typography>
        <Typography sx={{ width: "50%" }}>
          Lorem ipsum dolor sit amet consectetur. Ut eu sapien nullam nulla
          turpis laoreet suspendisse eu. Tincidunt quisque sed aliquam risus
          nunc odio laoreet.
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" padding={2}>
        <Typography>Referred By</Typography>
        <Typography>Dr Sunil Robert</Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        bgcolor={"#F0F8FF"}
        padding={2}
      >
        <Typography sx={{ width: "50%" }}>Referee’s Remark</Typography>
        <Typography sx={{ width: "50%" }}>
          Lorem ipsum dolor sit amet consectetur. Ut eu sapien nullam nulla
          turpis laoreet suspendisse eu. Tincidunt quisque sed aliquam risus
          nunc odio laoreet.
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" padding={2}>
        <Typography>Session status</Typography>
        <Typography>Ongoing</Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        bgcolor={"#F0F8FF"}
        padding={2}
      >
        <Typography>Date of next session</Typography>
        <Typography>Nov 16, 2024 7:09:36 AM</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" padding={2}>
        <Typography>Relevant Documents</Typography>
        {/* <Typography>Nov 16, 2024 7:09:36 AM</Typography> */}
      </Stack>
    </Stack>
  );
};

export default CaseCard;
