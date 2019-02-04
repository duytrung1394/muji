import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import OrderDeliveryImage1 from "../../../image/order/order_procedure/img-order-delivery-1.png";
import OrderDeliveryImage2 from "../../../image/order/order_procedure/img-order-delivery-2.png";
import CommonButton from "./commonButton";

const DeliveryWrapper = styled.div`
  padding: 0 16px 16px 16px;
  background-color: #F2F2F2;
`;

const DeliveryStyle = styled.div`
  padding: 16px;
  background-color: #FFF;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
`;

const DeliveryInfo = styled.h1`
  font-size: 15px;
  font-weight: 600;
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

const ButtonWrapper = styled.div`
  text-align: center;
`;

const SpecifyDateButton = styled(CommonButton)`
  width: 300px;
  font-size: 12px;
  text-align: center;
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
`;

const images = [OrderDeliveryImage1, OrderDeliveryImage2];

const ItemImage = styled.img`
  width: 34px;
  height: 21px;
`;

const Delivery = ({deliveryData}) => {
  if(deliveryData){
    return (
      <DeliveryWrapper>
        <DeliveryStyle>
          <DeliveryInfo>
            <IntlMessages id="order.procedure.deliveryFlight" />
            {deliveryData.delivery_info.delivery_flight}
            <TitleSpan>
              <IntlMessages id="order.procedure.deliveryCategory" />
              {deliveryData.delivery_info.delivery_category}
            </TitleSpan>
          </DeliveryInfo>
          <DeliverySchedule>
            <IntlMessages id="order.procedure.deliverySchedule" />
            {deliveryData.delivery_schedule}
          </DeliverySchedule>
          <ButtonWrapper>
          <SpecifyDateButton>
            <IntlMessages id="order.procedure.specifyDate"/>
          </SpecifyDateButton>
          </ButtonWrapper>
          <OrderItem>
            <OrderItemUl>
              <OrderItemli>
                  <ItemImage />
                  カットソー<br />
                  ミニ裏毛五分袖ワイドＴシャツ<br />
                  <IntlMessages id="order.procedure.itemColor" />ライトシルバーグレー<br />
                  <IntlMessages id="order.procedure.itemSize" />S<br />
                  <IntlMessages id="order.procedure.itemNumber" />1<br />
                  <IntlMessages id="order.procedure.taxIn" />2,980
                  <IntlMessages id="order.procedure.yen" />
              </OrderItemli>
              <OrderItemli>
                  カットソー<br />
                  スムースハイネックワンピース<br />
                  <IntlMessages id="order.procedure.itemColor" />チャコールグレー<br />
                  <IntlMessages id="order.procedure.itemSize" />S<br />
                  <IntlMessages id="order.procedure.itemNumber" />1<br />
                  <IntlMessages id="order.procedure.taxIn" />3,000
                  <IntlMessages id="order.procedure.yen" />
                  <IntlMessages id="order.procedure.arrow" />
                  <IntlMessages id="order.procedure.taxIn" />2,903
                  <IntlMessages id="order.procedure.yen" /><br />
                  <IntlMessages id="order.procedure.timeLimitedPrice" />
              </OrderItemli>
            </OrderItemUl>
          </OrderItem>
        </DeliveryStyle>
      </DeliveryWrapper>
    );
    } return null;
};

export default Delivery;