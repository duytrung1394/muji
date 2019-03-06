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

const SubscriptionOrderInfo = styled.ul`
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

const OrderAddress = styled.li`
  width: 27%;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  list-style-type: none;
  list-style: none;
`;

const OrderWarning = styled.li`
  width: 100%;
  margin-top: 13px;
  font-size: 12px;
  color: rgb(139, 26, 39);
  list-style-type: none;
  list-style: none;
`;

const ItemHeader = ({ item }) => {
  const { item_name, order_warning } = item;
  return (
    <Fragment>
      <Title>{item_name}</Title>
      {order_warning ? (
        <OrderWarning>
          <IntlMessages
            id={`order.subscription.warning.code${order_warning}`}
          />
        </OrderWarning>
      ) : (
        <SubscriptionOrderInfo>
          <OrderInfo>
            <IntlMessages id="order.subscription.label.nextTime" />
            {item.order_date}
          </OrderInfo>
          <OrderAddress>
            <span>{item.order_address}</span>
          </OrderAddress>
        </SubscriptionOrderInfo>
      )}
    </Fragment>
  );
};

export default ItemHeader;
