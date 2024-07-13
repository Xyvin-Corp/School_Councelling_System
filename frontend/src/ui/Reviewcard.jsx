import React from "react";
import { Box, Grid, Rating, Stack, Typography } from "@mui/material";
import { ReactComponent as DeleteIcon } from "../assets/icons/DeleteIcon.svg";

const ReviewCard = ({ review }) => {
  return (
    <Grid container spacing={2}>
      <Grid item md={12} xs={12}>
        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h6" fontWeight={600} color={"#4F4F4F"}>
              {review?.name}
            </Typography>
            <Rating name="read-only" value={review?.rating} readOnly />
            <Box flexGrow={1} />
            <DeleteIcon />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h7" fontWeight={400} color={"#4F4F4F"}>
              {review?.review}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h8" color={"rgba(60, 60, 67, 0.5)"}>
              {review?.date}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ReviewCard;
