import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const Title = styled.h2`
`;

const PaymentMethod = () => {
  return (
    <div>
      <Title>
        お支払い方法
      </Title>
      クレジットカード<br />
      下4桁：1234　img<br />
      【変更　ボタン】
    </div>
  );
};
    
export default PaymentMethod;