import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import DashboardData from "../ui/DashboardData";
import { userColumns, userData } from "../assets/json/TableData";
import StyledTable from "../ui/StyledTable";

const DashboardPage = () => {
  const [selectedRows, setSelectedRows] = useState([]);

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
        <Typography variant="h8" fontWeight="600" color={"#828282"}>
          Session List
        </Typography>
        <StyledTable
          columns={userColumns}
          data={userData}
          onSelectionChange={handleSelectionChange}
          onView={handleView}
        />
      </Box>
    </>
  );
};

export default DashboardPage;
