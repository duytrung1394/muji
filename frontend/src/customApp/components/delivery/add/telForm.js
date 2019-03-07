import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Form, Input } from "antd";

const FormArea = styled.div`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
  width: 50%;
`;

const FormItem = styled(Form.Item)`
  &.ant-form-item {
    margin-bottom: 0;
  }
`;

const Label = styled.h2`
  color: rgb(88, 88, 88);
  letter-spacing: 0.54px;
  font-size: 13px;
  font-weight: bold;
`;

const StyledInput = styled(Input)`
  box-shadow: rgba(88, 88, 88, 0.3) 0px 1px 3px 0px;
  && {
    width: 95px;
    height: 40px;
    padding: 8px;
    font-size: 13px;
    border: 1px solid rgb(153, 153, 153);
  }
`;

const TelForm = () => (
  <Form>
    <FormArea>
      <FormItem>
        <Label>
          <IntlMessages
            id="delivery.add.form.tel"
            values={{
              require: <IntlMessages id="delivery.add.form.require" />
            }}
          />
        </Label>
        <StyledInput placeholder="0339894191" />
      </FormItem>
    </FormArea>
  </Form>
);

export default TelForm;
