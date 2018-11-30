import React, { Component } from "react";
import { Row, Col, Input, Form as AntdForm, Select } from "antd";
import { Link } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Button } from "./button";
import styled from "styled-components";

const StyledH3 = styled.h3`
  font-size: 13px;
  font-weight: bold;
  margin-top: 13px;
`;

const StyledForm = styled(AntdForm)`
  .ant-form-item {
    border: 1px solid #eeeeee;
    margin: 0;
    background: #f5f5f5;
    display: flex;
    align-items: center;
  }
  &&& .ant-form-item-label {
    text-align: left;
    padding-left: 20px;
    font-weight: bold;
    span span {
      font-size: 11px;
      font-weight: normal;
      padding-left: 5px;
    }
  }
  &&& .ant-form-item-control-wrapper {
    background: white;
    padding: 5px;
  }
  .description {
    font-size: 11px;
    line-height: 11px;
    background: #f5f2e9;
    padding: 5px;
    border-radius: 5px;
  }
`;

const InnerFormItem = styled(AntdForm.Item)`
  &&& {
    border: none;
  }
`;

const ColSpan = props => (
  <Col span={props.span}>
    <span
      style={{ display: "inline-block", width: "100%", textAlign: "center" }}
    >
      {props.children}
    </span>
  </Col>
);

const formItemLayout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
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
      className="outer-item"
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
      <div>
        <StyledH3>お届け先情報</StyledH3>

        <StyledForm>
          <FormItem labelId="customerAddress.attributes.name" required={true}>
            {actionType === "new" ? (
              <Row>
                <ColSpan span={1}>
                  <IntlMessages id="label.familyName" />:
                </ColSpan>
                <Col span={5}>
                  <InnerFormItem>
                    <Input
                      value={this.state.entity.familyName}
                      size="small"
                      onChange={e =>
                        this.updateEntity("familyName", e.target.value)
                      }
                    />
                  </InnerFormItem>
                </Col>
                <ColSpan span={1}>
                  <IntlMessages id="label.firstName" />:
                </ColSpan>
                <Col span={5}>
                  <InnerFormItem>
                    <Input
                      value={this.state.entity.firstName}
                      size="small"
                      onChange={e =>
                        this.updateEntity("firstName", e.target.value)
                      }
                    />
                  </InnerFormItem>
                </Col>
              </Row>
            ) : (
              <Col span={10}>
                <Input
                  value={this.state.entity.name}
                  onChange={e => this.updateEntity("name", e.target.value)}
                />
              </Col>
            )}
            <Row>
              <IntlMessages id="label.zenkaku" />
              <Col span={24}>
                <IntlMessages id="label.example.name" />
              </Col>
            </Row>
          </FormItem>
          <FormItem
            labelId="customerAddress.attributes.nameKana"
            required={true}
          >
            {actionType === "new" ? (
              <Row>
                <ColSpan span={1}>
                  <IntlMessages id="label.familyName" />:
                </ColSpan>
                <Col span={5}>
                  <InnerFormItem>
                    <Input
                      value={this.state.entity.familyNameKana}
                      size="small"
                      onChange={e =>
                        this.updateEntity("familyNameKana", e.target.value)
                      }
                    />
                  </InnerFormItem>
                </Col>
                <ColSpan span={1}>
                  <IntlMessages id="label.firstName" />:
                </ColSpan>
                <Col span={5}>
                  <InnerFormItem>
                    <Input
                      value={this.state.entity.firstNameKana}
                      size="small"
                      onChange={e =>
                        this.updateEntity("firstNameKana", e.target.value)
                      }
                    />
                  </InnerFormItem>
                </Col>
              </Row>
            ) : (
              <Col span={10}>
                <Input
                  value={this.state.entity.name_memo}
                  onChange={e => this.updateEntity("name_memo", e.target.value)}
                />
              </Col>
            )}
            <IntlMessages id="label.zenkaku" />
            <div>
              <IntlMessages id="label.example.nameKana" />
            </div>
          </FormItem>
          <FormItem
            labelId="customerAddress.attributes.zipCode"
            required={true}
          >
            <Row>
              <ColSpan span={1}>
                <IntlMessages id="label.zipCode" />
              </ColSpan>
              <Col span={3}>
                <InnerFormItem>
                  <Input
                    value={this.state.zip_code_1}
                    size="small"
                    onChange={e =>
                      this.updateZipCode("zip_code_1", e.target.value)
                    }
                  />
                </InnerFormItem>
              </Col>
              <ColSpan span={1}> - </ColSpan>
              <Col span={4}>
                <InnerFormItem>
                  <Input
                    value={this.state.zip_code_2}
                    size="small"
                    onChange={e =>
                      this.updateZipCode("zip_code_2", e.target.value)
                    }
                  />
                </InnerFormItem>
              </Col>
              <Col span={3}>
                <InnerFormItem>
                  <Button type="primary" size="small">
                    <IntlMessages id="customerAddress.button.addressDisplay" />
                  </Button>
                </InnerFormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <IntlMessages id="label.example.zipCode" />
              </Col>
            </Row>
            <Row>
              <Col span={20} className="description">
                <IntlMessages id="customerAddress.form.zipCode.description1" />
                <br />
                <IntlMessages id="customerAddress.form.zipCode.description2" />
              </Col>
            </Row>
          </FormItem>
          <FormItem
            labelId="customerAddress.attributes.address1"
            required={true}
          >
            <Row>
              <Col span={14}>
                <Select defaultValue={0} size="small">
                  <Select.Option value={0}>
                    {this.state.entity.address1}
                    {this.state.entity.address2}
                    {this.state.entity.address3 &&
                      `(${this.state.entity.address3})`}
                  </Select.Option>
                </Select>
              </Col>
              <Col span={10} className="description">
                郵便番号より自動検索されます
              </Col>
              <Col span={24}>例: 東京都 豊島区</Col>
            </Row>
          </FormItem>
          <FormItem
            labelId="customerAddress.attributes.address2"
            required={true}
          >
            <Col span={24}>
              <Input
                value={this.state.entity.address2}
                onChange={e => this.updateZipCode("address2", e.target.value)}
              />
            </Col>
          </FormItem>
          <FormItem
            labelId="customerAddress.attributes.address3"
            required={true}
          >
            <Col span={24}>
              <Input
                value={this.state.entity.address3}
                onChange={e => this.updateZipCode("address3", e.target.value)}
              />
            </Col>
          </FormItem>
          <FormItem labelId="customerAddress.attributes.address4">
            <Col span={24}>
              <Input
                value={this.state.entity.address4}
                onChange={e => this.updateZipCode("address4", e.target.value)}
              />
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
        </StyledForm>
      </div>
    );
  }
}

export default Form;
