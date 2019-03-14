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

const formItemData = [
  {
    label: <IntlMessages id="delivery.form.label.name" />,
    placeholder: "無印太郎"
  },
  {
    label: <IntlMessages id="delivery.form.label.nameKana" />,
    placeholder: "ムジルシタロウ"
  }
];

class NameForm extends Component {
  render() {
    return (
      <Fragment>
        {formItemData.map((item, index) => (
          <Form.Item key={index}>
            {item.label}
            <StyledInput placeholder={item.placeholder} />
          </Form.Item>
        ))}
      </Fragment>
    );
  }
}

export default NameForm;
