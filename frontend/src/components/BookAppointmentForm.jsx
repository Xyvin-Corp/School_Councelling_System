import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from "react";
import StyledSelectField from '../ui/StyledSelectField'
import { StyledCalender } from '../ui/StyledCalender'
import { StyledTime } from '../ui/StyledTime'
import { StyledMultilineTextField } from '../ui/StyledMultilineTextField '
import StyledSwitch from '../ui/StyledSwitch';
import { StyledButton } from '../ui/StyledButton';

export default function 
() {
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
            Add Meeting Name
          </Typography>
          <StyledSelectField />
        </Grid>
       
        <Grid item xs={6}>
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
        <Grid item xs={6}>
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
           Select Counselling Type
          </Typography>
          <StyledSelectField />
        </Grid>
        <Grid item xs={6}>
        <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
           Choose Counsellor
          </Typography>
          <StyledSelectField />
        </Grid>
        <Grid item xs={6}>
        <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
         Virtual Platform
          </Typography>
          <StyledSelectField />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
          Add Description
          </Typography>
         <StyledMultilineTextField  label="Add Description in less than 500 words"></StyledMultilineTextField>
        </Grid>
        <Grid item xs={6}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography
              sx={{ marginBottom: 1 }}
              variant="h6"
              fontWeight={500}
              color={"#333333"}
            >
              Send Notifications
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
  )
}
