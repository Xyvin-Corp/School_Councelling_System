import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import StyledInput from "../ui/StyledInput";
import StyledSelectField from "../ui/StyledSelectField";
import { StyledEventUpload } from "../ui/StyledEventUpload";
import { StyledMultilineTextField } from "../ui/StyledMultilineTextField ";
import StyledSwitch from "../ui/StyledSwitch";
import { StyledButton } from "../ui/StyledButton";
import { Controller, useForm } from "react-hook-form";
const AddCounselor = () => {
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
    <Box bgcolor={"white"} padding={3} width={"804px"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Typography
              sx={{ marginBottom: 1 }}
              variant="h6"
              fontWeight={500}
              color={"#333333"}
            >
              Name
            </Typography>{" "}
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <>
                  <StyledInput placeholder="Enter Full Name"  {...field} />{" "}
                  {errors.name && (
                    <span style={{ color: "red" }}>{errors.name.message}</span>
                  )}{" "}
                </>
              )}
            />
          </Grid>
          <Grid item md={6}>
            <Typography
              sx={{ marginBottom: 1 }}
              variant="h6"
              fontWeight={500}
              color={"#333333"}
            >
              Designation
            </Typography>
            <Controller
              name="designation"
              control={control}
              defaultValue=""
              rules={{ required: "Designation is required" }}
              render={({ field }) => (
                <>
                  <StyledInput placeholder="Designation" {...field} />{" "}
                  {errors.designation && (
                    <span style={{ color: "red" }}>
                      {errors.designation.message}
                    </span>
                  )}{" "}
                </>
              )}
            />
          </Grid>
          <Grid item md={6}>
            <Typography
              sx={{ marginBottom: 1 }}
              variant="h6"
              fontWeight={500}
              color={"#333333"}
            >
              Email
            </Typography>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <>
                  <StyledInput placeholder="Email" {...field} />
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email.message}</span>
                  )}{" "}
                </>
              )}
            />
          </Grid>{" "}
          <Grid item md={6}>
            <Typography
              sx={{ marginBottom: 1 }}
              variant="h6"
              fontWeight={500}
              color={"#333333"}
            >
              Experience Level
            </Typography>
            <Controller
              name="experience"
              control={control}
              defaultValue=""
              rules={{ required: " Experience is required" }}
              render={({ field }) => (
                <>
                  <StyledSelectField {...field} options={option} />{" "}
                  {errors.experience && (
                    <span style={{ color: "red" }}>
                      {errors.experience.message}
                    </span>
                  )}{" "}
                </>
              )}
            />
          </Grid>{" "}
          <Grid item md={6}>
            <Typography
              sx={{ marginBottom: 1 }}
              variant="h6"
              fontWeight={500}
              color={"#333333"}
            >
              Contact Number
            </Typography>
            <Controller
              name="contact"
              control={control}
              defaultValue=""
              rules={{ required: "Contact is required" }}
              render={({ field }) => (
                <>
                  <StyledInput placeholder="Conatct Number" {...field} />{" "}
                  {errors.contact && (
                    <span style={{ color: "red" }}>
                      {errors.contact.message}
                    </span>
                  )}{" "}
                </>
              )}
            />
          </Grid>
          <Grid item md={6}>
            <Typography
              sx={{ marginBottom: 1 }}
              variant="h6"
              fontWeight={500}
              color={"#333333"}
            >
              Upload Image
            </Typography>{" "}
            <Controller
              name="image"
              control={control}
              defaultValue=""
              rules={{ required: "Image is required" }}
              render={({ field: { onChange } }) => (
                <>
                  <StyledEventUpload
                    placeholder={"Upload your image here"}
                    onChange={onChange}
                  />
                  {errors.image && (
                    <span style={{ color: "red" }}>{errors.image.message}</span>
                  )}
                </>
              )}
            />
          </Grid>
          <Grid item md={6}>
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
                    {...field}
                    placeholder={"Add Description in less than 500 words"}
                  />{" "}
                  {errors.description && (
                    <span style={{ color: "red" }}>
                      {errors.description.message}
                    </span>
                  )}{" "}
                </>
              )}
            />
          </Grid>
          <Grid item md={6}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography
                sx={{ marginBottom: 1 }}
                variant="h6"
                fontWeight={500}
                color={"#333333"}
              >
                Activate
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
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item md={6}></Grid>
          <Grid item md={6}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              spacing={2}
            >
              <StyledButton variant="secondary" name={"cancel"} />
              <StyledButton variant="primary" name={"save"} type="submit" />
            </Stack>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddCounselor;
