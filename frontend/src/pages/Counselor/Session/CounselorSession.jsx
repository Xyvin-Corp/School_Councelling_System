import { Box, Stack, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import SessionHistory from "../../Student/Session/SessionHistory";
import StyledSearchbar from "../../../ui/StyledSearchbar";
import {
  activeSessionColumns,
  activeSessionData,
} from "../../../assets/json/ActiveSessionData";
import { ReactComponent as FilterIcon } from "../../../assets/icons/FilterIcon.svg";
import StyledTable from "../../../ui/StyledTable";

const CounselorSession = () => {
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
      {" "}
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
          paddingTop: "20px",
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
        <Tab label="Sessions" />
        <Tab label="Active Cases" />
      </Tabs>
      <Box padding="30px" marginBottom={4}>
        {" "}
        {selectedTab === 0 && <SessionHistory />}
        {selectedTab === 1 &&(
          <>
            <Stack
              direction={"row"}
              justifyContent={"end"}
              padding={3}
              alignItems={"center"}
            >
              {" "}
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
        )}{" "}
      </Box>
    </>
  );
};

export default CounselorSession;
