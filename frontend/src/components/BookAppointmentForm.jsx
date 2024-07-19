import { Box, Grid, Stack, Typography } from '@mui/material'
import React from "react";
import StyledSelectField from '../ui/StyledSelectField'
import { StyledCalender } from '../ui/StyledCalender'
import { StyledTime } from '../ui/StyledTime'
import { StyledMultilineTextField } from '../ui/StyledMultilineTextField '
import StyledSwitch from '../ui/StyledSwitch';
import { StyledButton } from '../ui/StyledButton';
import { Controller, useForm } from "react-hook-form";

export default function AddMeeting() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Handle form submission logic here
  };

  const selectOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

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
              Add Meeting Name
            </Typography>
            <Controller
              name="meetingName"
              control={control}
              defaultValue=""
              rules={{ required: "Meeting name is required" }}
              render={({ field }) => (
                <>
                  <StyledSelectField options={selectOptions} {...field} />
                  {errors.meetingName && (
                    <span style={{ color: "red" }}>{errors.meetingName.message}</span>
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
              Date
            </Typography>
            <Controller
              name="date"
              control={control}
              defaultValue=""
              rules={{ required: "Date is required" }}
              render={({ field }) => (
                <>
                  <StyledCalender label="Select Date from Calender" {...field} />
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
                  )}
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
              Select Counselling Type
            </Typography>
            <Controller
              name="counsellingType"
              control={control}
              defaultValue=""
              rules={{ required: "Counselling type is required" }}
              render={({ field }) => (
                <>
                  <StyledSelectField options={selectOptions} {...field} />
                  {errors.counsellingType && (
                    <span style={{ color: "red" }}>{errors.counsellingType.message}</span>
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
              Choose Counsellor
            </Typography>
            <Controller
              name="counsellor"
              control={control}
              defaultValue=""
              rules={{ required: "Counsellor is required" }}
              render={({ field }) => (
                <>
                  <StyledSelectField options={selectOptions} {...field} />
                  {errors.counsellor && (
                    <span style={{ color: "red" }}>{errors.counsellor.message}</span>
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
              Virtual Platform
            </Typography>
            <Controller
              name="platform"
              control={control}
              defaultValue=""
              rules={{ required: "Platform is required" }}
              render={({ field }) => (
                <>
                  <StyledSelectField options={selectOptions} {...field} />
                  {errors.platform && (
                    <span style={{ color: "red" }}>{errors.platform.message}</span>
                  )}
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
              Add Description
            </Typography>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <>
                  <StyledMultilineTextField
                    label="Add Description in less than 500 words"
                    {...field}
                  />
                  {errors.description && (
                    <span style={{ color: "red" }}>{errors.description.message}</span>
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
                Send Notifications
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
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
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
  )
}