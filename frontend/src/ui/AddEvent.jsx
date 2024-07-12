import React, { useState } from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import { StyledTextField } from "./StyledTextField";
import { StyledTime } from "./StyledTime";
import StyledSelectField from "./StyledSelectField";
import { StyledEventUpload } from "./StyledEventUpload";
import { StyledButton } from "./StyledButton";
import { StyledMultilineTextField } from "./StyledMultilineTextField ";
import { StyledCalender } from "./StyledCalender";
import StyledSwitch from "/src/ui/StyledSwitch.jsx";

export default function AddEvent() {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <Box sx={{ padding: 3 }} bgcolor={"white"} borderRadius={"4px"}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: "bold" }}>
            Type of Event
          </Typography>
          <StyledSelectField />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Name
          </Typography>
          <StyledTextField label="Enter your E-mail ID" />
        </Grid>{" "}
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Date
          </Typography>
          <StyledCalender label="Select Date from Calender" />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Time
          </Typography>
          <StyledTime label="Select Time" />
        </Grid>{" "}
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Event Image
          </Typography>
          <StyledEventUpload label="Upload your Image here" />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Virtual Platform
          </Typography>
          <StyledSelectField label="Virtual Platform" />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Add Link
          </Typography>
          <StyledTextField label="Add Meeting Link here" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: "bold" }}>
            Select Report
          </Typography>
          <StyledSelectField fullWidth />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Add Chief Guest Name
          </Typography>
          <StyledTextField label="Enter Chief Guest Name" />
        </Grid>{" "}
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Add Chief Guest Designation
          </Typography>
          <StyledTextField label="Enter Chief Guest Designation" />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Upload Chief Guest Image
          </Typography>
          <StyledEventUpload label="Upload Chief Guest Name" />{" "}
        </Grid>{" "}
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Add Description
          </Typography>
          <StyledMultilineTextField
            label="Add Description in less than 500 words"
            rows={4}
          />
        </Grid>
        <Grid item xs={6}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="subtitle1">Activate</Typography>
            <StyledSwitch
              checked={isChecked}
              onChange={handleSwitchChange}
            />{" "}
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
