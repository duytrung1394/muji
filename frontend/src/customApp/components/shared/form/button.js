import React from "react";
import styled from "styled-components";
import { Button as AntdButton } from "antd";

const StyledButton = styled(AntdButton)`
  &&& {
    font-size: 12px;
    span {
      margin: 0;
    }
  }

  &.ant-btn-primary {
    background-color: #333;
    border: none;
    :hover {
      background-color: #7f0019;
    }
  }

  .anticon {
    padding-right: 5px;
    font-weight: bold;
  }
`;

export const Button = props => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

const baseColor = "#585858";
const reverseColor = "#fff";

export const OutlineButton = styled(Button)`
  &&& {
    background-color: ${props =>
      props.reverse ? props.color || reverseColor : reverseColor};
    color: ${props =>
      props.reverse ? reverseColor : props.color || baseColor};
    border: 1px solid ${props => props.color || baseColor};
    border-radius: 25px;
    font-size: 12px;
  }
  &.ant-btn-clicked:after {
    content: "";
    border: none;
  }
`;
