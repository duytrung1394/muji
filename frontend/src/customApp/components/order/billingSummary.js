import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const BillSummaryDiv = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0,0,0,.5);
`;

const BillSummaryList = styled.ul`
  padding: 0px;
  list-style: none;
`;

const BillSummaryTitles = styled.h2`
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
`;

const AmountOfMoney = styled.span`
  float: right;
`;

const BillingSummary = () => {
  return (
    <BillSummaryDiv>
      <BillSummaryTitles>
        ご請求内容
      </BillSummaryTitles>
        <BillSummaryList>
          <li>
            <IntlMessages id="order.procedure.productsSubtotal" />
            <AmountOfMoney>
              <IntlMessages id="order.procedure.taxIn" />
              <span>7,960</span>
              <IntlMessages id="order.procedure.yen" />
            </AmountOfMoney>
          </li>
          <li>
            <div>
              <IntlMessages id="order.procedure.productsSubtotal" />
              <AmountOfMoney>
                <IntlMessages id="order.procedure.taxIn" />
                <span>0</span>
                <IntlMessages id="order.procedure.yen" />
              </AmountOfMoney>
            </div>
            <div>
              <IntlMessages id="order.procedure.productsSubtotal" />
              <AmountOfMoney>
                <IntlMessages id="order.procedure.taxIn" />
                <span>980</span>
                <IntlMessages id="order.procedure.yen" />
              </AmountOfMoney>
            </div>
          </li>
          <li>
            <IntlMessages id="order.procedure.productsSubtotal" />
            <AmountOfMoney>
              <IntlMessages id="order.procedure.taxIn" />
              <span>-3,000</span>
              <IntlMessages id="order.procedure.yen" />
            </AmountOfMoney>
          </li>
          <li>
            <div>
              <IntlMessages id="order.procedure.productsSubtotal" />
              <AmountOfMoney>
                <IntlMessages id="order.procedure.taxIn" />
                <span>-3,000</span>
                <IntlMessages id="order.procedure.point" />
              </AmountOfMoney>
            </div>
            <div>
              <IntlMessages id="order.procedure.productsSubtotal" />
              <AmountOfMoney>
                <IntlMessages id="order.procedure.taxIn" />
                <span>-2,000</span>
                <IntlMessages id="order.procedure.coin" />
              </AmountOfMoney>
            </div>
          </li>
          <li>
            <IntlMessages id="order.procedure.productsSubtotal" />
            <AmountOfMoney>
              <IntlMessages id="order.procedure.taxIn" />
              <span>450</span>
              <IntlMessages id="order.procedure.yen" />
            </AmountOfMoney>
          </li>
        </BillSummaryList>
    </BillSummaryDiv>
  );
};
    
export default BillingSummary;