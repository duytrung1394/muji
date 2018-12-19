import React from "react";
import { Upload, Button, Icon } from "antd";
import { Link } from "../../../components/form/link";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import ConfirmButton from "../forms/confirmButton";

const PostFormWrapper = styled.div`
  form {
    width: 700px;
  }
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
  width: 700px;
`;
const Textarea = styled.textarea`
  border: 1px solid #eee;
  width: 700px;
  height: 100px;
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
const UploadArea = styled.div`
  border: 3px dashed #ccc;
  padding: 20px 0;
  width: 700px;
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

const onClickInputConfirm = () => {
  console.log("onClickInputConfirmButton");
};

const PostForm = props => {
  return (
    <PostFormWrapper>
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
        <Upload {...props}>
          <UploadButton>
            <UploadIcon type="camera" />
            <IntlMessages id="customerReview.new.addImage" />
          </UploadButton>
        </Upload>
      </UploadArea>
      <ConfirmButton
        onClick={onClickInputConfirm}
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
    </PostFormWrapper>
  );
};

export default PostForm;
