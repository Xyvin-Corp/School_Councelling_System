import React, { useState } from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import StyledSelectField from "../ui/StyledSelectField";
import { StyledButton } from "../ui/StyledButton";
import { StyledMultilineTextField } from "../ui/StyledMultilineTextField ";
import { StyledCalender } from "../ui/StyledCalender";
import StyledSwitch from "/src/ui/StyledSwitch.jsx";
import DropZone from "../ui/DropZone";
import StyledInput from "../ui/StyledInput";
import { Controller, useForm } from "react-hook-form";

export default function AddSession() {
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
          <Grid item xs={6}>
            <Typography
              sx={{ marginBottom: 1 }}
              variant="h6"
              fontWeight={500}
              color={"#333333"}
            >
              Type of Counselling
            </Typography>
            <Controller
              name="counselling"
              control={control}
              defaultValue=""
              rules={{ required: "Type of Counselling is required" }}
              render={({ field }) => (
                <>
                  <StyledSelectField label="Grade" options={option} {...field} />
                  {errors.counselling && (
                    <span style={{ color: "red" }}>{errors.counselling.message}</span>
                  )}
                </>
              )}
            />
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
            <Controller
              name="date"
              control={control}
              defaultValue=""
              rules={{ required: "Date is required" }}
              render={({ field }) => (
                <>
                  <StyledCalender
                    label="Select Date from Calender"
                    placeholder="Select Date from Calender"
                    {...field}
                  />
                  {errors.date && (
                    <span style={{ color: "red" }}>{errors.date.message}</span>
                  )}
                </>
              )}
            />
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
            <Controller
              name="location"
              control={control}
              defaultValue=""
              rules={{ required: "Location is required" }}
              render={({ field }) => (
                <>
                  <StyledSelectField options={option} {...field} />
                  {errors.location && (
                    <span style={{ color: "red" }}>{errors.location.message}</span>
                  )}
                </>
              )}
            />
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
            <Controller
              name="dateTime"
              control={control}
              defaultValue=""
              rules={{ required: "Date and Time is required" }}
              render={({ field }) => (
                <>
                  <StyledSelectField options={option} {...field} />
                  {errors.dateTime && (
                    <span style={{ color: "red" }}>{errors.dateTime.message}</span>
                  )}
                </>
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{ marginBottom: 1 }}
              variant="h6"
              fontWeight={500}
              color={"#333333"}
            >
              Add link
            </Typography>
            <Controller
              name="link"
              control={control}
              defaultValue=""
              rules={{ required: "Link is required" }}
              render={({ field }) => (
                <>
                  <StyledInput
                    placeholder={"Add Link"}
                    label="Virtual Platform"
                    {...field}
                  />
                  {errors.link && (
                    <span style={{ color: "red" }}>{errors.link.message}</span>
                  )}
                </>
              )}
            />
          </Grid>
          <Grid item xs={6}>
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
                    rows={4}
                    {...field}
                  />
                  {errors.reason && (
                    <span style={{ color: "red" }}>{errors.reason.message}</span>
                  )}
                </>
              )}
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
          <Grid item xs={6}>
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
                type="submit"
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