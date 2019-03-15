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
        value: this.state.entity.name
      },
      {
        label: <IntlMessages id="delivery.form.label.nameKana" />,
        placeholder: "ムジルシタロウ",
        value: this.state.entity.nameKana
      }
    ];
  };

  render() {
    const formItemData = this.getFormItemData();
    return (
      <Fragment>
        {formItemData.map((item, index) => (
          <Form.Item key={index}>
            {item.label}
            <StyledInput placeholder={item.placeholder} value={item.value} />
          </Form.Item>
        ))}
      </Fragment>
    );
  }
}

export default NameForm;
