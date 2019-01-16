import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";

const QuantityBox = styled.div`
  display: flex;
`;

const Button = styled.div`
  line-height: 50px;
  width: 50px;
  background-color: #e5e5e5;
  box-shadow: none;
  text-align: center;
  user-select: none;
  font-weight: bold;
  cursor: pointer;
`;

const Sum = styled.input`
  width: 82px;
  height: 50px;
  line-height: 50px;
  margin: 0 16px;
  text-align: center;
`;

const CommonButton = ({ value }) => {
  return <Button>{value}</Button>;
};

const Quantity = () => {
  return (
    <div>
      <p>
        <IntlMessages id="productDetail.quantity" />
      </p>
      <QuantityBox>
        <CommonButton value="-" />
        <Sum value={10} />
        <CommonButton value="+" />
      </QuantityBox>
    </div>
  );
};

export default Quantity;
