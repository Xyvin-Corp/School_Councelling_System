import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { userColumns, userData } from "../../assets/json/ReportTableData";
import StyledTable from "../../ui/StyledTable";
import { ReactComponent as FilterIcon } from "../../assets/icons/FilterIcon.svg";
import StyledSearchbar from "../../ui/StyledSearchbar";
export default function Report() {
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
  };

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        aria-label="tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#0072BC",
            height: 4,
            borderRadius: "4px",
          },
        }}
        sx={{
          bgcolor: "white",
          paddingTop: "34px",
          "& .MuiTabs-indicator": {
            backgroundColor: "#0072BC",
          },
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: 600,
          },
          "& .Mui-selected": {
            color: "#0072BC",
          },
        }}
      >
        <Tab label="Reports" />
        <Tab label="Add Report" />
      </Tabs>{" "}
      <Box padding="30px" marginBottom={4}>
        <>
          <Stack
            direction={"row"}
            justifyContent={"end"}
            paddingBottom={3}
            alignItems={"center"}
          >
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
          {selectedTab === 0 && (
            <StyledTable
              columns={userColumns}
              data={userData}
              onSelectionChange={handleSelectionChange}
              onView={handleView}
            />
          )}
          {selectedTab === 1 && <Typography>Not Found</Typography>}
        </>{" "}
      </Box>
    </>
  );
}
