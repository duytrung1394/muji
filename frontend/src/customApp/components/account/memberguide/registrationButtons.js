import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

import { OutlineButton } from "../../shared/form/button";

const ButtonArea = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const RegistrationButtons = () => {
  return (
    <ButtonArea>
      <OutlineButton color="#7f0119" reverse>
        <IntlMessages id="account.memberRegistration" />
      </OutlineButton>
    </ButtonArea>
  );
};

export default RegistrationButtons;
