import React, { useState } from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import StyledSelectField from "../ui/StyledSelectField";
import { StyledButton } from "../ui/StyledButton";
import { StyledMultilineTextField } from "../ui/StyledMultilineTextField ";
import { StyledCalender } from "../ui/StyledCalender";
import StyledSwitch from "/src/ui/StyledSwitch.jsx";
import DropZone from "../ui/DropZone";
import StyledInput from "../ui/StyledInput";

export default function AddSession() {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <Box sx={{ padding: 3 }} bgcolor={"white"} borderRadius={"4px"}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Type of Counselling
          </Typography>
          <StyledSelectField label="Grade" />
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Select a Date & Time
          </Typography>
          <StyledCalender label="Select Date from Calender" />
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Select Location
          </Typography>
          <StyledSelectField label="Grade" />
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Select Date and time
          </Typography>
          <StyledSelectField />
        </Grid>{" "}
        <Grid item xs={6}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Add link
          </Typography>
          <StyledInput placeholder={"Add Link"} />
        </Grid>{" "}
        <Grid item xs={6}></Grid> <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Reason for rescheduling
          </Typography>
          <StyledMultilineTextField
            label="Add Description in less than 500 words"
            rows={4}
          />
        </Grid>{" "}
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography
              sx={{ marginBottom: 1 }}
              variant="h6"
              fontWeight={500}
              color={"#333333"}
            >
              Confirm Reschedule
            </Typography>
            <StyledSwitch checked={isChecked} onChange={handleSwitchChange} />{" "}
          </Stack>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          {" "}
          <Stack direction={"row"} spacing={2}>
            <StyledButton
              name="Cancel"
              variant="secondary"
              style={{ width: "auto" }}
            >
              Cancel
            </StyledButton>
            <StyledButton
              name="Save"
              variant="primary"
              style={{ width: "auto" }}
            >
              Save
            </StyledButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
