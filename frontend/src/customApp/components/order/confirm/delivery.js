import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import OrderItem from "./orderItem";

const DeliveryWrapper = styled.div`
  padding: 0 16px 16px 16px;
  background-color: #f2f2f2;
`;

const DeliveryStyle = styled.div`
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
`;

const DeliveryTitles = styled.h2`
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 16px;
  color: rgb(88, 88, 88);
`;

const DeliveryInfo = styled.h1`
  font-size: 15px;
  color: rgb(88, 88, 88);
  margin-bottom: 0;
`;

const TitleSpan = styled.span`
  margin-left: 20px;
`;

const DeliverySchedule = styled.div`
  font-size: 13px;
  margin: 12px 0 30px 0;
`;

const OrderItems = styled.div`
  margin-top: 30px;
`;

const OrderItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Delivery = ({ deliveryData }) => {
  if (deliveryData) {
    return (
      <DeliveryWrapper>
        <DeliveryStyle>
          <DeliveryTitles>
            <IntlMessages id="order.confirm.contentConfirmation" />
          </DeliveryTitles>
          <DeliveryInfo>
            <IntlMessages id="order.confirm.deliveryService" />
            <span>{deliveryData.count}</span>
            <TitleSpan>
              <IntlMessages id="order.confirm.deliveryCategory" />
              <span>{deliveryData.category}</span>
            </TitleSpan>
          </DeliveryInfo>
          <DeliverySchedule>
            <IntlMessages id="order.confirm.notSpecified" />
          </DeliverySchedule>
          <OrderItems>
            <OrderItemList>
              {deliveryData.items &&
                deliveryData.items.map((item, index) => {
                  return <OrderItem item={item} key={index} />;
                })}
            </OrderItemList>
          </OrderItems>
        </DeliveryStyle>
      </DeliveryWrapper>
    );
  }
  return null;
};

export default Delivery;
