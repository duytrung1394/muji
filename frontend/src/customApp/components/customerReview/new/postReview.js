import React, { Fragment } from "react";
import styled from "styled-components";
import { Rate } from "antd";
import PostForm from "./postForm";
import IntlMessages from "../../../../components/utility/intlMessages";

const ReviewTitleArea = styled.div`
  text-align: left;
  font-size: 25px;
  font-weight: 600;
  margin: 20px 0;
`;

const StarWrapper = styled.div``;

const Star = styled(Rate)`
  &.ant-rate {
    font-size: 50px;
    color: #ff6600;
  }
`;

const PostReview = () => {
  return (
    <Fragment>
      <ReviewTitleArea>
        <IntlMessages id="customerReview.new.inputReview" />
      </ReviewTitleArea>
      <StarWrapper>
        <Star />
      </StarWrapper>
      <PostForm />
    </Fragment>
  );
};

export default PostReview;
