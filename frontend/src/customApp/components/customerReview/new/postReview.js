import React, { Fragment } from "react";
import styled from "styled-components";
import { Rate, Upload, Button, Icon } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import { BaseContentLayout } from "../../../components/panel/contentLayout";
import { Link } from "../../../components/form/link";
import ConfirmButton from "../forms/confirmButton";

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

const PostFormWrapper = styled.div`
  width: 700px;
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
    height: 40px;
    border: none;
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

const Notices = styled.div`
  text-align: left;
  padding: 0 30px;
`;

const Notice = styled.p`
  font-size: 14px;
  && {
    margin: 0px;
  }
`;

const PostReview = () => {
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
        <Upload>
          <UploadButton>
            <UploadIcon type="camera" />
            <IntlMessages id="customerReview.new.addImage" />
          </UploadButton>
        </Upload>
      </UploadArea>
      <ConfirmButton
        // onClick={}
        title={<IntlMessages id="customerReview.new.confirmButton" />}
      />
      <Notices>
        <Notice>
          <IntlMessages id="customerReview.new.notice1Front" />
          <Link to={"/"}>
            <IntlMessages id="customerReview.new.noticeLink" />
          </Link>
          <IntlMessages id="customerReview.new.notice1Back" />
        </Notice>
        <Notice>
          <IntlMessages id="customerReview.new.notice2" />
        </Notice>
        <Notice>
          <IntlMessages id="customerReview.new.notice3" />
        </Notice>
      </Notices>
    </ContentLayout>
  );
};

export default PostReview;
