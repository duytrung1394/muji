import React from "react";
import { Upload, message, Button, Icon } from "antd";
import InputConfButton from "./inputConfButton";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

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

const props = {
  name: "file",
  action: "//jsonplaceholder.typicode.com/posts/",
  headers: {
    authorization: "authorization-text"
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

const PostForm = props => {
  const { changeView } = props;

  return (
    <div>
      <form style={{ width: "700px" }}>
        <FormLabel>
          <IntlMessages id="reviewPost.inputFormLabel" />
        </FormLabel>
        <Input
          type="text"
          name="title"
          style={{ width: "700px" }}
          placeholder={"タイトルを入力 (100文字いない)"}
        />
        <FormLabel>
          <IntlMessages id="reviewPost.textAreaFormLabel" />
        </FormLabel>
        <Textarea
          type="text"
          style={{ width: "700px", height: "100px" }}
          placeholder={"レビューを入力　(30文字以上、10000文字以内)"}
        />
      </form>
      <FormLabel>
        <IntlMessages id="reviewPost.image" />
      </FormLabel>
      <UploadArea>
        <Upload {...props}>
          <UploadButton>
            <UploadIcon type="camera" />
            <IntlMessages id="reviewPost.addImage" />
          </UploadButton>
        </Upload>
      </UploadArea>
      <InputConfButton changeView={changeView} />
      <Notices>
        <Notice>
          <IntlMessages id="reviewPost.notice1Front" />
          <Link to={"/"}>
            <IntlMessages id="reviewPost.noticeLink" />
          </Link>
          <IntlMessages id="reviewPost.notice1Back" />
        </Notice>
        <br />
        <Notice>
          <IntlMessages id="reviewPost.notice2" />
        </Notice>
        <br />
        <Notice>
          <IntlMessages id="reviewPost.notice3" />
        </Notice>
      </Notices>
    </div>
  );
};

export default PostForm;
