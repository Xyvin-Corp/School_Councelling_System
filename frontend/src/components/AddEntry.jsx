import React, { useState } from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import StyledSelectField from "../ui/StyledSelectField";
import { StyledButton } from "../ui/StyledButton";
import { StyledMultilineTextField } from "../ui/StyledMultilineTextField ";
import { StyledCalender } from "../ui/StyledCalender";
import StyledSwitch from "/src/ui/StyledSwitch.jsx";
import DropZone from "../ui/DropZone";

export default function AddEntry() {
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
            Date of Next appointment
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
            Grade
          </Typography>
          <StyledSelectField label="Grade" />
        </Grid>{" "}
        <Grid item xs={12}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Referred to
          </Typography>
          <StyledSelectField label="Grade" />
        </Grid>{" "}
        <Grid item xs={12}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Remarks
          </Typography>
          <StyledMultilineTextField
            label="Add Description in less than 500 words"
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
            Case Details
          </Typography>
          <StyledMultilineTextField
            label="Add Description in less than 500 words"
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ marginBottom: 1 }}
            variant="h6"
            fontWeight={500}
            color={"#333333"}
          >
          Upload relevent Docs
          </Typography>
          <DropZone/>
        </Grid>
        <Grid item xs={6}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography
              sx={{ marginBottom: 1 }}
              variant="h6"
              fontWeight={500}
              color={"#333333"}
            >
              Close Case
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