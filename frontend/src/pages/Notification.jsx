import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

import StyledTable from '../ui/StyledTable';
import { userColumns, userData } from '../assets/json/TableData';
import { StyledButton } from "../ui/StyledButton";

export default function Notification() {
  const [selectedTab, setSelectedTab] = useState("events");
  const [selectedRows, setSelectedRows] = useState([]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    console.log("Selected items:", newSelectedIds);
  };

  const handleView = (id) => {
    console.log("View item:", id);
  };

  return (
    <>
      <Box padding={"30px"} bgcolor={"#FFFFFF"}>
        <Typography variant="h4" color={"#4A4647"}>
          Notification Log
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box display="flex" gap={2} padding={2}>
          <StyledButton
              name="Events"
              variant={selectedTab === "events" ? "primary" : "secondary"}
              onClick={() => handleTabChange("events")}
              
            />
            <StyledButton
              name="Counselling"
              variant={selectedTab === "counselling" ? "primary" : "secondary"}
              onClick={() => handleTabChange("counselling")}
              
            />
          </Box>
        </Grid>
      </Grid>
      <Box padding="30px" marginBottom={4}>
        {selectedTab === "events" ? (
          <StyledTable
            columns={userColumns}
            data={userData}
            onSelectionChange={handleSelectionChange}
            onView={handleView}
          />
        ) : (
          <StyledTable
            columns={userColumns}
            data={userData}
            onSelectionChange={handleSelectionChange}
            onView={handleView}
          />
        )}
      </Box>
    </>
  );
}
