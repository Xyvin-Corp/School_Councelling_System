import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { ReactComponent as EmailIcon } from "../assets/icons/EmailIcon.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/PhoneIcon.svg";

const UserCard = ({ user }) => {
  return (
    <Grid
      container
      spacing={2}
      bgcolor={"white"}
      borderRadius={"12px"}
      padding={"10px"}
      minHeight={"160px"}
    >
      {user?.img ? (
        <Grid
          item
          md={4}
          xs={6}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img
            src={user?.img}
            alt="img"
            width={"118px"}
            height={"118px"}
            style={{ borderRadius: "12px" }}
          />
        </Grid>
      ) : null}
      <Grid item md={8} xs={6}>
        <Stack spacing={1}>
          {user?.id ? (
            <Typography variant="h8" color={"rgba(44, 40, 41, 0.6)"}>
              {user?.id}
            </Typography>
          ) : null}
          <Typography variant="h5" color={"#4A4647"}>
            {user?.name}
          </Typography>
          <Typography variant="h6" color={"#4A4647"}>
            {user?.title}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <PhoneIcon />
            <Typography variant="h6" color={"#2C2829"}>
              {user?.phone}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <EmailIcon />
            <Typography variant="h6" color={"#2C2829"}>
              {user?.email}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserCard;
