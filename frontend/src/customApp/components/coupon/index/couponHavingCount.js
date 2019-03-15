import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const OuterLayout = styled.section`
  padding: 16px;
  background: #f2f2f2;
`;

const InnerContent = styled.div`
  padding: 16px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(88, 88, 88, 0.3);
`;

const Content = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const CouponHavingCount = ({ count }) => {
  return (
    <OuterLayout>
      <InnerContent>
        <Content>
          <IntlMessages id="coupon.count.label" />
          <IntlMessages
            id="coupon.countNumber"
            values={{ count: count }}
          />
        </Content>
      </InnerContent>
    </OuterLayout>
  );
};

export default CouponHavingCount;
