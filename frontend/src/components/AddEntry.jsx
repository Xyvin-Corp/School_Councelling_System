import React, { useState } from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import StyledSelectField from "../ui/StyledSelectField";
import { StyledButton } from "../ui/StyledButton";
import { StyledMultilineTextField } from "../ui/StyledMultilineTextField ";
import { StyledCalender } from "../ui/StyledCalender";
import StyledSwitch from "/src/ui/StyledSwitch.jsx";
import DropZone from "../ui/DropZone";
import { Controller, useForm } from "react-hook-form";

export default function AddEntry() {
  const {
    control,
    handleSubmit,
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
              Date of Next appointment
            </Typography>
            <Controller
              name="appointmentDate"
              control={control}
              defaultValue=""
              rules={{ required: "Appointment date is required" }}
              render={({ field }) => (
                <>
                  <StyledCalender label="Select Date from Calender" {...field} />
                  {errors.appointmentDate && (
                    <span style={{ color: "red" }}>{errors.appointmentDate.message}</span>
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
              Grade
            </Typography>
            <Controller
              name="grade"
              control={control}
              defaultValue=""
              rules={{ required: "Grade is required" }}
              render={({ field }) => (
                <>
                  <StyledSelectField options={option}  label="Grade" {...field} />
                  {errors.grade && (
                    <span style={{ color: "red" }}>{errors.grade.message}</span>
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
              Referred to
            </Typography>
            <Controller
              name="referredTo"
              control={control}
              defaultValue=""
              rules={{ required: "Referral is required" }}
              render={({ field }) => (
                <>
                  <StyledSelectField options={option} label="Grade" {...field} />
                  {errors.referredTo && (
                    <span style={{ color: "red" }}>{errors.referredTo.message}</span>
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
              Remarks
            </Typography>
            <Controller
              name="remarks"
              control={control}
              defaultValue=""
              rules={{ required: "Remarks are required" }}
              render={({ field }) => (
                <>
                  <StyledMultilineTextField
                    label="Add Description in less than 500 words"
                    rows={4}
                    {...field}
                  />
                  {errors.remarks && (
                    <span style={{ color: "red" }}>{errors.remarks.message}</span>
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
              Case Details
            </Typography>
            <Controller
              name="caseDetails"
              control={control}
              defaultValue=""
              rules={{ required: "Case details are required" }}
              render={({ field }) => (
                <>
                  <StyledMultilineTextField
                    label="Add Description in less than 500 words"
                    rows={4}
                    {...field}
                  />
                  {errors.caseDetails && (
                    <span style={{ color: "red" }}>{errors.caseDetails.message}</span>
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
              Upload relevant Docs
            </Typography>
            <Controller
              name="documents"
              control={control}
              defaultValue={[]}
              rules={{ required: "At least one document is required" }}
              render={({ field: { onChange, value } }) => (
                <>
                  <DropZone
                    onDrop={(acceptedFiles) => {
                      onChange(acceptedFiles);
                    }}
                  />
                  {errors.documents && (
                    <span style={{ color: "red" }}>{errors.documents.message}</span>
                  )}
                  {value && value.length > 0 && (
                    <div>
                      <h4>Uploaded files:</h4>
                      <ul>
                        {value.map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    </div>
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
                Close Case
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
  );
}