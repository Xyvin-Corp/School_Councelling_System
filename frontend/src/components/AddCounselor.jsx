import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import StyledInput from "../ui/StyledInput";
import StyledSelectField from "../ui/StyledSelectField";
import { StyledEventUpload } from "../ui/StyledEventUpload";
import { StyledMultilineTextField } from "../ui/StyledMultilineTextField ";
import StyledSwitch from "../ui/StyledSwitch";
import { StyledButton } from "../ui/StyledButton";

const AddCounselor = () => {
  return (
    <Box bgcolor={"white"} padding={3} width={"804px"}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Typography sx={{ marginBottom: 1 }} variant="h6" fontWeight={500} color={'#333333'}>Name</Typography>
          <StyledInput placeholder="Enter Full Name" />
        </Grid>
        <Grid item md={6}>
          <Typography sx={{ marginBottom: 1 }}variant="h6" fontWeight={500} color={'#333333'}>Designation</Typography>
          <StyledInput placeholder="Designation" />
        </Grid>
        <Grid item md={6}>
          <Typography sx={{ marginBottom: 1 }}variant="h6" fontWeight={500} color={'#333333'}>Email</Typography>
          <StyledInput placeholder="Email" />
        </Grid>{" "}
        <Grid item md={6}>
          <Typography sx={{ marginBottom: 1 }}variant="h6" fontWeight={500} color={'#333333'}>Experience Level</Typography>
          <StyledSelectField />
        </Grid>{" "}
        <Grid item md={6}>
          <Typography sx={{ marginBottom: 1 }}variant="h6" fontWeight={500} color={'#333333'}>Contact Number</Typography>
          <StyledInput placeholder="Conatct Number" />
        </Grid>
        <Grid item md={6}>
          <Typography sx={{ marginBottom: 1 }}variant="h6" fontWeight={500} color={'#333333'}>Upload Image</Typography>
          <StyledEventUpload placeholder={"Upload your image here"} />
        </Grid>
        <Grid item md={6}>
          <Typography sx={{ marginBottom: 1 }}variant="h6" fontWeight={500} color={'#333333'}>Add Description</Typography>
          <StyledMultilineTextField
            placeholder={"Add Description in less than 500 words"}
          />
        </Grid>
        <Grid item md={6}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography sx={{ marginBottom: 1 }}variant="h6" fontWeight={500} color={'#333333'}>Activate</Typography>
            <StyledSwitch />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item md={6}></Grid>
        <Grid item md={6}>
          <Stack direction={"row"} justifyContent={"space-between"} spacing={2}>
            <StyledButton variant="secondary" name={"cancel"} />
            <StyledButton variant="primary" name={"save"} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddCounselor;
