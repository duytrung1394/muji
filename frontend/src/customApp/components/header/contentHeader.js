import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseContentLayout } from "../../components/panel/contentLayout";

const ContentLayout = styled(BaseContentLayout)`
  margin-top: 0;

  .ant-breadcrumb {
    margin-bottom: 15px;

    .ant-breadcrumb-link {
      font-size: 11px;
    }
  }

  h1 {
    font-size: 25px;
    font-weight: bold;
    margin: 0;
  }
`;

const ContentHeader = ({ title, links }) => (
  <ContentLayout>
    {links && (
      <Breadcrumb>
        {links.map((link, index) => (
          <Breadcrumb.Item key={index}>
            <Link to={link.path}>{link.name}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    )}
    <h1>{title}</h1>
  </ContentLayout>
);

export default ContentHeader;
