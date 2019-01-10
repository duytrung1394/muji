import React from "react";
import styled from "styled-components";
import { Icon } from "antd";

const PostComment = styled.div`
  position: relative;
`;

const StyledTextArea = styled.textarea`
  max-width: 650px;
  width: 90%;
  height: 40px;
  background-color: #f7f7f7;
  over-flow: scroll;
  border: none;
  padding: 10px 0 0 10px;
  resize: none;
  border-radius: 20px;
  .ant-input {
    &:focus {
      border-color: #fff;
    }
  }
`;

const PostButton = styled.button`
  font-size: 36px;
  position: absolute;
  top: 0;
  right: 5px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  color: #d8d8d8;
`;

const CommentForm = () => {
  return (
    <PostComment>
      <StyledTextArea placeholder="コメントする" />
      <PostButton>
        <Icon type="mail" />
      </PostButton>
    </PostComment>
  );
};

export default CommentForm;
