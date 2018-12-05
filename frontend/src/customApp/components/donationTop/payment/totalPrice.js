import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const Box = styled(Row)`
  border: solid 1px #ddd;
`;

const Label = styled(Col)`
  &&& {
    font-size: 12px;
    padding: 10px;
    background: #f5f5f5;
  }
`;

const Item = styled(Col)`
  &&& {
    font-size: 12px;
    padding: 10px;
  }
`;

const Price = styled.span`
  font-weight: bold;
`;

const TotalPrice = ({ price }) => (
  <Box type="flex">
    <Label span={4}>
      <IntlMessages id="donation.label.totalPrice" />
    </Label>
    <Item span={20}>
      <Price>{price}</Price>
      <IntlMessages id="donation.label.priceCurrency" />
    </Item>
  </Box>
);

export default TotalPrice;
