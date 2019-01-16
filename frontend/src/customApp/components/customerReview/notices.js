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

const Notices = ({ type = "review" }) => {
  return (
    <NoticeList>
      <Notice>
        <IntlMessages
          id={`customerReview.new.notice.${type}.1`}
          values={{
            terms: (
              <Link to={"/"}>
                <IntlMessages id="customerReview.new.notice.terms" />
              </Link>
            )
          }}
        />
      </Notice>
      <Notice>
        <IntlMessages id={`customerReview.new.notice.${type}.2`} />
      </Notice>
      <Notice>
        <IntlMessages id={`customerReview.new.notice.${type}.3`} />
      </Notice>
    </NoticeList>
  );
};

export default Notices;
