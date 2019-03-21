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
`;

const Wrapper = styled.div`
  background-color: rgb(253, 253, 253);
  box-shadow: rgba(88, 88, 88, 0.3) 0px 1px 3px 0px;
  padding: 16px;
`;

const ButtonArea = styled.div`
  margin-top: 30px;
  padding-bottom: 16px;
  text-align: center;
`;

const submit = () => {
  // TODO: Validation & API
  console.log("delivery input submit");
};

const IndexForm = ({ entity }) => (
  <Conteiner>
    <Wrapper>
      <Form>
        <NameForm entity={entity} />
        <AddressForm entity={entity} />
        <TelForm entity={entity} />
      </Form>
      <ButtonArea>
        <OutlineButton color="rgb(127, 0, 25)" reverse="true" onClick={submit}>
          <Link to={"#"}>
            <IntlMessages id="delivery.button.next" />
          </Link>
        </OutlineButton>
      </ButtonArea>
    </Wrapper>
  </Conteiner>
);

const Forms = Form.create({})(IndexForm);
export default Forms;
