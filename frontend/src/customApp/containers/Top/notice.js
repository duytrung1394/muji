import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";

const notice = props => {
  const { notices } = props;
  return (
    <div>
      <p>
        <IntlMessages id="top.attributes.notices" />
        <ul>
          {notices &&
            notices.map(notice => {
              return <li>{notice.title}</li>;
            })}
        </ul>
      </p>
    </div>
  );
};

export default notice;
