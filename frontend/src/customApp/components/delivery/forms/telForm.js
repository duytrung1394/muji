import React, { Component, Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Form, Input } from "antd";

const StyledInput = styled(Input)`
  box-shadow: rgba(88, 88, 88, 0.3) 0px 1px 3px 0px;
  && {
    width: 120px;
    height: 40px;
    padding: 8px;
    font-size: 13px;
    border: 1px solid rgb(153, 153, 153);
  }
`;
const StyledLabel = styled.label`
  display: block;
`;

class TelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entity: props.entity
    };
  }

  getFormItemData = () => {
    return [
      {
        label: <IntlMessages id="delivery.form.label.tel" />,
        placeholder: "0339894191",
        value: this.state.entity.telNo
      }
    ];
  };

  render() {
    const formItemData = this.getFormItemData();
    return (
      <Fragment>
        {formItemData.map((item, index) => (
          <Form.Item key={index}>
            <StyledLabel>{item.label}</StyledLabel>
            <StyledInput placeholder={item.placeholder} value={item.value} />
          </Form.Item>
        ))}
      </Fragment>
    );
  }
}

export default TelForm;
