import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { userColumns, userData } from "../../assets/json/DashboardTable";
import StyledTable from "../../ui/StyledTable";
import { ReactComponent as FilterIcon } from "../../assets/icons/FilterIcon.svg";
import StyledFilter from "../../components/StyledFilter";
import DashboardData from "../../components/DashboardData";
import StyledSearchbar from "../../ui/StyledSearchbar";
const DashboardPage = () => {
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
  };

  return (
    <>
      <Box padding={"30px"} bgcolor={"#FFFFFF"}>
        <Typography variant="h4" color={"#4A4647"}>
          Dashboard
        </Typography>
      </Box>
      <Box padding="30px" marginBottom={4}>
        <Box marginBottom={4}>
          <DashboardData />
        </Box>{" "}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          paddingBottom={4}
          alignItems={"center"}
        >
          <Typography variant="h8" fontWeight="600" color={"#828282"}>
            Session List
          </Typography>{" "}
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
              onClick={handleOpenFilter}style={{ cursor: "pointer" }}
            >
              <FilterIcon />
            </Box>
          </Stack>
        </Stack>
        <StyledTable
          columns={userColumns}
          data={userData}
          onSelectionChange={handleSelectionChange}
          onView={handleView}
        />
      </Box>{" "}
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
    </>
  );
};

export default DashboardPage;
