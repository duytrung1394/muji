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

const getBackgroundColor = props => {
  const color = props.color ? props.color : "#fff";
  return props.reverse ? color : "#fff";
};

const getColor = props => {
  const color = props.color ? props.color : "#585858";
  return props.reverse ? "fff" : color;
};

export const OutlineButton = styled(AntdButton)`
  width: 300px;
  span {
    vertical-align: bottom;
  }
  &&& {
    display: inline-block;
    height: 44px;
    background-color: ${getBackgroundColor};
    color: ${getColor};
    border: 1px solid ${getColor};
    border-radius: 25px;
    font-size: 12px;
    :hover {
      border-color: ${getColor};
    }
  }
  &.ant-btn-clicked:after {
    content: "";
    border: none;
  }
`;
