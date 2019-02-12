import React from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";

const NoticeDiv = styled.div`
  padding: 8px 0;
`;

const Notice = styled.p`
  margin-bottom: 0;
  font-size: 11px;
`;

const EmphasisNotice = styled(Notice)`
  color: #7f0019;
`;

const Notices = () => {
  return (
    <NoticeDiv>
      <EmphasisNotice>
        <IntlMessages id="productDetail.notice1" />
      </EmphasisNotice>
      <Notice>
        <IntlMessages id="productDetail.notice2" />
      </Notice>
      <Notice>
        <IntlMessages id="productDetail.notice3" />
      </Notice>
      <Notice>
        <IntlMessages id="productDetail.notice4" />
      </Notice>
    </NoticeDiv>
  );
};

export default Notices;
