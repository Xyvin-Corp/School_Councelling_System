
import React from "react";
import { Grid } from "@mui/material";
import reviews from '../assets/json/ReviewData';
import ReviewCard from "../ui/Reviewcard";

const Review = () => {
  return (
    <Grid container spacing={5}>
      {reviews.map((review) => (
        <Grid item md={6} xs={12} key={review.id} spacing={2}>
          <ReviewCard review={review} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Review;
