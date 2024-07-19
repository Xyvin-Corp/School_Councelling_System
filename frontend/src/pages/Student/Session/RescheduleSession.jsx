import React, { useState } from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import { StyledTime } from "../../../ui/StyledTime";
import StyledSelectField from "../../../ui/StyledSelectField";
import { StyledButton } from "../../../ui/StyledButton";
import { StyledMultilineTextField } from "../../../ui/StyledMultilineTextField ";

import StyledSwitch from "/src/ui/StyledSwitch.jsx";
import { StyledCalender } from "../../../ui/StyledCalender";
import { Controller, useForm } from "react-hook-form";
export default function RescheduleSession() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const option = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const onSubmit = (data) => {
    console.log("Form data:", data);
  };
  return (
    <Box sx={{ padding: 3 }} bgcolor={"white"} borderRadius={"4px"}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <Controller
              name="date"
              control={control}
              defaultValue=""
              rules={{ required: "Date is required" }}
              render={({ field }) => (
                <>
                  <StyledCalender
                    label="Select Date from Calender"
                    {...field}
                  />
                  {errors.date && (
                    <span style={{ color: "red" }}>{errors.date.message}</span>
                  )}{" "}
                </>
              )}
            />
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
            <Controller
              name="time"
              control={control}
              defaultValue=""
              rules={{ required: "Time is required" }}
              render={({ field }) => (
                <>
                  <StyledTime label="Select Time" {...field} />
                  {errors.time && (
                    <span style={{ color: "red" }}>{errors.time.message}</span>
                  )}{" "}
                </>
              )}
            />
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
            <Controller
              name="counselor"
              control={control}
              defaultValue=""
              rules={{ required: " Counselor is required" }}
              render={({ field }) => (
                <>
                  <StyledSelectField {...field} options={option} />{" "}
                  {errors.counselor && (
                    <span style={{ color: "red" }}>
                      {errors.counselor.message}
                    </span>
                  )}{" "}
                </>
              )}
            />
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
            <Controller
              name="platform"
              control={control}
              defaultValue=""
              rules={{ required: "Platform is required" }}
              render={({ field }) => (
                <>
                  <StyledSelectField {...field} options={option} />{" "}
                  {errors.platform && (
                    <span style={{ color: "red" }}>
                      {errors.platform.message}
                    </span>
                  )}{" "}
                </>
              )}
            />
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
            <Controller
              name="reason"
              control={control}
              defaultValue=""
              rules={{ required: "Reason is required" }}
              render={({ field }) => (
                <>
                  <StyledMultilineTextField
                    label="Add Description in less than 500 words"
                    {...field}
                    rows={4}
                  />{" "}
                  {errors.reason && (
                    <span style={{ color: "red" }}>
                      {errors.reason.message}
                    </span>
                  )}{" "}
                </>
              )}
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
              <Controller
                name="activate"
                control={control}
                defaultValue={false}
                rules={{ required: "Activate is required" }}
                render={({ field }) => (
                  <>
                    <StyledSwitch
                      checked={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.checked);
                        handleSwitchChange(e);
                      }}
                    />{" "}
                    {errors.activate && (
                      <span style={{ color: "red" }}>
                        {errors.activate.message}
                      </span>
                    )}{" "}
                  </>
                )}
              />
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
      </form>
    </Box>
  );
}
