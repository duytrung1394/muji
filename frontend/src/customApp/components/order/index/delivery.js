import React, { Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { OutlineButton } from "../../shared/form/button";
import { Row, Col } from "antd";

const StyledRow = styled(Row)`
  overflow: hidden;
  color: rgb(88, 88, 88);
  background-color: #f2f2f2;
`;

const StyledCol = styled(Col)`
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);

  &&& {
    max-height: 200px;
    height: 100%;
    padding: 16px;
    width: 49%;
  }
`;

const Title = styled.h1`
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

const ButtonArea = styled.div`
  position: absolute;
  bottom: 0;
  right: 16px;
`;

const ChangeButton = styled(OutlineButton)`
  bottom: 12px;
  width: 100px;
`;

const colContentLayout = {
  xs: 24,
  sm: 24,
  md: 12,
  xl: 12
};

const Delivery = ({ delivery, isConfirm }) => {
  return (
    <StyledRow justify="space-between" type="flex">
      <StyledCol {...colContentLayout}>
        <Address delivery={delivery} isConfirm={isConfirm} />
      </StyledCol>
      <StyledCol {...colContentLayout}>
        <Orderer delivery={delivery} isConfirm={isConfirm} />
      </StyledCol>
    </StyledRow>
  );
};

const Address = ({ delivery, isConfirm }) => {
  const { address } = delivery;
  return (
    <Fragment>
      <Title>
        <IntlMessages id="order.confirm.addressee" />
      </Title>
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
        <ButtonArea>
          <ChangeButton>
            <IntlMessages id="order.procedure.change" />
          </ChangeButton>
        </ButtonArea>
      )}
    </Fragment>
  );
};

const Orderer = ({ delivery, isConfirm }) => {
  return (
    <Fragment>
      <Title>
        <IntlMessages id="order.confirm.orderData" />
      </Title>
      <Name>
        {delivery.name}
        <IntlMessages id="order.confirm.esq" />
      </Name>
      {!isConfirm && (
        <ButtonArea>
          <ChangeButton>
            <IntlMessages id="order.procedure.change" />
          </ChangeButton>
        </ButtonArea>
      )}
    </Fragment>
  );
};

export default Delivery;
