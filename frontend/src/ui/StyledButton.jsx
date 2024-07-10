import React from "react";
import styled, { css } from "styled-components";

const buttonVariants = css`
  ${(props) =>
    props.variant === "primary" &&
    css`
      border: none;
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
      line-height: 18px;
      background-color: #0072BC;
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      border: 1px solid #a8a8a8;
      font-size: 18px;
      font-weight: 700;
      color: #0072BC;
      line-height: 18px;
      background-color: #ffffff;
    `}
`;

const disabledStyles = css`
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const ButtonContainer = styled.button`
  padding: 15px 20px;
  text-align: center;
  width: 100%;
  font-family: "Inter", "sans-serif";
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  ${buttonVariants}
  ${disabledStyles}
`;

export const StyledButton = ({ name, variant, color, onClick, disabled }) => {
  return (
    <ButtonContainer
      variant={variant}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </ButtonContainer>
  );
};