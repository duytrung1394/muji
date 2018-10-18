import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import NoticeWrapper from "./notice.style";

const notice = props => {
  const { notices } = props;
  return (
    <NoticeWrapper>
      <dl>
        <dt className="notice-title">
          <IntlMessages id="top.attributes.notices" />
        </dt>
        {notices &&
          notices.map((notice, index) => {
            return (
              <dd className="notice-list" key={index}>
                <a href="https://www.muji.net/store/cmdty/donation/0299671000000">
                  {notice.title}
                </a>
              </dd>
            );
          })}
      </dl>
    </NoticeWrapper>
  );
};

export default notice;
