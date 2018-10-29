import React from "react";
import styled from "styled-components";

const StyledLargeButton = styled.button`
  border: 1px solid #cccccc;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 18px 0;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  color: ${props => (props.disabled ? "#c1c1c1" : "#585858")};
`;

const LargeButton = props => (
  <StyledLargeButton {...props}>{props.children}</StyledLargeButton>
);

export default LargeButton;
