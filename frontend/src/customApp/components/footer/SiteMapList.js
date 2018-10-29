import React, { Component } from "react";
import styled from "styled-components";
import { List } from "antd";

const StyledSiteMap = styled(List)`
  .ant-list-item {
    padding: 0;
    margin-bottom: 10px;
  }
`;

const ListItem = styled(List.Item)`
  font-size: 12px;
`;

const ListLink = styled.a`
  color: #616161;

  &:hover {
    color: #616161;
  }
`;

export const SiteMapList = props => {
  const { Data } = props;
  return (
    <StyledSiteMap
      dataSource={Data}
      renderItem={item => (
        <ListItem>
          <ListLink>{item}</ListLink>
        </ListItem>
      )}
    />
  );
};
