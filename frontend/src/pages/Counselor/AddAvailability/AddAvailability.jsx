import { Box, Typography } from "@mui/material";
import React from "react";

const AddAvailability = () => {
  return (
    <>
      <Box padding={"30px"} bgcolor={"#FFFFFF"}>
        <Typography variant="h4" color={"#4A4647"}>
          Availability
        </Typography>
      </Box>
      <Box padding="30px" marginBottom={4}>
        <Typography variant="h4" color={"#4A4647"}>
          Weekly hours
        </Typography>{" "}
      </Box>
    </>
  );
};

export default AddAvailability;
