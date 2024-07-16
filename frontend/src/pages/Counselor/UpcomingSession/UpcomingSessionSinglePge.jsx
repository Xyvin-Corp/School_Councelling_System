import { Box, Typography } from "@mui/material";
import React from "react";
import AddSession from "../../../components/AddSession";

const UpcomingSessionSinglePge = () => {
  return (
    <>
      {" "}
      <Box padding={"30px"} bgcolor={"#FFFFFF"}>
        <Typography variant="h4" color={"#4A4647"}>
          Upcoming Sessions/ Reschedule ‘Personal Story’
        </Typography>
      </Box>
      <Box padding="30px" marginBottom={4}>
      <AddSession/>
      </Box>
    </>
  );
};

export default UpcomingSessionSinglePge;
