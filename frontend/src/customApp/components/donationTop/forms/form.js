import React, { Component } from "react";
import { Row, Col, Input, Form as AntdForm } from "antd";
import { Link } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";

const formItemLayout = {
  labelCol: {
    span: 12
  },
  wrapperCol: {
    span: 12
  }
};

class Form extends Component {
  state = {
    entity: this.props.entity
  };

  updateEntity = (keyName, value) => {
    const entity = {
      ...this.state.entity,
      [keyName]: value
    };
    this.setState({ entity });
  };

  submit = () => {
    this.props.requestHandler(this.state.entity);
  };

  render() {
    const { entity } = this.props;
    return (
      <div>
        <h1>募金詳細</h1>
        <AntdForm>
          <AntdForm.Item label="種類" colon={false} {...formItemLayout}>
            <div>一口ボタン10円・一口ボタン100円</div>
          </AntdForm.Item>
          <Row>
            <Col span={12}>
              <Link to="/store/cmdty/donation">前のページに戻る</Link>
            </Col>
            <Col span={12}>
              <div>次へ進む</div>
            </Col>
          </Row>
        </AntdForm>
      </div>
    );
  }
}

export default Form;
