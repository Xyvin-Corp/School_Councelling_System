import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import img from "../assets/images/staff.png";
import { ReactComponent as EmailIcon } from "../assets/icons/EmailIcon.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/PhoneIcon.svg";

const UserCard = () => {
  return (
    <Grid container spacing={2} bgcolor={"white"} borderRadius={"12px"}>
      <Grid item md={4} xs={6}>
        <img
          src={img}
          alt="img"
          width={"111px"}
          height={"111px"}
          style={{ borderRadius: "12px" }}
        />
      </Grid>
      <Grid item md={8} xs={6}>
        <Stack spacing={1}>
          <Typography variant="h5" fontWeight="600" color={"#4A4647"}>
            Prabodhan Fitzgerald
          </Typography>
          <Typography variant="h8" color={"#4A4647"}>
            Designation
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <PhoneIcon />
            <Typography variant="h8" color={"#2C2829"}>
              9865432123
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <EmailIcon />
            <Typography variant="h8" color={"#2C2829"}>
              Prabfitz@gmail.com
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserCard;
