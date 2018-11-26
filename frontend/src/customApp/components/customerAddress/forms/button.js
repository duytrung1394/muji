import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const StyledButton = styled(Button)`
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

export const AddButton = props => (
  <StyledButton {...props}>{props.children}</StyledButton>
);
