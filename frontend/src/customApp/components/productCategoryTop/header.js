import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const HeaderWrapper = styled.div`
  .ant-breadcrumb {
    margin-bottom: 15px;
  }
  .ant-breadcrumb-link {
    font-size: 11px;
  }
  h1 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const Header = props => (
  <HeaderWrapper>
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/store">
          <IntlMessages id="productCategoryTop.nav.top" />
        </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
    <h1>{props.title}</h1>
  </HeaderWrapper>
);

export default Header;
