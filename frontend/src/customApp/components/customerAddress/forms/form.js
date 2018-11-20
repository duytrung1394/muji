import React, { Component } from "react";
import { Row, Col, Input, Form as AntdForm } from "antd";
import { Link } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Button } from "./button";
import styled from "styled-components";

const formItemLayout = {
  labelCol: {
    span: 12
  },
  wrapperCol: {
    span: 12
  }
};

const NextButton = styled(Button)`
  width: 160px;
  padding: 5px;
`;

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
    const { actionType } = this.props;
    return (
      <div>
        <h3>お届け先情報</h3>
        <AntdForm>
          <AntdForm.Item label="お名前(必須)" colon={false} {...formItemLayout}>
            {actionType === "new" ? (
              <div>
                <Col span={1}>姓:</Col>
                <Col span={5}>
                  <Input
                    value={this.state.entity.familyName}
                    onChange={e =>
                      this.updateEntity("familyName", e.target.value)
                    }
                  />
                </Col>
                <Col span={1}>名:</Col>
                <Col span={5}>
                  <Input
                    value={this.state.entity.firstName}
                    onChange={e =>
                      this.updateEntity("firstName", e.target.value)
                    }
                  />
                </Col>
              </div>
            ) : (
              <Col span={10}>
                <Input
                  value={this.state.entity.name}
                  onChange={e => this.updateEntity("name", e.target.value)}
                />
              </Col>
            )}
            (全角)
            <div>例: 無印　太郎</div>
          </AntdForm.Item>
          <AntdForm.Item
            label="フリガナ(必須)"
            colon={false}
            {...formItemLayout}
          >
            {actionType === "new" ? (
              <div>
                <Col span={1}>姓:</Col>
                <Col span={5}>
                  <Input
                    value={this.state.entity.familyNameKana}
                    onChange={e =>
                      this.updateEntity("familyNameKana", e.target.value)
                    }
                  />
                </Col>
                <Col span={1}>名:</Col>
                <Col span={5}>
                  <Input
                    value={this.state.entity.firstNameKana}
                    onChange={e =>
                      this.updateEntity("firstNameKana", e.target.value)
                    }
                  />
                </Col>
              </div>
            ) : (
              <Col span={10}>
                <Input
                  value={this.state.entity.nameKana}
                  onChange={e => this.updateEntity("nameKana", e.target.value)}
                />
              </Col>
            )}
            (全角)
            <div>例: ムジルシ　タロウ</div>
          </AntdForm.Item>
          <Row>
            <Col span={12}>
              <Link to="/store/cust/address/list">前のページに戻る</Link>
            </Col>
            <Col span={12}>
              <NextButton onClick={this.submit}>次へ進む</NextButton>
            </Col>
          </Row>
        </AntdForm>
      </div>
    );
  }
}

export default Form;
