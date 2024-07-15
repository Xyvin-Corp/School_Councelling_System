import React, { useState } from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import { StyledTime } from "../../../ui/StyledTime";
import StyledSelectField from "../../../ui/StyledSelectField";
import { StyledButton } from "../../../ui/StyledButton";
import { StyledMultilineTextField } from "../../../ui/StyledMultilineTextField ";

import StyledSwitch from "/src/ui/StyledSwitch.jsx";
import { StyledCalender } from "../../../ui/StyledCalender";

export default function RescheduleSession() {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <Box sx={{ padding: 3 }} bgcolor={"white"} borderRadius={"4px"}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Date
          </Typography>
          <StyledCalender label="Select Date from Calender" />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Time
          </Typography>
          <StyledTime label="Select Time" />
        </Grid>{" "}
        <Grid item xs={12}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Choose Counselor
          </Typography>
          <StyledSelectField label="Select Counselor" />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Virtual Platform
          </Typography>
          <StyledSelectField fullWidth />
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={6}></Grid> <Grid item xs={6}></Grid>
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
