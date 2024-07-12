import { InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";

const StyledInput = ({ placeholder, startIcon, endIcon, disabled,type,onChange,value }) => {
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <OutlinedInput
        type={type}
        value={value}
        onChange={onChange} 
        placeholder={placeholder}
        disabled={disabled}
        startAdornment={
          startIcon ? (
            <InputAdornment position="start" sx={{ marginLeft: "12px" }}>
              {startIcon}
            </InputAdornment>
          ) : null
        }
        endAdornment={
          endIcon ? (
            <InputAdornment
              position="end"
              sx={{ marginRight: "12px", cursor: "pointer" }}
              onClick={() => endIcon.props.onClick && endIcon.props.onClick()}
            >
              {endIcon}
            </InputAdornment>
          ) : null
        }
        sx={{
          width: "100%",
          padding: "3px",
          backgroundColor: "#ffffff",
          borderRadius: "5px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "1px solid rgba(0, 0, 0, 0.2)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.2)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.2)",
          },
          "& .MuiInputBase-input": {
            color: "",
            padding: "14px",
          },
          "& input::placeholder": {
            color: "#000000",
            fontWeight: "500",
          },
        }}
      />
    </FormControl>
  );
};

export default StyledInput;
