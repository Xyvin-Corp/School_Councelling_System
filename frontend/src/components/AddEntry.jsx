import React, { useState } from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import { StyledTextField } from "../ui/StyledTextField";
import { StyledTime } from "../ui/StyledTime";
import StyledSelectField from "../ui/StyledSelectField";
import { StyledEventUpload } from "../ui/StyledEventUpload";
import { StyledButton } from "../ui/StyledButton";
import { StyledMultilineTextField } from "../ui/StyledMultilineTextField ";
import { StyledCalender } from "../ui/StyledCalender";
import StyledSwitch from "/src/ui/StyledSwitch.jsx";

export default function AddEntry() {
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
            Type of Event
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
            Name
          </Typography>
          <StyledTextField label="Enter your E-mail ID" />
        </Grid>{" "}
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
        <Grid item xs={6}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Event Image
          </Typography>
          <StyledEventUpload label="Upload your Image here" />
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
          <StyledSelectField label="Virtual Platform" />
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Add Link
          </Typography>
          <StyledTextField label="Add Meeting Link here" />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Select Report
          </Typography>
          <StyledSelectField fullWidth />
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Add Chief Guest Name
          </Typography>
          <StyledTextField label="Enter Chief Guest Name" />
        </Grid>{" "}
        <Grid item xs={6}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Add Chief Guest Designation
          </Typography>
          <StyledTextField label="Enter Chief Guest Designation" />
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Upload Chief Guest Image
          </Typography>
          <StyledEventUpload label="Upload Chief Guest Name" />{" "}
        </Grid>{" "}
        <Grid item xs={6}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
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
            <Typography
              sx={{ marginBottom: 1 }}
              variant="h6"
              fontWeight={500}
              color={"#333333"}
            >
              Activate
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
