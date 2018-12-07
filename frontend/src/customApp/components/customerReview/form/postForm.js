import React from "react";
import { Upload, Button, Icon } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import InputConfirmButton from "./inputConfirmButton";

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
`;
const Textarea = styled.textarea`
  border: 1px solid #eee;
`;
const Notices = styled.div`
  text-align: left;
  padding: 0 30px;
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

const Notice = styled.span`
  font-size: 14px;
`;

const PostForm = props => {
  return (
    <div>
      <form style={{ width: "700px" }}>
        <FormLabel>
          <IntlMessages id="customerReview.new.inputReviewTitle" />
        </FormLabel>
        <Input
          type="text"
          name="title"
          style={{ width: "700px" }}
          placeholder={"タイトルを入力 (100文字いない)"}
        />
        <FormLabel>
          <IntlMessages id="customerReview.new.textAreaFormLabel" />
        </FormLabel>
        <Textarea
          type="text"
          style={{ width: "700px", height: "100px" }}
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
      <InputConfirmButton />
      <Notices>
        <Notice>
          <IntlMessages id="customerReview.new.notice1Front" />
          <Link to={"/"}>
            <IntlMessages id="customerReview.new.noticeLink" />
          </Link>
          <IntlMessages id="customerReview.new.notice1Back" />
        </Notice>
        <br />
        <Notice>
          <IntlMessages id="customerReview.new.notice2" />
        </Notice>
        <br />
        <Notice>
          <IntlMessages id="customerReview.new.notice3" />
        </Notice>
      </Notices>
    </div>
  );
};

export default PostForm;
