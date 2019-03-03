import React, { Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../../components/utility/intlMessages";
import OrderDeliveryImage1 from "../../../../../image/order/order_procedure/img-order-delivery-1.png";
import OrderDeliveryImage2 from "../../../../../image/order/order_procedure/img-order-delivery-2.png";
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";

const OrderListItem = styled.li`
  padding: 10px;
  border-top: 1px solid rgb(153, 153, 153);
  overflow: hidden;
  position: relative;

  &:last-child {
    border-bottom: 1px solid rgb(153, 153, 153);
  }
`;

const ItemImage = styled.img`
  width: 100%;
  cursor: pointer;
`;

const ItemData = styled.p`
  margin-bottom: 4px;
  font-size: 11px;
`;

const StyledRow = styled(Row)`
  width: 100%;
  display: flex;
`;

const ItemName = styled.p`
  font-size: 13px;
  margin-bottom: 12px;
`;

const ItemType = styled.span`
  color: rgb(153, 153, 153);
`;

const FixedPrice = styled.span`
  color: rgb(153, 153, 153);
`;

const OverLine = styled.span`
  text-decoration: line-through;
`;

const ItemPrice = styled.span`
  font-size: 15px;
`;

const DiscountPrice = styled.span`
  color: rgb(139, 26, 39);
`;

const LimitedSeal = styled.p`
  text-align: right;
`;

const TotalPrice = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  font-size: 11px;
`;

const linkStyle = {
  display: "block"
};

const images = {
  OrderDeliveryImage1: OrderDeliveryImage1,
  OrderDeliveryImage2: OrderDeliveryImage2
};

const OrderItem = ({ item }) => {
  return (
    <OrderListItem>
      <StyledRow>
        <Col span={8}>
          <NavLink to="#" style={linkStyle}>
            <ItemImage
              src={`https://img.muji.net/img/item/${item.janCode}_400.jpg`}
            />
          </NavLink>
        </Col>
        <Col span={15} offset={1}>
          <ItemData>
            <ItemType>{item.type}</ItemType>
          </ItemData>
          <ItemName>{item.itemName}</ItemName>
          <ItemData>
            <IntlMessages id="order.confirm.color" />
            {item.color}
          </ItemData>
          <ItemData>
            <IntlMessages id="order.confirm.size" />
            {item.size}
          </ItemData>
          <ItemData>
            <IntlMessages id="order.confirm.itemNumber" />
            {item.number}
          </ItemData>
        </Col>
      </StyledRow>
      <TotalPrice>
        {item.discount ? (
          <Fragment>
            <FixedPrice>
              <OverLine>
                <IntlMessages id="order.confirm.taxIn" />
                <span>{item.price}</span>
                <IntlMessages id="order.confirm.yen" />
              </OverLine>
              <IntlMessages id="order.confirm.arrow" />
            </FixedPrice>
            <DiscountPrice>
              <IntlMessages id="order.confirm.taxIn" />
              <ItemPrice>{item.discount_price}</ItemPrice>
              <IntlMessages id="order.confirm.yen" />
            </DiscountPrice>
            <LimitedSeal>
              <DiscountPrice>
                <IntlMessages id="order.procedure.timeLimitedPrice" />
              </DiscountPrice>
            </LimitedSeal>
          </Fragment>
        ) : (
          <Fragment>
            <IntlMessages id="order.confirm.taxIn" />
            <ItemPrice>{item.price}</ItemPrice>
            <IntlMessages id="order.confirm.yen" />
          </Fragment>
        )}
      </TotalPrice>
    </OrderListItem>
  );
};

export default OrderItem;
