import { ItemHeader as ItemHeaderWrapper } from "../../shared/tabSlider/tabSliderItem";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const FavoriteTitle = styled.h2`
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
  width: 73%;
  list-style-type: none;
  list-style; none;
`;

const OrderAddress = styled.li`
  width: 27%;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  list-style-type: none;
  list-style: none;

  a,
  a:hover,
  a:focus {
    color: rgb(96, 179, 250);
  }
`;

const OrderWarning = styled.li`
  color: rgb(139, 26, 39);
  list-style-type: none;
  list-style: none;
  font-size: ;
`;

const ItemHeader = ({ item }) => {
  const { item_name, order_warning } = item;
  return (
    <ItemHeaderWrapper>
      <FavoriteTitle>{item_name}</FavoriteTitle>
      {order_warning ? (
        <SubscriptionOrderInfo>
          <OrderWarning>
            <IntlMessages
              id={`order.subscription.warning.code${order_warning}`}
            />
          </OrderWarning>
        </SubscriptionOrderInfo>
      ) : (
        <SubscriptionOrderInfo>
          <OrderInfo>
            <IntlMessages id="order.subscription.label.nextTime" />
            {item.order_date}
          </OrderInfo>
          <OrderAddress>
            <Link to={"#"}>{item.order_address}</Link>
          </OrderAddress>
        </SubscriptionOrderInfo>
      )}
    </ItemHeaderWrapper>
  );
};

export default ItemHeader;
