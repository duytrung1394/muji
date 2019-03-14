import React, { Component, Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Form, Input } from "antd";
import { OutlineButton } from "../../../components/shared/form/button";

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

const ZipCodeForm = ({ handler }) => {
  const { onChangeZipCode, onClickAutofill } = handler;
  return (
    <Fragment>
      <Form.Item
        label={<IntlMessages id="delivery.form.label.zipCode" />}
        extra={<IntlMessages id="delivery.form.zipCode.description" />}
      >
        <ZipCode>
          <IntlMessages id="label.zipCode" />
        </ZipCode>
        <ZipCodeInput onChange={onChangeZipCode} placeholder="1708424" />
        <AutofillButton
          width="92px"
          height="42px"
          color="rgb(153, 153, 153)"
          reverse="true"
          onClick={onClickAutofill}
        >
          <IntlMessages id="delivery.button.autofill" />
        </AutofillButton>
      </Form.Item>
    </Fragment>
  );
};

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

  getformItemData = () => {
    return [
      {
        label: <IntlMessages id="delivery.form.label.address1" />,
        placeholder: "東京都豊島区",
        address: this.state.entity.address1 + this.state.entity.address2
      },
      {
        label: <IntlMessages id="delivery.form.label.address2" />,
        placeholder: "東池袋",
        address: this.state.entity.address3
      },
      {
        label: <IntlMessages id="delivery.form.label.address3" />,
        placeholder: "4-26-3"
      },
      {
        label: <IntlMessages id="delivery.form.label.address4" />,
        placeholder: "部屋番号がある場合は入力が必須となります"
      }
    ];
  };

  onChangeZipCode = e => {
    this.updateState("zipCode", e.target.value);
  };

  onClickAutofill = () => {
    this.getAddress();
  };

  getAddress = () => {
    if (this.state.zipCode) {
      const entity = {
        ...this.state.entity,
        zipCode: "",
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
    const formItemData2 = this.getformItemData();
    return (
      <Fragment>
        <ZipCodeForm
          handler={{
            onChangeZipCode: this.onChangeZipCode,
            onClickAutofill: this.onClickAutofill
          }}
        />
        {formItemData2.map((item, index) => (
          <Form.Item key={index}>
            {item.label}
            <StyledInput placeholder={item.placeholder} value={item.address} />
          </Form.Item>
        ))}
      </Fragment>
    );
  }
}

export default AddressForm;
