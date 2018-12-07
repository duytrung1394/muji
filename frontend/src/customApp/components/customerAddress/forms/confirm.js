import React from "react";
import { Row, Col, Form as AntdForm } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Button } from "./button";
import AddressSubtitle from "./addressSubtitle";

const StyledH3 = styled.h3`
  font-size: 13px;
  font-weight: bold;
  margin-top: 13px;
`;

const StyledForm = styled(AntdForm)`
  .ant-form-item {
    font-size: 13px;
    border: 1px solid #eeeeee;
    border-bottom: none;
    margin: 0;
    background: #f5f5f5;
    display: flex;
    align-items: center;
  }
  &&& .ant-form-item-label {
    text-align: left;
    padding-left: 20px;
  }
  &&& .ant-form-item-control-wrapper {
    background: white;
    padding: 5px 20px;
  }
  span:empty {
    padding: 26px 20px;
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
    span: 10
  },
  wrapperCol: {
    span: 14
  }
};

const SubmitButton = styled(Button)`
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

const Confirm = ({ entity, actionType, returnPathname, requestHandler }) => {
  return (
    <div>
      <AddressSubtitle />
      <StyledForm>
        <FormItem labelId="customerAddress.attributes.name">
          <span>{entity.name}</span>
        </FormItem>
        <FormItem labelId="customerAddress.attributes.nameKana">
          <span>{entity.name_memo}</span>
        </FormItem>
        <FormItem labelId="customerAddress.attributes.zipCode">
          <span>{entity.zip_code}</span>
        </FormItem>
        <FormItem labelId="customerAddress.attributes.confirm.address1">
          <span>{entity.address1}</span>
        </FormItem>
        <FormItem labelId="customerAddress.attributes.confirm.address2">
          <span>{entity.address2}</span>
        </FormItem>
        <FormItem labelId="customerAddress.attributes.confirm.address3">
          <span>{entity.address3}</span>
        </FormItem>
        {actionType === "new" && (
          <FormItem labelId="customerAddress.attributes.confirm.blockNumber">
            <span>{entity.block_number}</span>
          </FormItem>
        )}
        <FormItem labelId="customerAddress.attributes.confirm.address4">
          <span>{entity.address4}</span>
        </FormItem>
        {actionType === "new" && (
          <FormItem labelId="customerAddress.attributes.care">
            <span>{entity.care}</span>
            <IntlMessages id="customerAddress.attributes.care" />
          </FormItem>
        )}
        <FormItem labelId="customerAddress.attributes.tel">
          <span>{entity.tel}</span>
        </FormItem>
      </StyledForm>
      <StyledFormFooter type="flex" jsuttify="start" align="middle">
        <Col span={10}>
          <Link
            to={{
              pathname: returnPathname,
              state: { fromConfirm: true }
            }}
          >
            <IntlMessages id="customerAddress.link.back" />
          </Link>
        </Col>
        <Col span={14}>
          <SubmitButton onClick={requestHandler} type="primary">
            <IntlMessages id="customerAddress.button.submit" />
          </SubmitButton>
        </Col>
      </StyledFormFooter>
    </div>
  );
};

export default Confirm;
