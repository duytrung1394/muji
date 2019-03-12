import React, { Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Form, Input } from "antd";
import { OutlineButton } from "../../../components/shared/form/button";

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

const ZipCode = styled.span`
  font-size: 19px;
  margin-right: 5px;
`;

const ZipCodeInput = styled(Input)`
  box-shadow: rgba(88, 88, 88, 0.3) 0px 1px 3px 0px;
  && {
    width: 88px;
    height: 40px;
    padding: 8px;
    font-size: 13px;
    border: 1px solid rgb(153, 153, 153);
  }
`;

const AutofillButton = styled(OutlineButton)`
  margin-left: 20px;
  &&& {
    padding: 0;
  }
`;

const Description = styled.p`
  font-size: 11px;
  text-align: justify;
  line-height: 15px;
  margin-bottom: 0;
  margin-top: 8px;
`;

const StyledInput = styled(Input)`
  box-shadow: rgba(88, 88, 88, 0.3) 0px 1px 3px 0px;
  && {
    width: 300px;
    height: 40px;
    padding: 8px;
    font-size: 13px;
    border: 1px solid rgb(153, 153, 153);
  }
`;

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entity: {
        address1: "",
        address2: "",
        address3: "",
        zipCode: ""
      }
    };
  }

  getAddress = () => {
    // TODO: 本来は外部API呼び出し
    if (this.state.zipCode) {
      const entity = {
        ...this.state.entity,
        address1: "東京都",
        address2: "新宿区",
        address3: "新宿"
      };
      this.setState({ entity });
    }
  };

  updateState = (keyName, value) => {
    const state = {
      ...this.state,
      [keyName]: value
    };
    this.setState(state);
  };

  render() {
    return (
      <Form>
        <FormArea>
          <FormItem>
            <Label>
              <IntlMessages id="delivery.add.form.zipCode" />
            </Label>
            <ZipCode>
              <IntlMessages id="label.zipCode" />
            </ZipCode>
            <ZipCodeInput
              onChange={e => this.updateState("zipCode", e.target.value)}
              placeholder="1708424"
            />
            <AutofillButton
              width="92px"
              height="42px"
              color="rgb(153, 153, 153)"
              reverse="true"
              onClick={this.getAddress}
            >
              <IntlMessages id="delivery.button.autofill" />
            </AutofillButton>
            <Description>
              <IntlMessages id="delivery.add.form.zipCode.description1" />
              <IntlMessages id="delivery.add.form.zipCode.description2" />
            </Description>
          </FormItem>
          <FormItem>
            <Label>
              <IntlMessages id="delivery.add.form.address1" />
            </Label>
            <StyledInput
              placeholder="東京都豊島区"
              value={this.state.entity.address1 + this.state.entity.address2}
            />
          </FormItem>
          <FormItem>
            <Label>
              <IntlMessages id="delivery.add.form.address2" />
            </Label>
            <StyledInput
              placeholder="東池袋"
              value={this.state.entity.address3}
            />
          </FormItem>
          <FormItem>
            <Label>
              <IntlMessages id="delivery.add.form.address3" />
            </Label>
            <StyledInput
              placeholder="4-26-3"
              value={this.state.entity.address4}
            />
          </FormItem>
          <FormItem>
            <Label>
              <IntlMessages id="delivery.add.form.address4" />
            </Label>
            <StyledInput placeholder="部屋番号がある場合は入力が必須となります" />
            <Description>
              <IntlMessages id="delivery.add.form.address.description" />
            </Description>
          </FormItem>
        </FormArea>
      </Form>
    );
  }
}

export default AddressForm;
