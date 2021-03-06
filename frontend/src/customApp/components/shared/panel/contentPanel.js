import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";
import { BaseContentLayout } from "./contentLayout";

const ContentLayout = styled(BaseContentLayout)`
  && {
    .ant-card-head {
      padding: 0 0;
      ${props => (!props.bordered ? "border-bottom: none" : "")};
    }

    .ant-card-body {
      padding: 0 0;
    }
  }
`;

const ContentPanel = props => {
  const bordered = props.bordered !== undefined ? props.bordered : false;
  const extra = props.extra ? (
    props.extra
  ) : props.link_path ? (
    <Link to={props.link_path}>{props.link_title}</Link>
  ) : props.link_url ? (
    <a href={props.link_url}>{props.link_title}</a>
  ) : (
    ""
  );
  return (
    <ContentLayout bordered={bordered}>
      <Card
        {...props}
        bordered={bordered}
        extra={extra}
        style={{ ...props.style }}
      >
        {props.children}
      </Card>
    </ContentLayout>
  );
};

export default ContentPanel;
