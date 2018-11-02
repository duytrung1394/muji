import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import { List } from "antd";
import styled from "styled-components";

const NoticeWrapper = styled(List)`
  text-align: center;
  font-weight: bold;
  * {
    display: inline-block;
    vertical-align: top;
  }
  .ant-list-header {
    padding: 0;
  }
  .ant-list-bordered {
    border-radius: 6px;
    max-width: 1440px;
    margin: 0 auto;
    padding: 10px 20px;

    .ant-list-header {
      padding-right: 0;
    }

    .ant-list-item {
      padding-left: 10px;
    }
  }
  .ant-list-item {
    padding: 0;
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
    notices.map((notice, index) => {
      return (
        <div className="aaa">
          <a href="https://www.muji.net/store/cmdty/donation/0299671000000">
            {notice.title}
          </a>
        </div>
      );
    });

  return (
    <NoticeWrapper>
      <List
        header={<IntlMessages id="top.attributes.notices" />}
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
        bordered
      />
    </NoticeWrapper>
  );
};

export default notice;
