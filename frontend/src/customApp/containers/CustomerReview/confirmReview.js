import React from "react";
import { Rate, message, Button, Icon } from 'antd';
import ConfirmReviewButtons from "./confirmReviewButtons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const ReviewList = styled.ul`
  list-style:none;
  padding:0;
  box-shadow:0px 0px 1px 2px rgba(200,200,200,0.1);
`
const ReviewListStar = styled.li`
  background-color:#fff;
  margin:2px 0;
  padding:20px 0;
  font-size:14px;
`

const ReviewListItem = styled.li`
  background-color:#fff;
  margin:2px 0;
  padding:20px 15px;
  font-size:14px;
  text-align:left;
`

const Star = styled(Rate)`
    &.ant-rate{
        font-size:50px;
        color:#ff6600;
    }
`;

const ConfirmTitle = styled.h2`
    text-align:left;
    color: #191919;
    font-weight: 600;
    padding-bottom: 5px;
    font-size: 18px;
`;

const ConfirmReview=()=>{
  return(
    <div>
      <ConfirmTitle>
        <IntlMessages id="reviewPost.confirmTitle" />
      </ConfirmTitle>
      <ReviewList>
        <ReviewListStar>
          <Star disabled defaultValue={2} />
        </ReviewListStar>
        <ReviewListItem>
          <span>レビューのタイトル</span>
        </ReviewListItem>
        <ReviewListItem>
          <span>レビューの内容が来ます</span>
        </ReviewListItem>
      </ReviewList>
      <ConfirmReviewButtons />
    </div>    
  )
}

export default ConfirmReview;