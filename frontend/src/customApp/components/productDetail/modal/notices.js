import React from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";

const StyledNotices = styled.div`
  padding: 8px 0;

  p {
    margin-bottom: 0;
    font-size: 11px;

    &.notice-emphasis {
      color: #7f0019;
    }
  }
`;

const Notices = () => {
  return (
    <StyledNotices>
      <p className="notice-emphasis">
        <IntlMessages id="productDetail.notice1" />
      </p>
      <p>
        <IntlMessages id="productDetail.notice2" />
      </p>
      <p>
        <IntlMessages id="productDetail.notice3" />
      </p>
      <p>
        <IntlMessages id="productDetail.notice4" />
      </p>
    </StyledNotices>
  );
};

export default Notices;
