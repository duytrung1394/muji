import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Form, Input } from "antd";

const Container = styled.div`
  background-color: #fff;
`;

const StyledForm = styled(Form)``;

const FormArea = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
  width: 50%;
`;

const FormItem = styled.li`
  padding-top: 20px;
`;

const Label = styled.h2`
  font-size: 13px;
  font-weight: bold;
`;

const StyledInput = styled(Input)`
  box-shadow: rgba(88, 88, 88, 0.3) 0px 1px 3px 0px;
  && {
    width: 95px;
    height: 40px;
    font-size: 13px;
  }
`;

const TelForm = () => (
  <Container>
    <StyledForm>
      <FormArea>
        <FormItem>
          <Label>
            <IntlMessages id="delivery.add.form.tel" />
          </Label>
          <StyledInput placeholder="0339894191" />
        </FormItem>
      </FormArea>
    </StyledForm>
  </Container>
);

export default TelForm;
