import React, { Component, Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Form, Input } from "antd";

const StyledInput = styled(Input)`
  box-shadow: rgba(88, 88, 88, 0.3) 0 1px 3px 0;
  && {
    width: 300px;
    height: 40px;
    padding: 8px;
    font-size: 13px;
    border: 1px solid rgb(153, 153, 153);
  }
`;
const StyledLabel = styled.label`
  display: block;
`;

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entity: props.entity
    };
  }

  getFormItemData = () => {
    return [
      {
        label: <IntlMessages id="delivery.form.label.name" />,
        placeholder: "無印太郎",
        id: "name",
        value: this.state.entity.name
      },
      {
        label: <IntlMessages id="delivery.form.label.nameKana" />,
        placeholder: "ムジルシタロウ",
        id: "nameKana",
        value: this.state.entity.nameKana
      }
    ];
  };

  onChange = e => {
    this.updateState(e.target.id, e.target.value);
  };

  updateState = (keyName, value) => {
    const state = {
      ...this.state.entity,
      [keyName]: value
    };

    this.setState({
      entity: state
    });
  };

  render() {
    const formItemData = this.getFormItemData();
    return (
      <Fragment>
        {formItemData.map((item, index) => (
          <Form.Item key={index}>
            <StyledLabel>{item.label}</StyledLabel>
            <StyledInput
              placeholder={item.placeholder}
              value={item.value}
              id={item.id}
              onChange={this.onChange}
            />
          </Form.Item>
        ))}
      </Fragment>
    );
  }
}

export default NameForm;
