import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const Box = styled(Row)`
  border: solid 1px #ddd;
  border-bottom: none;
`;

const Label = styled(Col)`
  &&& {
    font-size: 12px;
    padding: 10px;
    background: #f5f5f5;
    border-bottom: solid 1px #ddd;
  }
`;

const Item = styled(Col)`
  &&& {
    font-size: 12px;
    padding: 10px;
    border-bottom: solid 1px #ddd;
  }
`;

const Price = styled.span`
  font-weight: bold;
`;

const Summary = ({ total, useCreditCard }) => {
  return (
    <Box type="flex">
      <Label span={10}>
        <IntlMessages id="donation.label.totalPrice" />
      </Label>
      <Item span={14}>
        <IntlMessages
          id="donation.confirm.total.price"
          values={{
            price: <Price>{total}</Price>
          }}
        />
      </Item>
      <Label span={10}>
        <IntlMessages id="donation.confirm.paymentMethod" />
      </Label>
      <Item span={14}>
        {useCreditCard && (
          <IntlMessages id="donation.confirm.paymentMethod.creditCard" />
        )}
        {!useCreditCard && (
          <IntlMessages id="donation.confirm.paymentMethod.nothing" />
        )}
      </Item>
    </Box>
  );
};

export default Summary;
