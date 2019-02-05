import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import visaImage from "../../../../image/order/order_procedure/img-confirm-visa.png";

const PaymentTitles = styled.h2`
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 16px;
  color: rgb(88, 88, 88);
`;

const PaymentDiv = styled.div`
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
  font-size: 13px;
  position: relative;
`;

const VisaImage = styled.img`
  width: 34px;
  height: 21px;
  margin-left: 8px;
`;

const PaymentMethod = () => {
  return (
    <PaymentDiv>
      <PaymentTitles>
        <IntlMessages id="order.confirm.paymentMethod" />
      </PaymentTitles>
      <p>
        <IntlMessages id="order.confirm.cleditCard" />
      </p>
      <IntlMessages id="order.confirm.lastFourDigits" />
      <span>1234</span>
      <VisaImage src={visaImage} />
    </PaymentDiv>
  );
};

export default PaymentMethod;
