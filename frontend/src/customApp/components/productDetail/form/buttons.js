import React from "react";
import { Icon } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";

const OrderButton = styled.button`
  display: inline-block;
  width: 300px;
  line-height: 40px;
  margin-right: 15px;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 25px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  :focus {
    outline: 0;
  }
`;

const ButtonIcon = styled(Icon)`
  font-size: 20px;
  margin-right: 16px;
`;

const StyledCartButton = styled(OrderButton)`
  background-color: #7f0019;
`;

const StyledBuyNowButton = styled(OrderButton)`
  border: 1px solid #7f0019;
  color: #7f0019;
  :hover {
    color: #7f0019;
  }
`;

export const CartButton = ({ onClick }) => {
  return (
    <StyledCartButton onClick={onClick}>
      <ButtonIcon type="shopping-cart" />
      <IntlMessages id="rest.cart" />
    </StyledCartButton>
  );
};

export const BuyNowButton = ({ onClick, disabled }) => {
  return (
    <StyledBuyNowButton onClick={onClick} disabled={disabled}>
      <ButtonIcon type="select" />
      <IntlMessages id="rest.buyNow" />
    </StyledBuyNowButton>
  );
};
