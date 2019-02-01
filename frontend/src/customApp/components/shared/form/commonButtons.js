import { Button } from "antd";
import styled from "styled-components";

export const ShoppingButton = styled(Button)`
  &&& {
    background-color: ${props =>
      props.backgroundcolor ? props.backgroundcolor : "#fff"};
    color: ${props => (props.color ? props.color : "#585858")};
    border: 1px solid
      ${props => (props.bordercolor ? props.bordercolor : "#585858")};
    border-radius: 25px;
    font-size: 12px;
    max-width: 300px;
    width: 100%;
    margin: 30px auto 0;
    display: block;
  }
  &.ant-btn-clicked:after {
    content: "";
    border: none;
  }
`;

export const RoundCapButton = styled(Button)`
  margin-left: 16px;
  &&& {
    background-color: ${props =>
      props.backgroundcolor ? props.backgroundcolor : "#fff"};
    color: ${props => (props.color ? props.color : "#585858")};
    border: 1px solid
      ${props => (props.bordercolor ? props.bordercolor : "#585858")};
    border-radius: 25px;
    font-size: 12px;
  }
  &.ant-btn-clicked:after {
    content: "";
    border: none;
  }
`;
