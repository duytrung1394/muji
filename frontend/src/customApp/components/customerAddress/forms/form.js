import React, { Component } from "react";
import { Row, Col, Input, Form as AntdForm, Select } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Button } from "./button";
import AddressSubtitle from "./addressSubtitle";

const StyledForm = styled(AntdForm)`
  .ant-form-item-control {
    line-height: 28px;
  }
  .ant-form-item {
    font-size: 11px;
    border: 1px solid #eeeeee;
    border-bottom: none;
    margin: 0;
    background: #f5f5f5;
    display: flex;
    align-items: center;
  }
  .required-label .ant-form-item-label {
    font-weight: bold;
  }
  &&& .ant-form-item-label {
    text-align: left;
    padding-left: 20px;
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
    line-height: 20px;
    background: #f5f2e9;
    padding: 5px 10px;
    border-radius: 5px;
    width: fit-content;
  }
  border-bottom: 1px solid #eeeeee;
`;

const StyledFormFooter = styled(Row)`
  margin: 20px 0;
  a {
    color: #333333;
    text-decoration: underline;
    :hover {
      color: #7f0019;
    }
  }
`;

const formItemLayout = {
  labelCol: {
    span: 9
  },
  wrapperCol: {
    span: 15
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
  let requiredLabel = "";
  if (props.required) {
    require = <IntlMessages id="label.require" />;
    requiredLabel = "required-label";
  }
  return (
    <AntdForm.Item
      className={requiredLabel}
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
        firstName: this.props.entity.firstName
          ? this.props.entity.firstName
          : "",
        familyNameKana: this.props.entity.familyNameKana
          ? this.props.entity.familyNameKana
          : "",
        firstNameKana: this.props.entity.firstNameKana
          ? this.props.entity.firstNameKana
          : ""
      },
      ...this.getZipCodes(this.props.entity.zip_code),
      ...this.getTelNumbers(this.props.entity.tel)
    };
  }

  getZipCodes = zip_code => {
    let codes = ["", ""];
    if (zip_code) {
      codes = zip_code.split("-");
    }
    return { zip_code_1: codes[0], zip_code_2: codes[1] };
  };

  getTelNumbers = tel_number => {
    let numbers = ["", "", ""];
    if (tel_number) {
      numbers = tel_number.split("-");
    }
    return { tel_1: numbers[0], tel_2: numbers[1], tel_3: numbers[2] };
  };

  updateEntity = (keyName, value) => {
    const entity = {
      ...this.state.entity,
      [keyName]: value
    };
    this.setState({ entity });
  };

  updateState = (keyName, value) => {
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
      zip_code: `${this.state.zip_code_1}-${this.state.zip_code_2}`,
      tel: `${this.state.tel_1}-${this.state.tel_2}-${this.state.tel_3}`
    };
    this.props.requestHandler(entity);
  };

  render() {
    const { actionType } = this.props;
    return (
      <div>
        <AddressSubtitle />
        <StyledForm>
          <FormItem labelId="customerAddress.attributes.name" required={true}>
            {actionType === "new" ? (
              <Row type="flex" justify="start" align="middle">
                <Col span={2}>
                  <IntlMessages id="label.familyName" /> :
                </Col>
                <Col span={7}>
                  <Input
                    value={this.state.entity.familyName}
                    size="small"
                    onChange={e =>
                      this.updateEntity("familyName", e.target.value)
                    }
                  />
                </Col>
                <Col span={2} offset={1}>
                  <IntlMessages id="label.firstName" /> :
                </Col>
                <Col span={7}>
                  <Input
                    value={this.state.entity.firstName}
                    size="small"
                    onChange={e =>
                      this.updateEntity("firstName", e.target.value)
                    }
                  />
                </Col>
                <Col span={3} offset={1}>
                  <IntlMessages id="label.zenkaku" />
                </Col>
              </Row>
            ) : (
              <Row type="flex" justify="start" align="middle">
                <Col span={15}>
                  <Input
                    value={this.state.entity.name}
                    size="small"
                    onChange={e => this.updateEntity("name", e.target.value)}
                  />
                </Col>
                <Col span={4} offset={1}>
                  <IntlMessages id="label.zenkaku" />
                </Col>
              </Row>
            )}
            <Row>
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
              <Row type="flex" justify="start" align="middle">
                <Col span={2}>
                  <IntlMessages id="label.familyName" /> :
                </Col>
                <Col span={7}>
                  <Input
                    value={this.state.entity.familyNameKana}
                    size="small"
                    onChange={e =>
                      this.updateEntity("familyNameKana", e.target.value)
                    }
                  />
                </Col>
                <Col span={2} offset={1}>
                  <IntlMessages id="label.firstName" /> :
                </Col>
                <Col span={7}>
                  <Input
                    value={this.state.entity.firstNameKana}
                    size="small"
                    onChange={e =>
                      this.updateEntity("firstNameKana", e.target.value)
                    }
                  />
                </Col>
                <Col span={3} offset={1}>
                  <IntlMessages id="label.zenkaku" />
                </Col>
              </Row>
            ) : (
              <Row type="flex" justify="start" align="middle">
                <Col span={15}>
                  <Input
                    size="small"
                    value={this.state.entity.name_memo}
                    onChange={e =>
                      this.updateEntity("name_memo", e.target.value)
                    }
                  />
                </Col>
                <Col span={4} offset={1}>
                  <IntlMessages id="label.zenkaku" />
                </Col>
              </Row>
            )}
            <div>
              <IntlMessages id="label.example.nameKana" />
            </div>
          </FormItem>
          <FormItem
            labelId="customerAddress.attributes.zipCode"
            required={true}
          >
            <Row type="flex" justify="start" align="middle">
              <Col span={1}>
                <IntlMessages id="label.zipCode" />
              </Col>
              <Col span={3}>
                <Input
                  value={this.state.zip_code_1}
                  size="small"
                  onChange={e => this.updateState("zip_code_1", e.target.value)}
                />
              </Col>
              <Col
                span={1}
                style={{ paddingLeft: "5px", paddingRight: "10px" }}
              >
                -
              </Col>
              <Col span={4}>
                <Input
                  value={this.state.zip_code_2}
                  size="small"
                  onChange={e => this.updateState("zip_code_2", e.target.value)}
                />
              </Col>
              <Col span={3} offset={1}>
                <Button type="primary" size="small">
                  <IntlMessages id="customerAddress.button.addressDisplay" />
                </Button>
              </Col>
              <Col span={4} offset={1}>
                <IntlMessages id="label.number" />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <IntlMessages id="label.example.zipCode" />
              </Col>
            </Row>
            <Row>
              <Col span={24} className="description">
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
            <Row gutter={8} type="flex" justify="start" align="middle">
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
                <IntlMessages id="customerAddress.form.address1.description" />
              </Col>
              <Col span={24}>
                <IntlMessages id="label.example.address1" />
              </Col>
            </Row>
          </FormItem>

          <FormItem
            labelId={
              actionType === "edit"
                ? "customerAddress.attributes.address3"
                : "customerAddress.attributes.address3ForNew"
            }
            required={true}
          >
            <Row type="flex" justify="start" align="middle">
              <Col span={18}>
                <Input
                  size="small"
                  value={this.state.entity.address3}
                  onChange={e => this.updateEntity("address3", e.target.value)}
                />
              </Col>
              <Col span={4} offset={1}>
                <IntlMessages id="label.zenkaku" />
              </Col>
              <Col span={24}>
                {actionType === "edit" ? (
                  <IntlMessages id="label.example.address3" />
                ) : (
                  <IntlMessages id="label.example.address3ForNew" />
                )}
              </Col>
            </Row>
          </FormItem>

          {actionType === "new" && (
            <FormItem
              labelId="customerAddress.attributes.blockNumber"
              required={true}
            >
              <Row type="flex" justify="start" align="middle">
                <Col span={18}>
                  <Input
                    size="small"
                    value={this.state.entity.block_number}
                    onChange={e =>
                      this.updateEntity("block_number", e.target.value)
                    }
                  />
                </Col>
                <Col span={4} offset={1}>
                  <IntlMessages id="label.zenkaku" />
                </Col>
                <Col span={24}>
                  <IntlMessages id="label.example.blockNumber" />
                </Col>
                <Col span={20} className="description">
                  <IntlMessages id="customerAddress.form.blockNumber.description" />
                </Col>
              </Row>
            </FormItem>
          )}

          <FormItem labelId="customerAddress.attributes.address4">
            <Row type="flex" justify="start" align="middle">
              <Col span={18}>
                <Input
                  size="small"
                  value={this.state.entity.address4}
                  onChange={e => this.updateEntity("address4", e.target.value)}
                />
              </Col>
              <Col span={4} offset={1}>
                <IntlMessages id="label.zenkaku" />
              </Col>
              <Col span={24}>
                <IntlMessages id="label.example.address4" />
              </Col>
              <Col span={20} className="description">
                <IntlMessages id="customerAddress.form.address4.description" />
              </Col>
            </Row>
          </FormItem>

          {actionType === "new" && (
            <FormItem labelId="customerAddress.attributes.care">
              <Row gutter={8} type="flex" justify="start" align="middle">
                <Col span={14}>
                  <Input
                    size="small"
                    value={this.state.entity.care}
                    onChange={e => this.updateEntity("care", e.target.value)}
                  />
                </Col>
                <Col span={3}>
                  <IntlMessages id="customerAddress.attributes.care" />
                </Col>
                <Col span={4} offset={1}>
                  <IntlMessages id="label.zenkaku" />
                </Col>
              </Row>
            </FormItem>
          )}

          <FormItem labelId="customerAddress.attributes.tel" required={true}>
            <Row type="flex" justify="start" align="middle">
              <Col span={3}>
                <Input
                  value={this.state.tel_1}
                  size="small"
                  onChange={e => this.updateState("tel_1", e.target.value)}
                />
              </Col>
              <Col
                span={1}
                style={{ paddingLeft: "5px", paddingRight: "10px" }}
              >
                -
              </Col>
              <Col span={3}>
                <Input
                  value={this.state.tel_2}
                  size="small"
                  onChange={e => this.updateState("tel_2", e.target.value)}
                />
              </Col>
              <Col
                span={1}
                style={{ paddingLeft: "5px", paddingRight: "10px" }}
              >
                -
              </Col>
              <Col span={3}>
                <Input
                  value={this.state.tel_3}
                  size="small"
                  onChange={e => this.updateState("tel_3", e.target.value)}
                />
              </Col>
              <Col span={4} offset={1}>
                <IntlMessages id="label.number" />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <IntlMessages id="label.example.telNumber" />
              </Col>
            </Row>
          </FormItem>
        </StyledForm>

        <StyledFormFooter type="flex" jsuttify="start" align="middle">
          <Col span={9}>
            <Link to="/store/cust/address/list">
              <IntlMessages id="customerAddress.link.back" />
            </Link>
          </Col>
          <Col span={15}>
            <NextButton onClick={this.submit} type="primary">
              <IntlMessages id="customerAddress.button.next" />
            </NextButton>
          </Col>
        </StyledFormFooter>
      </div>
    );
  }
}

export default Form;
