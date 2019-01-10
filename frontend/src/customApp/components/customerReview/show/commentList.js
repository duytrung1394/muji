import React, { Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import Comment from "./comment";

const CommentTitle = styled.div`
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

const CommentListStyle = styled.div`
  margin-bottom: 10px;
`;

const NothingComment = styled.div`
  padding: 10px 0 20px;
  text-align: center;
  margin-bottom: 30px;
`;

const CommentList = ({ comments }) => (
  <div>
    <CommentTitle>
      <IntlMessages id="reviewDetail.comment" />
    </CommentTitle>
    <CommentListStyle>
      {comments && comments.length > 0 ? (
        comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))
      ) : (
        <NothingComment>
          <IntlMessages id="reviewDetail.nothingComment" />
        </NothingComment>
      )}
    </CommentListStyle>
  </div>
);

export default CommentList;
