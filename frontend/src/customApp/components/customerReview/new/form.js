import React, { Fragment } from "react";
import styled from "styled-components";
import { Rate, Upload, Button, Icon } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import { BaseContentLayout } from "../../panel/contentLayout";
import ConfirmButton from "../forms/confirmButton";
import Notices from "../notices";

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const Star = styled(Rate)`
  width: 100%;
  text-align: center;
  &.ant-rate {
    font-size: 50px;
    color: #ff6600;
  }
`;

const ContentLayout = styled(BaseContentLayout)`
  padding: 30px 50px;
  margin-bottom: 70px;
  background-color: #f7f7f7;
`;

const FormLabel = styled.label`
  display: block;
  text-align: left;
  margin: 40px 0 10px;
  font-size: 14px;
  color: #777;
  font-weight: 600;
`;

const Input = styled.input`
  border: 1px solid #eee;
  width: 100%;
`;

const Textarea = styled.textarea`
  border: 1px solid #eee;
  width: 100%;
  height: 100px;
`;

const UploadArea = styled.div`
  padding: 20px 0;
  width: 100%;
  text-align: center;
`;

const UploadButton = styled(Button)`
  &.ant-btn {
    font-size: 16px;
    color: #fff;
    background-color: #999999;
    font-weight: 600;
    height: 48px;
    width: 400px;
    border: none;
    border-radius: 24px;
  }
  && {
    &:hover {
      border: none;
      color: #fff;
      background-color: #999999;
    }
  }
`;

const UploadIcon = styled(Icon)`
  font-size: 20px;
`;

const Form = () => {
  return (
    <ContentLayout>
      <Title>
        <IntlMessages id="customerReview.new.inputReview" />
      </Title>
      <Star />
      <form>
        <FormLabel>
          <IntlMessages id="customerReview.new.inputReviewTitle" />
        </FormLabel>
        <Input
          type="text"
          name="title"
          placeholder={"タイトルを入力 (100文字以内)"}
        />
        <FormLabel>
          <IntlMessages id="customerReview.new.textAreaFormLabel" />
        </FormLabel>
        <Textarea
          type="text"
          placeholder={"レビューを入力　(30文字以上、10000文字以内)"}
        />
      </form>
      <FormLabel>
        <IntlMessages id="customerReview.new.image" />
      </FormLabel>
      <UploadArea>
        <UploadButton>
          <UploadIcon type="camera" />
          <IntlMessages id="customerReview.new.addImage" />
        </UploadButton>
      </UploadArea>
      <ConfirmButton
        // TOTO: onClick
        title={<IntlMessages id="customerReview.new.confirmButton" />}
      />
      <Notices />
    </ContentLayout>
  );
};

export default Form;
