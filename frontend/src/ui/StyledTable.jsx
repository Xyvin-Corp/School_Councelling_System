import React, { useState } from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Box,
  Divider,
  Stack,
  TablePagination,
  IconButton,
  Checkbox,
  Menu,
  MenuItem,
} from "@mui/material";
import { ReactComponent as ViewIcon } from "../assets/icons/ViewIcon.svg";
import { ReactComponent as LeftIcon } from "../assets/icons/LeftIcon.svg";
import { ReactComponent as RightIcon } from "../assets/icons/RightIcon.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const StyledTableCell = styled(TableCell)`
  &.${tableCellClasses.head} {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.87);
    font-size: 14px;
    padding: 16px;
    font-family: "Roboto", sans-serif;
    text-align: center;
    font-weight: 600;
  }
  &.${tableCellClasses.body} {
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    padding: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.87);
    text-align: center;
  }
`;

const StyledTableRow = styled(TableRow)`
  &:last-child td,
  &:last-child th {
    border: 0;
  }
  cursor: ${({ showEdit }) => (showEdit ? "pointer" : "default")};
  &:hover {
    background-color: ${({ showEdit }) => (showEdit ? "#f0f0f0" : "inherit")};
  }
`;

const StyledTable = ({
  columns,
  onSelectionChange,
  onView,
  onDelete,
  data,
  dashboard,
}) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [rowId, setRowId] = useState(null);

  const handleSelectAllClick = (event) => {
    const isChecked = event.target.checked;
    const newSelectedIds = isChecked ? data.map((row) => row.id) : [];
    setSelectedIds(newSelectedIds);
    onSelectionChange(newSelectedIds);
  };

  const handleRowCheckboxChange = (event, id) => {
    const isChecked = event.target.checked;
    const newSelectedIds = isChecked
      ? [...selectedIds, id]
      : selectedIds.filter((selectedId) => selectedId !== id);
    setSelectedIds(newSelectedIds);
    onSelectionChange(newSelectedIds);
  };

  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setRowId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setRowId(null);
  };

  const handleView = () => {
    onView(rowId);
    handleMenuClose();
  };

  const handleDelete = () => {
    onDelete(rowId);
    setSelectedIds([]);
    handleMenuClose();
  };

  const handleRowClick = (id) => {
    onView(id);
  };

  const isSelected = (id) => selectedIds.includes(id);

  const getStatusVariant = (status) => {
    if (typeof status === "boolean") {
      return status ? "green" : "rejected";
    }
    switch (status) {
      case "active":
        return "#2E7D32";
      case "inactive":
        return "green";
      case "in-progress":
        return "blue";
      case "rejected":
        return "rejected";
      default:
        return "default";
    }
  };

  return (
    <Box>
      <TableContainer sx={{ border: "none" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell padding="checkbox">
                <Checkbox
                  checked={
                    data.length > 0 && selectedIds.length === data.length
                  }
                  onChange={handleSelectAllClick}
                />
              </StyledTableCell>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.field}
                  padding={column.padding || "normal"}
                >
                  {column.title}
                </StyledTableCell>
              ))}
              <StyledTableCell padding="normal"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow
                role="checkbox"
                key={row.id}
                selected={isSelected(row.id)}
              >
                <StyledTableCell padding="checkbox">
                  <Checkbox
                    checked={isSelected(row.id)}
                    onChange={(event) => handleRowCheckboxChange(event, row.id)}
                  />
                </StyledTableCell>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.field}
                    padding={column.padding || "normal"}
                  >
                    {column.field === "status" ? (
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <span
                          style={{
                            backgroundColor: getStatusVariant(
                              row[column.field]
                            ),
                            padding: "0px 8px",
                            borderRadius: "100px",
                            color: "#fff",
                          }}
                        >
                          {row[column.field]}
                        </span>
                      </Box>
                    ) : (
                      row[column.field]
                    )}
                  </StyledTableCell>
                ))}
                <StyledTableCell padding="normal">
                  <IconButton
                    aria-controls="simple-view"
                    aria-haspopup="true"
                    onClick={() => handleRowClick(row.id)}
                  >
                    <ViewIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell padding="normal">
                  <IconButton
                    aria-controls="row-menu"
                    aria-haspopup="true"
                    onClick={(event) => handleMenuOpen(event, row.id)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="row-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && rowId === row.id}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleView}>View</MenuItem>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                  </Menu>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Divider />
        {!dashboard && (
          <Stack
            padding={2}
            component="div"
            direction={"row"}
            justifyContent={
              selectedIds.length > 0 ? "space-between" : "flex-end"
            }
            alignItems="center"
          >
            <Stack direction="row" alignItems="center"></Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <TablePagination
                  component="div"
                  ActionsComponent={({ onPageChange }) => (
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      marginLeft={2}
                    >
                      <LeftIcon />
                      <RightIcon />
                    </Stack>
                  )}
                />
              </Box>
            </Stack>
          </Stack>
        )}
      </TableContainer>
    </Box>
  );
};

export default StyledTable;
