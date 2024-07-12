import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import StyledInput from "./StyledInput";
import StyledSelectField from "./StyledSelectField";
import { StyledEventUpload } from "./StyledEventUpload";
import { StyledMultilineTextField } from "./StyledMultilineTextField ";
import StyledSwitch from "./StyledSwitch";
import { StyledButton } from "./StyledButton";

const AddCounselor = () => {
  return (
    <Box bgcolor={"white"} padding={3} width={"804px"}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Typography sx={{ marginBottom: 1 }}>Name</Typography>
          <StyledInput placeholder="Enter Full Name" />
        </Grid>
        <Grid item md={6}>
          <Typography sx={{ marginBottom: 1 }}>Designation</Typography>
          <StyledInput placeholder="Designation" />
        </Grid>
        <Grid item md={6}>
          <Typography sx={{ marginBottom: 1 }}>Email</Typography>
          <StyledInput placeholder="Email" />
        </Grid>{" "}
        <Grid item md={6}>
          <Typography sx={{ marginBottom: 1 }}>Experience Level</Typography>
          <StyledSelectField />
        </Grid>{" "}
        <Grid item md={6}>
          <Typography sx={{ marginBottom: 1 }}>Contact Number</Typography>
          <StyledInput placeholder="Conatct Number" />
        </Grid>
        <Grid item md={6}>
          <Typography sx={{ marginBottom: 1 }}>Upload Image</Typography>
          <StyledEventUpload placeholder={"Upload your image here"} />
        </Grid>
        <Grid item md={6}>
          <Typography sx={{ marginBottom: 1 }}>Add Description</Typography>
          <StyledMultilineTextField
            placeholder={"Add Description in less than 500 words"}
          />
        </Grid>
        <Grid item md={6}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography sx={{ marginBottom: 1 }}>Activate</Typography>
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
