import React from "react";
import styled from "styled-components";
import { Row, Col, Popover } from "antd";
import Order from "../../components/orderHistory/order";

const OrderItemListWrapper = styled.div`
  float: left;
  list-style: none;
  position: relative;
  width: 100%;

  max-width: 1590px;
  margin: 10px auto 0;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const OrderItemList = ({orderItemList}) => {
  return (
    <OrderItemListWrapper>
      {
        orderItemList.map((orderItem,index) => {
          return(
            <Order
              key={index}
              orderItem={orderItem}
            />
          );
        })
      }
    </OrderItemListWrapper>
  );
}

export default OrderItemList;