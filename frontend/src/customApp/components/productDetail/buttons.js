import React from "react";
import { Icon } from "antd";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";

const ButtonsBox = styled.div`
  width: 300px;
  margin: 24px auto 0;
`;

const CommonButton = styled.p`
  display: inline-block;
  width: 300px;
  line-height: 48px;
  margin-right: 15px;
  color: #fff;
  border-radius: 25px;
  text-align: center;
`;

const ButtonIcon = styled(Icon)`
  font-size: 20px;
  margin-right: 16px;
`;

const CartButton = styled(CommonButton)`
  background-color: #7f0019;
`;

const BuyButton = styled(CommonButton)`
  border: 1px solid #7f0019;
  color: #7f0019;
`;

const Buttons = () => {
  return (
    <ButtonsBox>
      <CartButton>
        <ButtonIcon type="shopping-cart" />
        <IntlMessages id="productDetail.cart" />
      </CartButton>
      <BuyButton>
        <ButtonIcon type="select" />
        <IntlMessages id="productDetail.buy" />
      </BuyButton>
    </ButtonsBox>
  );
};

export default Buttons;
