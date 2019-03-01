import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

import { OutlineButton } from "../../shared/form/button";

const ButtonArea = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const RegistrationButton = styled(OutlineButton)`
  max-width: 300px;
  width: 100%;
  &&{
    height: 40px;
  }
`;

const RegistrationButtons = () => {
  return (
    <ButtonArea>
      <RegistrationButton color="#7f0119" reverse>
        <IntlMessages id="account.memberRegistration" />
      </RegistrationButton>
    </ButtonArea>
  );
};

export default RegistrationButtons;
