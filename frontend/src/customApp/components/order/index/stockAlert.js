import React, { Fragment, Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Row, Col } from "antd";

const StockAlertWrapper = styled.div`
  padding: 16px;
  font-size: 12px;
  background: #fdfdfd;
  border: 1px solid #e5e5e5;
  margin: 30px 16px 30px 16px;
`;

const StockAlertHeader = styled.h1`
  color: #585858;
  font-size: 13px;
  font-weight: bold;
  margin-top: 20px;
  padding-bottom: 10px;
`;

const NoStockItem = styled.ul`
  position: relative;
  padding: 0px;
  li {
    list-style-type: none;
    margin-top: 10px;
    padding: 0 16px;
    font-size: 12px;
  }
`;
const NoStockItemList = styled.div`
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
`;

const Stock = styled.div`
  position: absolute;
  bottom: 0px;
  right: 16px;
`;

const StockAlert = ({ orders }) => {
  const alertItems = orders
    .map(order => {
      return order.items.filter(item => {
        return item.nostock === true;
      });
    })
    .reduce((previous, current) => {
      return [...previous, ...current];
    });

  if (alertItems && alertItems.length > 0) {
    return (
      <StockAlertWrapper>
        <IntlMessages id="order.procedure.stockAlert" />
        <StockAlertHeader>
          <IntlMessages id="order.procedure.nostockItemTitle" />
        </StockAlertHeader>
        <NoStockItemList>
          {alertItems.map((item, index) => {
            return (
              <NoStockItem key={index}>
                <li>{item.itemName}</li>
                <li>
                  <IntlMessages id="order.procedure.nostockItemColorLabel" />
                  {item.color}
                </li>
                <li>
                  <IntlMessages id="order.procedure.nostockItemSizeLabel" />
                  {item.size}
                </li>
                <Stock>
                  <span>
                    <IntlMessages id="order.procedure.stockNumberLabel" />0
                  </span>
                </Stock>
              </NoStockItem>
            );
          })}
        </NoStockItemList>
      </StockAlertWrapper>
    );
  }

  return null;
};

export default StockAlert;
