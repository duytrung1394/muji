import React, { Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import OrderItem from "./orderItem";
import CommonButton from "../commonButton";

const OrderItemListWrapper = styled.div`
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
`;

const DeliveryDiv = styled.div`
  position: relative;
`;

const DeliveryInfo = styled.h1`
  display: inline-block;
  font-size: ${props => (props.fontSize ? props.fontSize : "15px")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "700")};
  color: rgb(88, 88, 88);
`;

const TitleSpan = styled.span`
  margin-left: 20px;
`;

const DeliveryStatus = styled.div`
  font-size: 13px;
  margin: 12px 0 5px 0;
`;

const OrderItems = styled.div`
  margin-top: 30px;
`;

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FixDateButton = styled(CommonButton)`
  position: absolute;
  font-size: 12px;
  bottom: 12px;
  right: 12px;
  width: 144px;
`;

const OrderItemList = ({ orders, delivery, unable }) => {
  return (
    <OrderItemListWrapper>
      <DeliveryDiv>
        {!unable && (
          <DeliveryInfo>
            <IntlMessages id="order.confirm.deliveryService" />
            <span>{delivery.deliveryCount}</span>
            <TitleSpan>
              <IntlMessages id="order.confirm.deliveryCategory" />
              <span>{delivery.deliveryDivision}</span>
            </TitleSpan>
          </DeliveryInfo>
        )}
        {unable && (
          <Fragment>
            <DeliveryInfo>
              <IntlMessages id="order.confirm.orderListTitle" />
            </DeliveryInfo>
            <DeliveryStatus>
              <IntlMessages id="order.confirm.deliveryService" />
              <span>{delivery.deliveryCount}</span>
              <TitleSpan>
                <IntlMessages id="order.confirm.deliveryCategory" />
                <span>{delivery.deliveryDivision}</span>
              </TitleSpan>
            </DeliveryStatus>
          </Fragment>
        )}
        <DeliveryStatus>
          <IntlMessages id="order.procedure.deliverySchedule" />
          <span>{delivery.year}</span>
          <IntlMessages id="order.procedure.year" />
          <span>{delivery.month}</span>
          <IntlMessages id="order.procedure.month" />
          <span>{delivery.day}</span>
          <IntlMessages id="order.procedure.day" />
          <IntlMessages id="order.procedure.leftBracket" />
          <span>{delivery.day_of_the_week}</span>
          <IntlMessages id="order.procedure.rightBracket" />
          <IntlMessages id="order.procedure.regular_delivery" />
        </DeliveryStatus>
        {!unable && (
          <FixDateButton>
            <IntlMessages id="order.procedure.specifyDate" />
          </FixDateButton>
        )}
      </DeliveryDiv>
      <OrderItems>
        <ListWrapper>
          {orders.items &&
            orders.items.map((item, index) => {
              return <OrderItem item={item} key={index} />;
            })}
        </ListWrapper>
      </OrderItems>
    </OrderItemListWrapper>
  );
};

export default OrderItemList;
