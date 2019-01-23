import React from "react";
import LargeButton from "../../shared/form/largeButton";
import styled from "styled-components";
import { Icon,Button } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const ButtonWrapper = styled.div`
  padding: 10px;
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

const ClippedButton = ({ seeMore }) => {
  return (
    <ButtonWrapper>
      <SeeMoreButton onClick={seeMore}>
      <IntlMessages id="customerReview.button.seeMore" />
        <StyledIcon type="down" />
      </SeeMoreButton>
    </ButtonWrapper>
  );
};

export default ClippedButton;
