import React, { Component } from "react";
import { Row, Col, Input, Form as AntdForm } from "antd";
import { Link } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Button } from "./button";
import styled from "styled-components";

const StyledDiv = styled.div`
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
    <StyledDiv>
      <h3>お届け先情報</h3>
      <AntdForm>
        <FormItem labelId="customerAddress.attributes.name">
          <span>{entity.name}</span>
        </FormItem>
        <FormItem labelId="customerAddress.attributes.nameKana">
          <span>{entity.name_memo}</span>
        </FormItem>
        <FormItem labelId="customerAddress.attributes.zipCode">
          <span>{entity.zip_code}</span>
        </FormItem>
        <Row>
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
        </Row>
      </AntdForm>
    </StyledDiv>
  );
};

export default Confirm;
