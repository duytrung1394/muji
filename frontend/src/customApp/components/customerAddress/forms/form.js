import React, { Component } from "react";
import { Row, Col, Input, Form as AntdForm } from "antd";
import { Link } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Button } from "./button";
import styled from "styled-components";

const StyledForm = styled.div`
  h3 {
    font-size: 13px;
    font-weight: bold;
    margin-top: 13px;
  }
  .ant-form-item {
    border: 1px solid #eeeeee;
    margin: 0;
    background: #f5f5f5;
  }
  .ant-form-item-label {
    text-align: left;
  }
  .ant-form-item-control-wrapper {
    border-left: 1px solid #eeeeee;
    background: white;
  }
`;

const formItemLayout = {
  labelCol: {
    span: 10
  },
  wrapperCol: {
    span: 14
  }
};

const NextButton = styled(Button)`
  &&& {
    width: 160px;
    padding: 5px;
  }
`;

const FormItem = props => {
  let require = "";
  if (props.required) {
    require = <IntlMessages id="label.require" />;
  }
  return (
    <AntdForm.Item
      label={<IntlMessages id={props.labelId} values={{ require: require }} />}
      colon={false}
      {...formItemLayout}
    >
      {props.children}
    </AntdForm.Item>
  );
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entity: {
        ...this.props.entity,
        familyName: this.props.entity.familyName
          ? this.props.entity.familyName
          : "",
        firstName: this.props.entity.familyName
          ? this.props.entity.firstName
          : "",
        familyNameKana: this.props.entity.familyNameKana
          ? this.props.entity.familyNameKana
          : "",
        firstNameKana: this.props.entity.familyNameKana
          ? this.props.entity.firstNameKana
          : ""
      },
      ...this.getZipCodes(this.props.entity.zip_code)
    };
  }

  getZipCodes = zip_code => {
    let codes = ["", ""];
    if (zip_code) {
      codes = zip_code.split("-");
    }
    return { zip_code_1: codes[0], zip_code_2: codes[1] };
  };

  updateEntity = (keyName, value) => {
    const entity = {
      ...this.state.entity,
      [keyName]: value
    };
    this.setState({ entity });
  };

  updateZipCode = (keyName, value) => {
    const state = {
      ...this.state,
      [keyName]: value
    };
    this.setState(state);
  };

  submit = () => {
    let name = this.state.entity.name;
    let name_memo = this.state.entity.name_memo;
    if (this.props.actionType === "new") {
      name = `${this.state.entity.familyName}　${this.state.entity.firstName}`;
      name_memo = `${this.state.entity.familyNameKana}　${
        this.state.entity.firstNameKana
      }`;
    }
    const entity = {
      ...this.state.entity,
      name: name,
      name_memo: name_memo,
      zip_code: `${this.state.zip_code_1}-${this.state.zip_code_2}`
    };
    this.props.requestHandler(entity);
  };

  render() {
    const { actionType } = this.props;
    return (
      <StyledForm>
        <h3>お届け先情報</h3>

        <AntdForm>
          <FormItem labelId="customerAddress.attributes.name" required={true}>
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
          </FormItem>
          <FormItem
            labelId="customerAddress.attributes.nameKana"
            required={true}
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
                  value={this.state.entity.name_memo}
                  onChange={e => this.updateEntity("name_memo", e.target.value)}
                />
              </Col>
            )}
            (全角)
            <div>例: ムジルシ　タロウ</div>
          </FormItem>
          <FormItem
            labelId="customerAddress.attributes.zipCode"
            required={true}
          >
            <Col span={14}>
              <Row>
                <Col span={2}>〒</Col>
                <Col span={6}>
                  <Input
                    value={this.state.zip_code_1}
                    onChange={e =>
                      this.updateZipCode("zip_code_1", e.target.value)
                    }
                  />
                </Col>
                <Col span={8}>
                  <Input
                    value={this.state.zip_code_2}
                    onChange={e =>
                      this.updateZipCode("zip_code_2", e.target.value)
                    }
                  />
                </Col>
                <Col span={2}>
                  <Button type="primary">住所表示</Button>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div>例: 170-8424</div>
                </Col>
              </Row>
            </Col>
          </FormItem>
          <Row>
            <Col span={10}>
              <Link to="/store/cust/address/list">
                <IntlMessages id="customerAddress.link.back" />
              </Link>
            </Col>
            <Col span={14}>
              <NextButton onClick={this.submit} type="primary">
                <IntlMessages id="customerAddress.button.next" />
              </NextButton>
            </Col>
          </Row>
        </AntdForm>
      </StyledForm>
    );
  }
}

export default Form;
