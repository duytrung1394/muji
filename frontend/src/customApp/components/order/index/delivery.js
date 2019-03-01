import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import CommonButton from "../commonButton";
import { Row, Col } from "antd";

const colContentLayout = {
  xs: 24,
  sm: 24,
  md: 12,
  xl: 12
};

const StyledRow = styled(Row)`
  overflow: hidden;
  color: rgb(88, 88, 88);
  background-color: #f2f2f2;
  padding: 16px 16px 0px;
`;

const StyledCol = styled(Col)`
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);

  &&& {
    max-height: 200px;
    height: 100%;
    padding: 16px;
    margin-bottom: 16px;
  }
`;

const DeliveryInfomationTitles = styled.h1`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
  color: rgb(88, 88, 88);
`;

const Name = styled.h2`
  font-size: 13px;
`;

const DataItem = styled.li`
  font-size: 13px;
  margin-bottom: 4px;
`;

const DataList = styled.ul`
  font-size: 13px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ChangeButton = styled(CommonButton)`
  position: absolute;
  font-size: 12px;
  bottom: 12px;
  right: 12px;
  width: 100px;
`;

const Delivery = ({ delivery, isConfirm }) => {
  const { address } = delivery;
  return (
    <StyledRow>
      <StyledCol {...colContentLayout}>
        <DeliveryInfomationTitles>
          <IntlMessages id="order.confirm.addressee" />
        </DeliveryInfomationTitles>
        <Name>
          {address.name}
          <IntlMessages id="order.confirm.esq" />
        </Name>
        <DataList>
          <DataItem>
            <IntlMessages id="order.confirm.postMark" />
            {address.zipCode}
          </DataItem>
          <DataItem>
            {address.address1 +
              address.address2 +
              address.address3 +
              address.address4}
          </DataItem>
          <DataItem>
            <IntlMessages id="order.confirm.telephone" />
            {address.telNo}
          </DataItem>
        </DataList>
        {!isConfirm && (
          <ChangeButton>
            <IntlMessages id="order.procedure.change" />
          </ChangeButton>
        )}
      </StyledCol>
      <StyledCol {...colContentLayout}>
        <DeliveryInfomationTitles>
          <IntlMessages id="order.confirm.orderData" />
        </DeliveryInfomationTitles>
        <Name>
          {delivery.name}
          <IntlMessages id="order.confirm.esq" />
        </Name>
        {!isConfirm && (
          <ChangeButton>
            <IntlMessages id="order.procedure.change" />
          </ChangeButton>
        )}
      </StyledCol>
    </StyledRow>
  );
};

const Address = () => {
  return null;
};

export default Delivery;
