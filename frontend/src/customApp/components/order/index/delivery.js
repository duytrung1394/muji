import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import ContentsBox from "./contentsBox";
import CommonButton from "../commonButton";

const DeliveryContentsBox = styled(ContentsBox)`
  display: flex;
  color: rgb(88, 88, 88);
  & div:nth-child(1) {
    margin-right: 16px;
  }
`;

const DataDiv = styled.div`
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
  flex: 1;
  width: 300px;
  position: relative;
  &&& {
    padding: 16px;
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

const Delivery = ({ delivery, unable }) => {
  const { address } = delivery;
  return (
    <DeliveryContentsBox>
      <DataDiv>
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
        {!unable && (
          <ChangeButton>
            <IntlMessages id="order.procedure.change" />
          </ChangeButton>
        )}
      </DataDiv>
      <DataDiv>
        <DeliveryInfomationTitles>
          <IntlMessages id="order.confirm.orderData" />
        </DeliveryInfomationTitles>
        <Name>
          {delivery.name}
          <IntlMessages id="order.confirm.esq" />
        </Name>
        {!unable && (
          <ChangeButton>
            <IntlMessages id="order.procedure.change" />
          </ChangeButton>
        )}
      </DataDiv>
    </DeliveryContentsBox>
  );
};

export default Delivery;
