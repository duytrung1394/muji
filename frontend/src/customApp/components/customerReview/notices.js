import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Link } from "react-router-dom";

const NoticeList = styled.ul`
  padding: 20px 0 0;
  list-style: none;
`;

const Notice = styled.li`
  font-size: 14px;
  && {
    margin: 0px;
  }
`;

const Notices = ({ value }) => {
  return (
    <NoticeList>
      <Notice>
        <IntlMessages id={`customerReview.new.notice1${value}`} />
        <Link to={"/"}>
          <IntlMessages id="customerReview.new.noticeLink" />
        </Link>
        <IntlMessages id="customerReview.new.notice1Back" />
      </Notice>
      <Notice>
        <IntlMessages id="customerReview.new.notice2" />
      </Notice>
      <Notice>
        <IntlMessages id="customerReview.new.notice3" />
      </Notice>
    </NoticeList>
  );
};

export default Notices;
