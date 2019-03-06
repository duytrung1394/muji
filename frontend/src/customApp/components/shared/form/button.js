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
    ${({ width = "300px", height = "40px", color, reverse = false }) => ({
      width,
      height,
      backgroundColor: reverse ? color || reverseColor : reverseColor,
      color: reverse ? reverseColor : color || baseColor,
      borderColor: color || baseColor
    })};
    border-style: solid;
    border-width: 1px;
    border-radius: 25px;
    font-size: 12px;
    box-shadow: rgba(88, 88, 88, 0.3) 0px 1px 3px;
  }

  &.ant-btn-clicked:after {
    content: "";
    border: none;
  }

  &.ant-btn-two-chinese-chars > *:not(.anticon) {
    letter-spacing: normal;
  }
`;
