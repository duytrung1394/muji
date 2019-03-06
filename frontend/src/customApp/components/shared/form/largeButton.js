import React from "react";
import styled from "styled-components";

const StyledLargeButton = styled.button`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 18px 0;
  border: 1px solid #cccccc;
  font-size: 16px;
  color: #585858;
  background-color: inherit;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    color: #0b0b0b;
    border-color: #808080;
  }

  :focus {
    outline: 0;
  }
`;

const LargeButton = props => (
  <StyledLargeButton {...props}>{props.children}</StyledLargeButton>
);

export default LargeButton;
