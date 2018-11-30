import React from "react";
import { Upload, message, Button, Icon } from 'antd';
import InputConfButton from "./inputConfButton";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FormLabel = styled.label`
  display:block;
  text-align:left;
  margin:40px 0 10px;
  font-size:14px;
  color:#777;
  font-weight:600;
`
const Input = styled.input`
  border: 1px solid #eee;
`
const Textarea = styled.textarea`
  border: 1px solid #eee;
`
const Notices = styled.div`
  text-align:left;
  padding:0 30px;
`
const UploadButton = styled(Button)`
&.ant-btn{
  font-size: 16px;
  color:#fff;
  background-color: #999999; 
  font-weight:600;
  height:40px;
  border:none;
}
&&{
  &:hover{
    border:none;
    color: #fff;
    background-color: #999999;
  }
}
`
const UploadArea = styled.div`
  border:3px dashed #ccc;
  padding:20px 0;
  width:700px;
`

const UploadIcon = styled(Icon)`
  font-size:20px;
`

const Notice = styled.span`
  font-size: 14px;
`

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const PostForm =()=>{
  return(
    <div>
      <form style={{width:"700px"}}>
      <FormLabel>タイトルを入力</FormLabel>
      <Input type="text" name="title" style={{width:"700px"}} placeholder={"タイトルを入力　(100文字以内)"}/>
      <FormLabel>レビューを入力</FormLabel>
      <Textarea type="text" style={{width:"700px",height:"100px"}} placeholder={"レビューを入力　(30文字以上、1000文字以内)"}></Textarea>
      </form>
      <FormLabel>写真</FormLabel>
      <UploadArea>
      <Upload {...props}>
        <UploadButton >
          <UploadIcon type="camera" /> 写真を追加
        </UploadButton>
      </Upload>
      </UploadArea>
      <InputConfButton/>
      <Notices>
      <Notice>※お客様はレビューの投稿をされることにより、<Link to={"/"}>利用規約</Link>に同意されたものとみなされます</Notice>
      <br/>
      <Notice>※個人を特定できるような投稿にはご注意ください</Notice>
      <br/>
      <Notice>※レビュー投稿でMUJIマイルは付与されません</Notice>
      </Notices>
    </div>    
  )
}

export default PostForm;