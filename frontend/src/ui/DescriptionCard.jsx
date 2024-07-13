import React from "react";
import { Stack, Box, Typography, Grid } from "@mui/material";

export default function DescriptionCard() {
  return (
    <Grid
      container
      spacing={2}
      bgcolor={"white"}
      borderRadius={"12px"}
      padding={"10px"}
      height={"160px"} justifyContent={'flex-start'} alignItems={'center'}
    >
      <Typography variant="h6" fontWeight={600} color={"#2C2829"} textAlign={'left'}>
        Description
      </Typography>
      <Typography variant="h7" color={"#2C2829"}>
        Lorem ipsum dolor sit amet consectetur. Ut vitae amet congue augue
        rhoncus eget vel quis ornare. Nullam erat eget tristique imperdiet.
        Malesuada vestibulum pretium at adipiscing platea egestas varius. Nibh
        euismod ultrices dui ultricies ultricies enim morbi.
      </Typography>
    </Grid>
  );
}
