import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import { List } from "antd";
import styled from "styled-components";
import { BaseContentLayout } from "../../components/panel/contentLayout";

const ContentLayout = styled(BaseContentLayout)`
  text-align: center;
`;

const StyledList = styled(List)`
  width: auto;
  max-width: 680px;
  font-weight: bold;
  text-align: center;

  &.ant-list-bordered {
    border-radius: 6px;
    margin: 0 auto;
    padding: 10px 20px;
    display: inline-block;

    .ant-list-header {
      padding: 0;
    }

    .ant-list-item {
      padding: 0;
      border-bottom: 0px solid #e8e8e8;
      text-align: left;
    }
  }
`;
const StyledAnchor = styled.a`
  color: #888;
  font-weight: normal;
  text-decoration: underline;

  :hover {
    color: #555;
    text-decoration: underline;
  }
`;

const notice = ({ notices }) => {
  const data =
    notices &&
    notices.map(notice => {
      return (
        <StyledAnchor href="https://www.muji.net/store/cmdty/donation/0299671000000">
          {notice.title}
        </StyledAnchor>
      );
    });

  return (
    <ContentLayout>
      <StyledList
        header={<IntlMessages id="top.attributes.notices" />}
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
        bordered={true}
        split={false}
        itemLayout="horizontal"
      />
    </ContentLayout>
  );
};

export default notice;
