import React, { Component, Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Form, Input } from "antd";

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

const formItemData = [
  {
    label: <IntlMessages id="delivery.form.label.tel" />,
    placeholder: "0339894191"
  }
];

class TelForm extends Component {
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

export default TelForm;
