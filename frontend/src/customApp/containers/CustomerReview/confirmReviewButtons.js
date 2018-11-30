import React from "react";
import styled from "styled-components";
import LargeButton from "../../components/form/largeButton.js";
import IntlMessages from "../../../components/utility/intlMessages";

const ButtonWrapper = styled.div`
  padding-top: 10px;
  text-align: center;
`;

const ChangeReviewButton = styled(LargeButton)`
  width: 400px;
  height:40px
  border: none;
  background-color: #999;
  border-radius: 24px;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  margin:12px 0;
  font-weight:600;

  &{
      padding:14px 0;
      border:none;
  }

  &:hover{
    color:#fff;
  }
`;

const PostButton = styled(LargeButton)`
  width: 400px;
  height:40px
  border: none;
  background-color: #191919;
  border-radius: 24px;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  margin:12px 0;
  font-weight:600;

  &{
      padding:14px 0;
      border:none;
  }

  &:hover{
    color:#fff;
  }
`;

const ConfirmReviewButttons =()=> {
  return (
    <ButtonWrapper>
      <ChangeReviewButton>
        <IntlMessages id="reviewPost.changeButton"/>
      </ChangeReviewButton>
      <PostButton>
        <IntlMessages id="reviewPost.postButton"/>
      </PostButton>
    </ButtonWrapper>
  );
};

export default ConfirmReviewButttons;