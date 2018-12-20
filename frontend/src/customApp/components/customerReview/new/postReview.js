import React, { Fragment } from "react";
import styled from "styled-components";
import { Rate } from "antd";
import PostForm from "./postForm";
import IntlMessages from "../../../../components/utility/intlMessages";
import { BaseContentLayout } from "../../../components/panel/contentLayout";

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

const PostReview = () => {
  return (
    <ContentLayout>
      <Title>
        <IntlMessages id="customerReview.new.inputReview" />
      </Title>
      <Star />
      <PostForm />
    </ContentLayout>
  );
};

export default PostReview;
