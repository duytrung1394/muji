import React, { Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../../components/utility/intlMessages";
import OrderItem from "./orderItem";
import { OutlineButton } from "../../../shared/form/button";

const OrderListWrapper = styled.div`
  div:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const OrdertWrapper = styled.div`
  padding: 16px 16px 16px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
`;

const HeadLine = styled.h1`
  font-size: 13px;
  color: rgb(88, 88, 88);
`;

const LargeFontHeadLine = styled.h1`
  font-size: 15px;
  font-weight: 700;
  color: rgb(88, 88, 88);
`;

const HeadLineSpan = styled.span`
  margin-left: 20px;
`;

const OrderDeliveryDiscription = styled.div`
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

const ButtonArea = styled.div`
  text-align: right;
`;

const OrderList = ({ orders, isConfirm }) => {
  return (
    <OrderListWrapper>
      {orders &&
        orders.map((order, index) => {
          return (
            <OrdertWrapper key={index}>
              <OrderDelivery
                order={order}
                index={index}
                isConfirm={isConfirm}
              />
              <OrderItemList items={order.items} isConfirm={isConfirm} />
            </OrdertWrapper>
          );
        })}
    </OrderListWrapper>
  );
};

const OrderItemList = ({ items, isConfirm }) => {
  return (
    <OrderItems>
      <ListWrapper>
        {items &&
          items.map((item, index) => {
            return <OrderItem item={item} isConfirm={isConfirm} key={index} />;
          })}
      </ListWrapper>
    </OrderItems>
  );
};

const OrderDelivery = ({ order, index, isConfirm }) => {
  const { deliveryInfo } = order;
  return (
    <Fragment>
      {isConfirm && (
        <OrderDeliveryHeadLine isLargeFont={true}>
          <IntlMessages id="order.confirm.orderListTitle" />
        </OrderDeliveryHeadLine>
      )}
      <OrderDeliveryHeadLine isLargeFont={!isConfirm}>
        <IntlMessages id="order.confirm.deliveryService" />
        <span>{index + 1}</span>
        <HeadLineSpan>
          <IntlMessages id="order.confirm.deliveryCategory" />
          <span>{deliveryInfo.deliveryDivision}</span>
        </HeadLineSpan>
      </OrderDeliveryHeadLine>
      <OrderDeliveryDiscription>
        <p>
          <IntlMessages
            id="order.procedure.preparationDiscription"
            values={{ term: "1〜2週間" }}
          />
        </p>
        <p>
          <IntlMessages id="order.procedure.supplementaryMatter" />
        </p>
      </OrderDeliveryDiscription>
      {!isConfirm && (
        <ButtonArea>
          <OutlineButton width="150px">
            <IntlMessages id="order.procedure.specifyDate" />
          </OutlineButton>
        </ButtonArea>
      )}
    </Fragment>
  );
};

const OrderDeliveryHeadLine = props => {
  const { isLargeFont } = props;
  return (
    <Fragment>
      {isLargeFont ? (
        <LargeFontHeadLine {...props}>{props.children}</LargeFontHeadLine>
      ) : (
        <HeadLine {...props}>{props.children}</HeadLine>
      )}
    </Fragment>
  );
};

export default OrderList;
