import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../../components/utility/intlMessages";

const commonButtonStyle = {
  height: "40px",
  padding: "0 40px",
  borderRadius: "50px",
  fontSize: "13px"
};

const StyledSearchButton = styled(Button)`
  && {
    ${commonButtonStyle};
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

const StyledResetButton = styled(Button)`
  && {
    ${commonButtonStyle};
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
