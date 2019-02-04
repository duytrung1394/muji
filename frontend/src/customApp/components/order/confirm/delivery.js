import React, { Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import OrderDeliveryImage1 from "../../../../image/order/order_procedure/img-order-delivery-1.png";
import OrderDeliveryImage2 from "../../../../image/order/order_procedure/img-order-delivery-2.png";
import CommonButton from "../commonButton";
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";

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

const OrderItem = styled.div`
  margin-top: 30px;
`;

const OrderItemUl = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const OrderItemli = styled.li`
  padding: 10px;
  border-top: 1px solid rgb(153, 153, 153);
  overflow: hidden;
`;

const ItemImage = styled.img`
  width: 100%;
  cursor: pointer;
`;

const ItemData = styled.p`
  margin-bottom: 4px;
`;

const StyledRow = styled(Row)`
  width: 100%;
  display: flex;
`;

const linkStyle = {
  display: "block",
}

const images = {
  OrderDeliveryImage1: OrderDeliveryImage1,
  OrderDeliveryImage2: OrderDeliveryImage2
};

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
          <OrderItem>
            <OrderItemUl>
              {deliveryData.items &&
                deliveryData.items.map((item, index) => {
                  return (
                    <OrderItemli key={index}>
                      <StyledRow>
                        <Col span={8}>
                          <NavLink to="#" style={linkStyle}>
                            <ItemImage src={images[item.img]} />
                          </NavLink>
                        </Col>
                        <Col span={15} offset={1}>
                          <ItemData>{item.type}</ItemData>
                          <ItemData>{item.name}</ItemData>
                          <ItemData>
                            <IntlMessages id="order.procedure.itemColor" />
                            {item.color}
                          </ItemData>
                          <ItemData>
                            <IntlMessages id="order.procedure.itemSize" />
                            {item.size}
                          </ItemData>
                          <ItemData>
                            <IntlMessages id="order.procedure.itemNumber" />
                            {item.number}
                          </ItemData>
                          <IntlMessages id="order.procedure.taxIn" />
                          {item.price}
                          <IntlMessages id="order.procedure.yen" />
                          {item.discount ? (
                            <Fragment>
                              <IntlMessages id="order.procedure.arrow" />
                              <IntlMessages id="order.procedure.taxIn" />
                              <span>{item.discount_price}</span>
                              <IntlMessages id="order.procedure.yen" />
                              <ItemData>
                                <IntlMessages id="order.procedure.timeLimitedPrice" />
                              </ItemData>
                            </Fragment>
                          ) : null}
                        </Col>
                      </StyledRow>
                    </OrderItemli>
                  );
                })}
            </OrderItemUl>
          </OrderItem>
        </DeliveryStyle>
      </DeliveryWrapper>
    );
  }
  return null;
};

export default Delivery;
