import React from "react";
import styled from "styled-components";
import NameForm from "./nameForm";
import AddressForm from "./addressForm";
import TelForm from "./telForm";
import { OutlineButton } from "../../../../customApp/components/shared/form/button";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Link } from "react-router-dom";

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

const NextButton = styled(OutlineButton)`
  &&& {
    width: 298px;
    height: 38px;
    font-weight: lighter;
    color: rgb(255, 255, 255);
    border: rgb(127, 0, 25);
    background: rgb(127, 0, 25);
  }
`;

const Forms = () => (
  <Conteiner>
    <Wrapper>
      <NameForm />
      <AddressForm />
      <TelForm />
      <ButtonArea>
        <Link to={"#"}>
          <NextButton>
            <IntlMessages id="delivery.button.next" />
          </NextButton>
        </Link>
      </ButtonArea>
    </Wrapper>
  </Conteiner>
);

export default Forms;
