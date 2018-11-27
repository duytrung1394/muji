import React from "react";
import LargeButton from "../../form/largeButton";
import styled from "styled-components";
import { Icon } from "antd";

const ButtonWrapper = styled.li`
  padding-top: 10px;
  text-align: center;
`;

const SeeMoreButton = styled(LargeButton)`
  width: 120px;
  padding: 10px 0;
  border: none;
  background-color: #eee;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
`;

const StyledIcon = styled(Icon)`
  color: #666;
  font-size: 12px;
  padding-left: 5px;
`;

const ReviewButton = props => {
  const seeMore = () => {
    props.getCustomerReviewRequest({
      offset: props.customerReviews.length,
      length: 5
    });
  };

  return (
    <ButtonWrapper>
      <SeeMoreButton onClick={seeMore}>
        もっと見る
        <StyledIcon type="down" />
      </SeeMoreButton>
    </ButtonWrapper>
  );
};

export default ReviewButton;
