import React from "react";
import styled from "styled-components";

const StyledLargeButton = styled.button`
  border: 1px solid #cccccc;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 18px 0;
  cursor: pointer;
  font-size: 16px;
  color: #585858;
`;

const LargeButton = props => (
  <StyledLargeButton {...props}>{props.children}</StyledLargeButton>
);

export default LargeButton;
