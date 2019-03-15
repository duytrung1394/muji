import React from "react";
import styled from "styled-components";
import NameForm from "./nameForm";
import AddressForm from "./addressForm";
import TelForm from "./telForm";
import { OutlineButton } from "../../../../customApp/components/shared/form/button";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Link } from "react-router-dom";
import { Form } from "antd";

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

const Forms = ({entity}) => (
  <Conteiner>
    <Wrapper>
      <Form>
        <NameForm entity={entity}/>
        <AddressForm entity={entity}/>
        <TelForm entity={entity}/>
      </Form>
      <ButtonArea>
        <OutlineButton color="rgb(127, 0, 25)" reverse="true">
          <Link to={"#"}>
            <IntlMessages id="delivery.button.next" />
          </Link>
        </OutlineButton>
      </ButtonArea>
    </Wrapper>
  </Conteiner>
);

export default Forms;
