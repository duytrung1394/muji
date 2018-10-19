import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";

const ContentPanelWrapper = styled.div`
  .ant-card-head {
    padding: 0 0;
    ${props => (!props.bordered ? "border-bottom: none" : "")};
  }
  .ant-card-body {
    padding: 0 0;
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
    <ContentPanelWrapper bordered={bordered}>
      <Card
        {...props}
        bordered={bordered}
        extra={extra}
        style={{ margin: "1rem", ...props.style }}
      >
        {props.children}
      </Card>
    </ContentPanelWrapper>
  );
};

export default ContentPanel;
