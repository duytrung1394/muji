import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import { List } from "antd";
import styled from "styled-components";
import { BaseContentLayout } from "../../components/panel/contentLayout";

const ContentLayout = styled(BaseContentLayout)`
  text-align: center;
`;

const NoticeWrapper = styled.div`
  max-width: 680px;
  width: auto;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  margin: 0 auto;
  padding: 10px 20px;
  font-weight: bold;
`;

const NoticeTitle = styled.div`
  padding-right: 15px;
  min-width: 80px;
  display: inline-block;
  vertical-align: top;
`;

const StyledList = styled(List)`
  display: inline-block;

  .ant-list-item {
    padding: 0;
    text-align: left;
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
      <NoticeWrapper>
        <NoticeTitle>
          <IntlMessages id="top.attributes.notices" />
        </NoticeTitle>
        <StyledList
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
          split={false}
          itemLayout="horizontal"
        />
      </NoticeWrapper>
    </ContentLayout>
  );
};

export default notice;
