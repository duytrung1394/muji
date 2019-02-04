import React from "react";
import styled from "styled-components";

const StyledCommonButton = styled.button`
  width: 300px;
  max-width: 300px;
  margin: 0 auto;
  padding: 10px 0;
  border: 1px solid #cccccc;
  border-radius: 25px;
  font-size: 14px;
  color: #585858;
  background-color: inherit;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0px 1px 3px 0px rgba(88, 88, 88, 0.3);

  :hover {
  }

  :focus {
    outline: 0;
  }
`;

const CommonButton = props => (
  <StyledCommonButton {...props}>{props.children}</StyledCommonButton>
);

export default CommonButton;
