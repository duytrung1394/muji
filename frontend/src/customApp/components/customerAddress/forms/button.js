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
`;

export const AddButton = () => (
  <StyledButton type="primary" size="small" icon="plus">
    <IntlMessages id="customerAddress.list.link.add" />
  </StyledButton>
);
