import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import { List } from "antd";
import styled from "styled-components";

const NoticeWrapper = styled.div`
  text-align: center;
  font-weight: bold;
  * {
    display: inline-block;
  }
`;

const StyledList = styled(List)`
  &.ant-list-bordered {
    border-radius: 6px;
    margin: 0 auto;
    padding: 10px 20px;

    .ant-list-header {
      vertical-align: top;
      padding-top: 0px;
      padding-left: 10px;
      padding-right: 0px;
      span {
        width: 60px;
      }
    }

    .ant-list-item {
      padding: 0;
      padding-left: 10px;
      border-bottom: 0px solid #e8e8e8;
    }
  }

  a {
    color: #888;
    font-weight: normal;
    text-decoration: underline;

    :hover {
      color: #555;
      text-decoration: underline;
    }
  }
`;

const notice = ({ notices }) => {
  const data =
    notices &&
    notices.map((notice) => {
      return (
        <a href="https://www.muji.net/store/cmdty/donation/0299671000000">
          {notice.title}
        </a>
      );
    });

  return (
    <NoticeWrapper>
      <StyledList
        header={<IntlMessages id="top.attributes.notices" />}
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
        bordered={true}
        split={false}
      />
    </NoticeWrapper>
  );
};

export default notice;
