import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

import StyledTable from "../../ui/StyledTable";
import {
  userColumns as eventColumns,
  userData as eventData,
} from "../../assets/json/NotificationEventData";
import {
  userColumns as counsellingColumns,
  userData as counsellingData,
} from "../../assets/json/NotificationCounsellingData";
import { StyledButton } from "../../ui/StyledButton";
import { ReactComponent as FilterIcon } from "../../assets/icons/FilterIcon.svg";
import StyledSearchbar from "../../ui/StyledSearchbar";
export default function Notification() {
  const [selectedTab, setSelectedTab] = useState("events");
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const handleOpenFilter = () => {
    setFilterOpen(true);
  };

  const handleCloseFilter = () => {
    setFilterOpen(false);
  };
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
      <Box padding="30px" marginBottom={4}>
        <>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            paddingBottom={3}
            alignItems={"center"}
          >
            <Stack direction={"row"} spacing={2}>
              <StyledButton
                name="Events"
                variant={selectedTab === "events" ? "primary" : "secondary"}
                onClick={() => handleTabChange("events")}
              />
              <StyledButton
                name="Counselling"
                variant={
                  selectedTab === "counselling" ? "primary" : "secondary"
                }
                onClick={() => handleTabChange("counselling")}
              />
            </Stack>

            <Stack direction={"row"} spacing={2}>
              <StyledSearchbar />
              <Box
                bgcolor={"#FFFFFF"}
                borderRadius={"50%"}
                width={"48px"}
                height={"48px"}
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="1px solid rgba(0, 0, 0, 0.12)"
                onClick={handleOpenFilter}
                style={{ cursor: "pointer" }}
              >
                <FilterIcon />
              </Box>
            </Stack>
          </Stack>
          {selectedTab === "events" ? (
            <StyledTable
              columns={eventColumns}
              data={eventData}
              onSelectionChange={handleSelectionChange}
              onView={handleView}
            />
          ) : (
            <StyledTable
              columns={counsellingColumns}
              data={counsellingData}
              onSelectionChange={handleSelectionChange}
              onView={handleView}
            />
          )}{" "}
        </>
      </Box>
    </>
  );
}
