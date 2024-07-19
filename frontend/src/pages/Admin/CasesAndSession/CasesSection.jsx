import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  userColumns,
  userData,
} from "../../../assets/json/CaseSectionCaseData";
import { useNavigate } from "react-router-dom";
import StyledTable from "../../../ui/StyledTable";

import { ReactComponent as FilterIcon } from "../../../assets/icons/FilterIcon.svg";
import StyledSearchbar from "../../../ui/StyledSearchbar";
export default function CasesSection() {
  const navigate = useNavigate();
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
    navigate(`/cases/case/${id}`);
  };
  return (
    <>
      {" "}
      <Box padding={"30px"} bgcolor={"#FFFFFF"}>
        <Typography variant="h4" color={"#4A4647"}>
          Cases
        </Typography>
      </Box>
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
          <StyledTable
            columns={userColumns}
            data={userData}
            onSelectionChange={handleSelectionChange}
            onView={handleView}
          />{" "}
        </>
      </Box>
    </>
  );
}
