import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import CommonButton from "../commonButton";
import { Link } from "react-router-dom";

const OrderButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BackButton = styled(CommonButton)`
  font-size: 12px;
`;

const SubmitButton = styled(CommonButton)`
  font-size: 12px;
  background-color: #7f0019;
  color: #fff;
`;

const OrderButtons = ({ submit, backPath }) => {
  const { title, handleSubmit } = submit;
  return (
    <OrderButtonContainer>
      <Link to={backPath}>
        <BackButton>
          <IntlMessages id="order.procedure.backPage" />
        </BackButton>
      </Link>
      <SubmitButton onClick={handleSubmit}>{title}</SubmitButton>
    </OrderButtonContainer>
  );
};

export default OrderButtons;
