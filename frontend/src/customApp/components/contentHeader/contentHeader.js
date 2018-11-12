import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const ContentHeader = ({ title, navigationList }) => (
  <HeaderWrapper>
    {navigationList && (
      <Breadcrumb>
        {navigationList.map((nav, index) => (
          <Breadcrumb.Item key={index}>
            <Link to={nav.path}>{nav.title}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    )}
    <h1>{title}</h1>
  </HeaderWrapper>
);

export default ContentHeader;
