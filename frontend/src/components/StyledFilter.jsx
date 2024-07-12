import React from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  Divider,
  Stack,
  DialogTitle,
} from "@mui/material";
import { StyledButton } from "../ui/StyledButton";
import { StyledCalender } from "../ui/StyledCalender";
import StyledSelectField from "../ui/StyledSelectField";
import { ReactComponent as CloseIcon } from "../assets/icons/CloseIcon.svg";
const StyledFilter = ({ open, onClose }) => {
  const handleApply = () => {
    console.log("Selected Tiers:");
  };
  const handleClear = () => {
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ height: "auto", width: "380px", padding: 0 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          marginTop={"10px"}
          padding={3}
          paddingBottom={0}
        >
          <Typography variant="h4">Filter</Typography>
          <Typography
            onClick={handleClear}
            color="#E71D36"
            style={{ cursor: "pointer" }}
          >
           <CloseIcon/>
          </Typography>
        </Box>
      </DialogTitle>{" "}<DialogContent style={{ backgroundColor: "#F9F9F9",}} >
      <Stack spacing={2}paddingTop={2} >
        <Box display="flex" alignItems="center" width="100%">
          <Typography variant="h8" color={"#787878"}>
            Start Date
          </Typography>
          <Divider sx={{ flexGrow: 1, marginLeft: 2 }} />
        </Box>
        <StyledCalender />
        <Box display="flex" alignItems="center" width="100%">
          <Typography variant="h8" color={"#787878"}>
            End Date
          </Typography>
          <Divider sx={{ flexGrow: 1, marginLeft: 2 }} />
        </Box>
        <StyledCalender />
        <Box display="flex" alignItems="center" width="100%">
          <Typography variant="h8" color={"#787878"}>
            Counseling Type
          </Typography>
          <Divider sx={{ flexGrow: 1, marginLeft: 2 }} />
        </Box>
        <StyledSelectField />
        <Box display="flex" alignItems="center" width="100%">
          <Typography variant="h8" color={"#787878"}>
            Counsellor Name
          </Typography>
          <Divider sx={{ flexGrow: 1, marginLeft: 2 }} />
        </Box>
        <StyledSelectField />
        <Box display="flex" alignItems="center" width="100%">
          <Typography variant="h8" color={"#787878"}>
            Student Name
          </Typography>
          <Divider sx={{ flexGrow: 1, marginLeft: 2 }} />
        </Box>
        <StyledSelectField />
        <Box display="flex" alignItems="center" width="100%">
          <Typography variant="h8" color={"#787878"}>
            Grade
          </Typography>
          <Divider sx={{ flexGrow: 1, marginLeft: 2 }} />
        </Box>
        <StyledSelectField />{" "}
        <Box display="flex" alignItems="center" width="100%">
          <Typography variant="h8" color={"#787878"}>
            Status
          </Typography>
          <Divider sx={{ flexGrow: 1, marginLeft: 2 }} />
        </Box>
        <StyledSelectField />
      </Stack></DialogContent>{" "}
      <Stack direction={"row"} spacing={2} padding={4} bgcolor={"#F9F9F9"}>
        <StyledButton variant="primary" name="Apply" onClick={handleApply} />
        <StyledButton variant="secondary" name="Reset" onClick={handleApply} />
      </Stack>
    </Dialog>
  );
};

export default StyledFilter;
