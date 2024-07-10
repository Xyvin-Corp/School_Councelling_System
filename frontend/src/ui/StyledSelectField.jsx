import React from "react";
import styled from "styled-components";
import Select from "react-select";

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledSelectField = ({ placeholder,isDisabled, options, onChange, value, isMulti }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      padding: "8px",
      border: "1px solid rgba(0, 0, 0, 0.2)",
      borderRadius: "4px",
      backgroundColor: "#ffffff",
      color: "#000000",
      boxShadow: state.isFocused ? "0 0 0 2px #fff" : "none",
      cursor: "pointer",
      "&:hover": {
        borderColor: "rgba(0, 0, 0, 0.2)",
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#0072BC" : "transparent",
      color: state.isFocused ? "#ffffff" : "#000000",
      cursor: "pointer",
      ":active": {
        backgroundColor: "#0072BC",
      },
    }),
    menu: (provided) => ({
      ...provided,
      position: "absolute",
      backgroundColor: "#ffffff",
      color: "#B5B8C5",
      zIndex: 1000, 
    }),
    singleValue: (provided) => ({
      ...provided,
      color: isDisabled ? "#a0a0a0" : "#000000",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#79747E",
    }),
  };

  return (
    <SelectContainer>
      <Select
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        value={value}
        isMulti={isMulti}
        isDisabled={isDisabled}
        styles={customStyles}
      />
    </SelectContainer>
  );
};

export default StyledSelectField;
