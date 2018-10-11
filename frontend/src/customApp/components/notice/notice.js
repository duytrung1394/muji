import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import NoticeWrapper from "./notice.style";

const notice = props => {
  const { notices } = props;
  return (
    <NoticeWrapper>
      <p>
        <IntlMessages id="notice.notice.title" />
        <ul>
          {notices &&
            notices.map(notice => {
              return <li>{notice.title}</li>;
            })}
        </ul>
      </p>
    </NoticeWrapper>
  );
};

export default notice;
