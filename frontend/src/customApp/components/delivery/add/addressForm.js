import React, { Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Form, Input } from "antd";
import Button from "../button";

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

const ZipCode = styled.span`
  font-size: 19px;
  margin-right: 5px;
`;

const ZipCodeInput = styled(Input)`
  box-shadow: rgba(88, 88, 88, 0.3) 0px 1px 3px 0px;
  && {
    width: 88px;
    height: 40px;
    font-size: 13px;
    border: 1px solid rgb(153, 153, 153);
  }
`;

const AutofillButton = styled(Button)`
  width: 90px;
  height: 40px;
  font-weight: lighter;
  line-height: 40px;
  margin-left: 20px;
  background-color: rgb(153, 153, 153);
  color: rgb(255, 255, 255);
  box-shadow: none;
  border: none;
  cursor: pointer;
  outline: none;
  & span {
    padding: 0;
  }
`;

const Description = styled.p`
  font-size: 11px;
  margin-bottom: 0;
  margin-top: 8px;
`;

const StyledInput = styled(Input)`
  box-shadow: rgba(88, 88, 88, 0.3) 0px 1px 3px 0px;
  && {
    width: 300px;
    height: 40px;
    font-size: 13px;
    border: 1px solid rgb(153, 153, 153);
  }
`;

const AddressForm = () => (
  <Fragment>
    <StyledForm>
      <FormArea>
        <FormItem>
          <Label>
            <IntlMessages 
              id="delivery.add.form.zipCode"
              values={{ require: <IntlMessages id="delivery.add.form.require" /> }}
            />
          </Label>
          <ZipCode>
            <IntlMessages id="label.zipCode" />
          </ZipCode>
          <ZipCodeInput placeholder="1708424" />
          <AutofillButton>
            <IntlMessages id="delivery.button.autofill" />
          </AutofillButton>
          <Description>
            <IntlMessages id="delivery.add.form.zipCode.description1" />
            <IntlMessages id="delivery.add.form.zipCode.description2" />
          </Description>
        </FormItem>
        <FormItem>
          <Label>
            <IntlMessages 
              id="delivery.add.form.address1"
              values={{ require: <IntlMessages id="delivery.add.form.require" /> }}
            />
          </Label>
          <StyledInput placeholder="東京都豊島区" />
        </FormItem>
        <FormItem>
          <Label>
            <IntlMessages 
              id="delivery.add.form.address2"
              values={{ require: <IntlMessages id="delivery.add.form.require" /> }}
            />
          </Label>
          <StyledInput placeholder="東池袋" />
        </FormItem>
        <FormItem>
          <Label>
            <IntlMessages 
              id="delivery.add.form.address3"
              values={{ require: <IntlMessages id="delivery.add.form.require" /> }}
            />
          </Label>
          <StyledInput placeholder="4-26-3" />
        </FormItem>
        <FormItem>
          <Label>
            <IntlMessages 
              id="delivery.add.form.address4"
              values={{ require: <IntlMessages id="delivery.add.form.require" /> }}
            />
          </Label>
          <StyledInput placeholder="部屋番号がある場合は入力が必須となります" />
          <Description>
            <IntlMessages id="delivery.add.form.address.description" />
          </Description>
        </FormItem>
      </FormArea>
    </StyledForm>
  </Fragment>
);

export default AddressForm;
