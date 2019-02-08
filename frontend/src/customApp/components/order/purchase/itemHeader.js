import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const Title = styled.h2`
  width: 100%;
  margin: 0;
  line-height: 16px;
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.65);
`;

const PurchaseOrderInfo = styled.ul`
  display: flex;
  width: 100%;
  margin-top: 13px;
  margin-bottom: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 12px;
`;

const OrderInfo = styled.li`
  list-style-type: none;
  list-style: none;
`;

const ShoppingAddress = styled.div`
  text-align: right;
  width: 30%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  a,
  a:hover,
  a:focus {
    color: rgb(96, 179, 250);
  }
`;

const ItemHeader = ({ item }) => {
  const { item_name, order_address, store_name } = item;
  return (
    <Fragment>
      <Title>{item_name}</Title>
      <PurchaseOrderInfo>
        <OrderInfo>{item.order_date}</OrderInfo>
        <ShoppingAddress>
          {order_address ? (
            <span>{order_address}</span>
          ) : (
            <Link to={"#"}>{store_name}</Link>
          )}
        </ShoppingAddress>
      </PurchaseOrderInfo>
    </Fragment>
  );
};

export default ItemHeader;
