import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBreadcrumb = styled(Breadcrumb)`
  && {
    margin-bottom: 15px;
    .ant-breadcrumb-link {
      font-size: 11px;
    }
  }
`;

const Header = ({ navigationList }) => (
  <StyledBreadcrumb>
    {navigationList &&
      navigationList.map((nav, index) => (
        <Breadcrumb.Item key={index}>
          <Link to={nav.path}>{nav.title}</Link>
        </Breadcrumb.Item>
      ))}
  </StyledBreadcrumb>
);

export default Header;
