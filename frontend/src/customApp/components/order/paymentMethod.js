import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const PaymentTitles = styled.h2`
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 16px;
`;


const PaymentDiv = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0,0,0,.5);
  font-size: 13px;
`;

const ChangeButton = styled.button`
  float: right;
`;

const PaymentMethod = () => {
  return (
    <PaymentDiv>
      <PaymentTitles>
        <IntlMessages id="order.procedure.paymentMethod"/>
      </PaymentTitles>
      <p>
        <IntlMessages id="order.procedure.cleditCard"/>
      </p>
      <IntlMessages id="order.procedure.lastFourDigits"/>
      <span>1234</span>
      <img src=""/>
      <ChangeButton>
        <IntlMessages id="order.procedure.change"/>
      </ChangeButton>
    </PaymentDiv>
  );
};
    
export default PaymentMethod;