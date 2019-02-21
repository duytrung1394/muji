import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  border-style: solid;
  border-color: rgb(153, 153, 153);
  border-radius: 20px;
  box-shadow: rgba(88, 88, 88, 0.3) 0px 1px 3px;
  font-size: 12px;
  text-align: center;
`;

const Button = props => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

export default Button;
