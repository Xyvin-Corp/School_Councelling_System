import React from "react";
import styled from "styled-components";

const SwitchContainer = styled.label`
  display: inline-block;
  position: relative;
  width: 45px;
  height: 15px;
  border-radius: 23px;
  background: ${(props) => (props.checked ? "#27AE60" : "#b3b3b3")};
  padding: 10px;
  transition: 300ms all;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const SwitchHandle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 50%;
  left: ${(props) => {
    return props.checked ? "22px" : "4px";
  }};
  background: white;
  transform: translateY(-50%);
  transition: 300ms all;
`;

const Input = styled.input`
  display: none;
`;

const StyledSwitch = ({ checked, onChange, variant, disabled }) => {
  const handleChange = (e) => {
    if (!disabled) {
      onChange(e);
    }
  };

  return (
    <SwitchContainer variant={variant} checked={checked} disabled={disabled}>
      <Input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <SwitchHandle checked={checked} variant={variant} />
    </SwitchContainer>
  );
};

export default StyledSwitch;
