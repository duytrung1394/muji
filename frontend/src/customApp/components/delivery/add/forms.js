import React from "react";
import styled from "styled-components";
import NameForm from "./nameForm";
import AddressForm from "./addressForm";
import TelForm from "./telForm";
import Button from "../button";
import IntlMessages from "../../../../components/utility/intlMessages";

const Conteiner = styled.div`
  background: rgb(242, 242, 242);
  padding: 16px;
  margin: 30px 0;
`;

const Wrapper = styled.div`
  background-color: rgb(253, 253, 253);
  box-shadow: rgba(88, 88, 88, 0.3) 0px 1px 3px 0px;
  padding: 0 16px;
`;

const ButtonArea = styled.div`
  margin-top: 30px;
  padding-bottom: 30px;
  text-align: center;
`;

const NextButton = styled(Button)`
  width: 298px;
  height: 38px;
  font-weight: lighter;
  color: rgb(255, 255, 255);
  border: 1px solid rgb(127, 0, 25);
  background: rgb(127, 0, 25);
  cursor: pointer;
  outline: none;
`;

const Forms = () => (
  <Conteiner>
    <Wrapper>
      <NameForm />
      <AddressForm />
      <TelForm />
      <ButtonArea>
        <NextButton>
          <IntlMessages id="delivery.button.next" />
        </NextButton>
      </ButtonArea>
    </Wrapper>
  </Conteiner>
);

export default Forms;
