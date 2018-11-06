import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../../components/utility/intlMessages";

const StyledButton = styled(Button)`
  && {
    height: 40px;
    padding: 0 40px;
    border-radius: 50px;
    font-size: 13px;
  }
`;

const StyledSearchButton = styled(StyledButton)`
  && {
    color: white;
    background: #383838;
    border-color: #383838;
    :hover {
      background: #050505;
      border-color: #050505;
      color: #f2f2f2;
    }
  }
`;

export const SearchButton = props => (
  <StyledSearchButton {...props} htmlType="submit">
    <IntlMessages id="productCategoryTop.filterForm.search" />
  </StyledSearchButton>
);

const StyledResetButton = styled(StyledButton)`
  && {
    color: #383838;
    background: white;
    border-color: #383838;
    :hover {
      background: #e6e6e6;
      border-color: #050505;
      color: #050505;
    }
  }
`;

export const ResetButton = props => (
  <StyledResetButton {...props}>
    <IntlMessages id="productCategoryTop.filterForm.reset" />
  </StyledResetButton>
);
