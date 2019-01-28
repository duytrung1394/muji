import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const StyledButton = styled.button`
  // width: 100px;
  // padding: 2px 4px;
  // font-size: 12px;
  // font-weight: bold;
  // color: #fff;
  // background-color: #333;
  // cursor: default;
  // border: none;
`;

const Button = props => (
  <StyledButton　{...props}>{props.children}</StyledButton>
);

export default Button;