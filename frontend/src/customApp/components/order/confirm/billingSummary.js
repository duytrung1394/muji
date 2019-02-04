import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const BillSummaryTitles = styled.h2`
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const BillSummaryDiv = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
  font-size: 13px;
`;

const BillSummaryList = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
`;

const BillSummaryItems = styled.li`
  margin-bottom: 16px;
  vertical-align: center;
  &:last-child {
    margin-bottom: 4px;
  }
`;

const AmountOfMoney = styled.span`
  float: right;
`;

const PaymentConfirm = styled.span`
  font-size: 15px;
  font-weight: 700;
`;

const LargePrice = styled.span`
  font-size: 18px;
  padding: 0 4px;
`;

const BillPrices = styled.span`
  padding: 0 4px;
`;

const BillingSummary = () => {
  return (
    <BillSummaryDiv>
      <BillSummaryTitles>ご請求内容</BillSummaryTitles>
      <BillSummaryList>
        <BillSummaryItems>
          <IntlMessages id="order.procedure.productsSubtotal" />
          <AmountOfMoney>
            <IntlMessages id="order.procedure.taxIn" />
            <LargePrice>7,960</LargePrice>
            <IntlMessages id="order.procedure.yen" />
          </AmountOfMoney>
        </BillSummaryItems>
        <BillSummaryItems>
          <div>
            <IntlMessages id="order.procedure.incidentalService" />
            <AmountOfMoney>
              <IntlMessages id="order.procedure.taxIn" />
              <BillPrices>0</BillPrices>
              <IntlMessages id="order.procedure.yen" />
            </AmountOfMoney>
          </div>
          <div>
            <IntlMessages id="order.procedure.deliveryFee" />
            <AmountOfMoney>
              <IntlMessages id="order.procedure.taxIn" />
              <BillPrices>980</BillPrices>
              <IntlMessages id="order.procedure.yen" />
            </AmountOfMoney>
          </div>
        </BillSummaryItems>
        <BillSummaryItems>
          <div>
            <IntlMessages id="order.procedure.mujiCoin" />
            <AmountOfMoney>
              <BillPrices>-3,000</BillPrices>
              <IntlMessages id="order.procedure.coin" />
            </AmountOfMoney>
          </div>
          <div>
            <IntlMessages id="order.procedure.partonerSales" />
            <AmountOfMoney>
              <BillPrices>-2,000</BillPrices>
              <IntlMessages id="order.procedure.yen" />
            </AmountOfMoney>
          </div>
        </BillSummaryItems>
        <BillSummaryItems>
          <PaymentConfirm>
            <IntlMessages id="order.procedure.paymentConfirm" />
          </PaymentConfirm>
          <AmountOfMoney>
            <IntlMessages id="order.procedure.taxIn" />
            <LargePrice>450</LargePrice>
            <IntlMessages id="order.procedure.yen" />
          </AmountOfMoney>
        </BillSummaryItems>
      </BillSummaryList>
    </BillSummaryDiv>
  );
};

export default BillingSummary;
