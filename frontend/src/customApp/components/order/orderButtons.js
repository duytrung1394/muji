import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import CommonButton from "./commonButton";
import { Link } from "react-router-dom";

const OrderButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BackButton = styled(CommonButton)`
  font-size: 12px;
`;

const BackOrderConfirmButton = styled(CommonButton)`
  font-size: 12px;
  background-color: #7f0019;
  color: #fff;
`;

const OrderButtons = ({ submit }) => {
  return (
    <OrderButtonContainer>
      <Link to="#">
        <BackButton>
          <IntlMessages id="order.procedure.backPage" />
        </BackButton>
      </Link>
      <BackOrderConfirmButton onClick={submit}>
        <IntlMessages id="order.procedure.backOrderConfirm" />
      </BackOrderConfirmButton>
    </OrderButtonContainer>
  );
};

export default OrderButtons;
