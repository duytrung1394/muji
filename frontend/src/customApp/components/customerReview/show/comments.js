import React, { Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Icon } from "antd";
import Comment from "./comment";
import Notices from "../notices";

const CommentTitle = styled.div`
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

const CommentList = styled.div`
  margin-bottom: 10px;
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

const PostComment = styled.div`
  position: relative;
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

const NothingComment = styled.div`
  padding: 10px 0 20px;
  text-align: center;
  margin-bottom: 30px;
`;

const SeeMore = styled.div`
  text-align: center;
  color: #9e9e9e;
  font-size: 14px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const SeeMoreIcon = styled(Icon)`
  font-size: 12px;
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

class Comments extends Component {
  constructor(props) {
    super(props);
  }

  seeMore = () => {
    console.log("click seeMore");
  };

  render() {
    const { comments } = this.props;
    return (
      <div>
        <CommentTitle>
          <IntlMessages id="reviewDetail.comment" />
        </CommentTitle>
        <CommentList>
          {comments && comments.length > 0 ? (
            comments.map((comment, index) => {
              return <Comment comment={comment} key={index} />;
            })
          ) : (
            <NothingComment>
              <IntlMessages id="reviewDetail.nothingComment" />
            </NothingComment>
          )}
          <SeeMore onClick={this.seeMore}>
            <SeeMoreIcon type="down" />
            <IntlMessages id="reviewDetail.seeMore" />
          </SeeMore>
        </CommentList>
        <CommentForm />
        <Notices value={"comment"} />
      </div>
    );
  }
}

export default Comments;
