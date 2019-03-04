import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { OutlineButton } from "../../shared/form/button";
import { Link } from "react-router-dom";

const OrderButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BackButton = styled(OutlineButton)`
  padding: 8px 0 8px;
  width: 300px;
  max-width: 300px;
  height auto;
`;

const SubmitButton = styled(OutlineButton)`
  padding: 8px 0 8px;
  width: 300px;
  max-width: 300px;
  height auto;
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
      <SubmitButton onClick={handleSubmit} color={"#7f0019"} reverse={1}>
        {title}
      </SubmitButton>
    </OrderButtonContainer>
  );
};

export default OrderButtons;
