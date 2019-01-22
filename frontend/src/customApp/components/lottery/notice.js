import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const NoticeStyle = styled.div`
  background-color: #eee;
  padding: 10px 12px 8px;
  margin-bottom: 16px;

  p {
    &.notice-title {
      font-weight: bold;
    }

    &:not(.notice-title) {
      font-size: 12px;
      padding-left: 15px;

      &:before {
        content: '※';
        padding-right: 2px;
        margin-left: -15px;
      }
    }

    &.notice-red {
      color: red;
    }
  }
`;

const Notice = () => {
  return (
    <NoticeStyle>
      <p className="notice-title"><IntlMessages id="lottery.notice.title" /></p>
      <p><IntlMessages id="lottery.notice.0" /></p>
      <p><IntlMessages id="lottery.notice.1" /></p>
      <p><IntlMessages id="lottery.notice.2" /></p>
      <p><IntlMessages id="lottery.notice.3" /></p>
      <p><IntlMessages id="lottery.notice.4" /></p>
      <p><IntlMessages id="lottery.notice.5" /></p>
      <p className="notice-red"><IntlMessages id="lottery.notice.6" /></p>
    </NoticeStyle>
  );
};

export default Notice;
