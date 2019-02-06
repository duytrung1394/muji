import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const BillSummaryTitles = styled.h2`
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 16px;
  color: rgb(88, 88, 88);
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

const BillPrices = styled.span`
  font-size: 12px;
  padding: 0 4px;
`;

const CustomItems = {
  marginBottom: "4px"
};

const BillingSummary = ({ billingSummary }) => {
  return (
    <BillSummaryDiv>
      <BillSummaryTitles>
        <IntlMessages id="order.confirm.billContent" />
      </BillSummaryTitles>
      <BillSummaryList>
        <BillSummaryItems>
          <IntlMessages id="order.confirm.productsSubtotal" />
          <AmountOfMoney>
            <IntlMessages id="order.confirm.taxIn" />
            <LargePrice>{billingSummary.products_subtotal}</LargePrice>
            <IntlMessages id="order.confirm.yen" />
          </AmountOfMoney>
        </BillSummaryItems>
        <BillSummaryItems style={CustomItems}>
          <IntlMessages id="order.confirm.incidentalService" />
          <AmountOfMoney>
            <IntlMessages id="order.confirm.taxIn" />
            <BillPrices>{billingSummary.incidental_service}</BillPrices>
            <IntlMessages id="order.confirm.yen" />
          </AmountOfMoney>
        </BillSummaryItems>
        <BillSummaryItems>
          <IntlMessages id="order.confirm.deliveryFee" />
          <AmountOfMoney>
            <IntlMessages id="order.confirm.taxIn" />
            <BillPrices>{billingSummary.delivery_fee}</BillPrices>
            <IntlMessages id="order.confirm.yen" />
          </AmountOfMoney>
        </BillSummaryItems>
        <BillSummaryItems style={CustomItems}>
          <IntlMessages id="order.procedure.mujiShoppingPoint" />
          <AmountOfMoney>
            <BillPrices>{billingSummary.muji_shopping_ponts}</BillPrices>
            <IntlMessages id="order.procedure.point" />
          </AmountOfMoney>
        </BillSummaryItems>
        <BillSummaryItems style={CustomItems}>
          <IntlMessages id="order.confirm.mujiCoin" />
          <AmountOfMoney>
            <BillPrices>{billingSummary.muji_coins}</BillPrices>
            <IntlMessages id="order.confirm.coin" />
          </AmountOfMoney>
        </BillSummaryItems>
        <BillSummaryItems>
          <IntlMessages id="order.confirm.partonerSales" />
          <AmountOfMoney>
            <BillPrices>{billingSummary.partoner_sales}</BillPrices>
            <IntlMessages id="order.confirm.yen" />
          </AmountOfMoney>
        </BillSummaryItems>
        <BillSummaryItems>
          <PaymentConfirm>
            <IntlMessages id="order.procedure.paymentConfirm" />
          </PaymentConfirm>
          <AmountOfMoney>
            <IntlMessages id="order.procedure.taxIn" />
            <LargePrice>{billingSummary.payment_confirm}</LargePrice>
            <IntlMessages id="order.procedure.yen" />
          </AmountOfMoney>
        </BillSummaryItems>
      </BillSummaryList>
    </BillSummaryDiv>
  );
};

export default BillingSummary;
