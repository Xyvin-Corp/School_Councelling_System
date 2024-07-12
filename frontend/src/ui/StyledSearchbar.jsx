import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { ReactComponent as SearchIcon } from "../assets/icons/SearchIcon.svg";
const StyledSearchbar = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search Event"
      sx={{
        width: "320px",
        
        height: "48px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "24px",
          height: "48px",bgcolor: "white",
          boxShadow:
            "0 -4px 6px -1px rgba(0, 0, 0, 0.01), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
          "& input": {
            height: "48px",
            padding: "0 14px"
          },
          "& fieldset": {
            border: "none",
            borderRadius: "24px",
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default StyledSearchbar;
