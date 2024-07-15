import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { StyledButton } from "../../../ui/StyledButton";
import StyledSearchbar from "../../../ui/StyledSearchbar";
import {
  userColumns as allsessionColumn,
  userData as allsessionData,
} from "../../../assets/json/AllSession";
import {
  completedColumns,
  completedData,
} from "../../../assets/json/CompletedSessionData";
import {
  cancelledColumns,
  cancelledData,
} from "../../../assets/json/CancelledSessionData";
import {
  rescheduledColumns,
  rescheduledData,
} from "../../../assets/json/RescheduledSessionData";
import { ReactComponent as FilterIcon } from "../../../assets/icons/FilterIcon.svg";
import StyledTable from "../../../ui/StyledTable";
const SessionHistory = () => {
  const [selectedTab, setSelectedTab] = useState("all");
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
  const getTableData = () => {
    switch (selectedTab) {
      case "completed":
        return { columns: completedColumns, data: completedData };
      case "cancel":
        return { columns: cancelledColumns, data: cancelledData };
      case "reschedule":
        return { columns: rescheduledColumns, data: rescheduledData };
      case "all":
      default:
        return { columns: allsessionColumn, data: allsessionData };
    }
  };

  const { columns, data } = getTableData();
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"} padding={2}>
        <Stack direction={"row"} spacing={2}>
          <StyledButton
            name="All Sessions"
            variant={selectedTab === "all" ? "primary" : "secondary"}
            onClick={() => handleTabChange("all")}
          />
          <StyledButton
            name="Completed"
            variant={selectedTab === "completed" ? "primary" : "secondary"}
            onClick={() => handleTabChange("completed")}
          />
          <StyledButton
            name="Cancelled"
            variant={selectedTab === "cancel" ? "primary" : "secondary"}
            onClick={() => handleTabChange("cancel")}
          />
          <StyledButton
            name="Rescheduled"
            variant={selectedTab === "reshedule" ? "primary" : "secondary"}
            onClick={() => handleTabChange("reschedule")}
          />
        </Stack>{" "}
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
      <Box padding="30px" marginBottom={4}>
        <StyledTable
          columns={columns}
          data={data}
          onSelectionChange={handleSelectionChange}
          onView={handleView}
        />
      </Box>
    </>
  );
};

export default SessionHistory;
