import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../../components/utility/intlMessages";

const SummaryTitle = styled.h2`
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 16px;
  color: rgb(88, 88, 88);
`;

const ContentsBox = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
  font-size: 13px;
`;

const SummaryList = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
`;

const SummaryItem = styled.li`
  margin-bottom: 16px;
  font-size: 11px;
  vertical-align: center;
  &:last-child {
    margin-bottom: 4px;
  }
`;

const AmountOfMoney = styled.span`
  float: right;
`;

const PaymentConfirm = styled.span`
  font-size: 13px;
  font-weight: 700;
`;

const LargePrice = styled.span`
  font-size: 15px;
  padding: 0 4px;
`;

const Price = styled.span`
  font-size: 12px;
  padding: 0 4px;
`;

const CustomItems = {
  marginBottom: "4px"
};

const PaymentSummary = ({ summary }) => {
  return (
    <ContentsBox>
      <SummaryTitle>
        <IntlMessages id="order.confirm.paymentContent" />
      </SummaryTitle>
      <SummaryList>
        <SummaryItem>
          <IntlMessages id="order.confirm.productsSubtotal" />
          <AmountOfMoney>
            <IntlMessages
              id="order.confirm.price"
              values={{
                price: summary.products_subtotal
              }}
            />
          </AmountOfMoney>
        </SummaryItem>
        <SummaryItem style={CustomItems}>
          <IntlMessages id="order.confirm.incidentalService" />
          <AmountOfMoney>
            <IntlMessages
              id="order.confirm.price"
              values={{
                price: summary.incidental_service
              }}
            />
          </AmountOfMoney>
        </SummaryItem>
        <SummaryItem>
          <IntlMessages id="order.confirm.deliveryFee" />
          <AmountOfMoney>
            <IntlMessages
              id="order.confirm.price"
              values={{
                price: summary.delivery_fee
              }}
            />
          </AmountOfMoney>
        </SummaryItem>
        <SummaryItem style={CustomItems}>
          <IntlMessages id="order.procedure.mujiShoppingPoint" />
          <AmountOfMoney>
            <Price>{summary.muji_shopping_points}</Price>
            <IntlMessages id="order.procedure.point" />
          </AmountOfMoney>
        </SummaryItem>
        <SummaryItem>
          <IntlMessages id="order.procedure.mujiGiftCard" />
          <AmountOfMoney>
            <Price>{summary.muji_gift_card}</Price>
            <IntlMessages id="order.currency" />
          </AmountOfMoney>
        </SummaryItem>
        <SummaryItem>
          <PaymentConfirm>
            <IntlMessages id="order.procedure.paymentConfirm" />
          </PaymentConfirm>
          <AmountOfMoney>
            <IntlMessages id="order.procedure.taxIn" />
            <LargePrice>{summary.payment_confirm}</LargePrice>
            <IntlMessages id="order.procedure.yen" />
          </AmountOfMoney>
        </SummaryItem>
      </SummaryList>
    </ContentsBox>
  );
};

export default PaymentSummary;
