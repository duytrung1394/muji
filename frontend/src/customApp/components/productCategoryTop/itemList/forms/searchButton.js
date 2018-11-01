import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../../components/utility/intlMessages";

const StyledButton = styled(Button)`
  && {
    height: 40px;
    padding: 0 40px;
    border-radius: 50px;
    color: white;
    background: #383838;
    font-size: 13px;
    :hover {
      background: #050505;
      color: #f2f2f2;
    }
  }
`;

const SearchButton = props => (
  <StyledButton {...props} htmlType="submit">
    <IntlMessages id="productCategoryTop.filterForm.search" />
  </StyledButton>
);

export default SearchButton;
