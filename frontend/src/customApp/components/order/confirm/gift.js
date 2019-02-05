import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const GiftWrapper = styled.div`
  padding: 16px;
  margin-top: 30px;
  background-color: #f2f2f2;
`;

const GiftStyle = styled.div`
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
`;

const GiftTitle = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: rgb(88, 88, 88);
  margin-bottom: 16px;
`;

const Gift = () => {
  return (
    <GiftWrapper>
      <GiftStyle>
        <GiftTitle>
          <IntlMessages id="order.confirm.GiftWrapping" />
        </GiftTitle>
        <IntlMessages id="order.confirm.dontWant" />
      </GiftStyle>
    </GiftWrapper>
  );
};

export default Gift;
