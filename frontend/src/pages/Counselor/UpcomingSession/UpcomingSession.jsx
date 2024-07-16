import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import StyledSearchbar from "../../../ui/StyledSearchbar";
import {
  activeSessionColumns,
  activeSessionData,
} from "../../../assets/json/ActiveSessionData";
import { ReactComponent as FilterIcon } from "../../../assets/icons/FilterIcon.svg";
import { useNavigate } from "react-router-dom";
import StyledTable from "../../../ui/StyledTable";
const UpcomingSession = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const handleOpenFilter = () => {
    setFilterOpen(true);
  };

  const handleCloseFilter = () => {
    setFilterOpen(false);
  };

  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    console.log("Selected items:", newSelectedIds);
  };

  const handleView = (id) => {
    console.log("View item:", id);
    navigate(`/counselor/upcomminSession/${id}`);
  };

  return (
    <>
      <Box padding={"30px"} bgcolor={"#FFFFFF"}>
        <Typography variant="h4" color={"#4A4647"}>
          Upcoming Sessions
        </Typography>
      </Box>
      <Box padding="30px" marginBottom={4}>
        <>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            padding={3}
            alignItems={"center"}
          >
            {" "}
            <Typography variant="h4" color={"#4A4647"}>
              Session list
            </Typography>
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
          <StyledTable
            columns={activeSessionColumns}
            data={activeSessionData}
            onSelectionChange={handleSelectionChange}
            onView={handleView}
          />
        </>
      </Box>
    </>
  );
};

export default UpcomingSession;
