import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import StyledTable from "../ui/StyledTable";
import { useNavigate } from "react-router-dom";
import { userColumns, userData } from "../assets/json/TableData";
const SessionPage = () => {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    console.log("Selected items:", newSelectedIds);
  };

  const handleView = (id) => {
    console.log("View item:", id);
    navigate(`/cases/session/${id}`);
  };
  return (
    <>
      <Box padding={"30px"} bgcolor={"#FFFFFF"}>
        <Typography variant="h4" color={"#4A4647"}>
          Cases / Case ID
        </Typography>
      </Box>{" "}
      <Box padding="30px" marginBottom={4}>
        {" "}
        <StyledTable
          columns={userColumns}
          data={userData}
          onSelectionChange={handleSelectionChange}
          onView={handleView}
        />{" "}
      </Box>
    </>
  );
};

export default SessionPage;
