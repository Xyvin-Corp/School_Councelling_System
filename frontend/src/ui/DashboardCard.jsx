import { Stack, Typography } from "@mui/material";
import React from "react";

const DashboardCard = ({ data }) => {
  return (
    <Stack bgcolor={'white'} height={'126px'}padding={'16px 22px'}gap={'29px'} >
      <Typography variant="h7" fontWeight={600} color={"#828282"}>
        {data?.title}
      </Typography>
      <Typography variant="h2" color={"#000000"} fontStyle={'italic'} fontWeight={900}>
        {data?.value}
      </Typography>
    </Stack>
  );
};

export default DashboardCard;
