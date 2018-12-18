import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Icon } from "antd";

const Paging = styled.div`
  margin: 30px 0 20px;
`;

const StyledButton = styled.button`
  width: 50%;
  height: 40px;
  cursor: pointer;
  background-color: #f4f4f4;
  border: 1px solid #dadada;
  position: relative;
  color: #676767;
`;

const LeftArrowIcon = styled(Icon)`
  position: absolute;
  top: 12px;
  left: 10px;
`;

const RightArrowIcon = styled(Icon)`
  position: absolute;
  top: 12px;
  right: 10px;
`;

const ReviewPageing = () => {
  return (
    <Paging>
      <StyledButton>
        <LeftArrowIcon type="left" />
        <IntlMessages id="reviewDetail.previous" />
      </StyledButton>
      <StyledButton>
        <IntlMessages id="reviewDetail.next" />
        <RightArrowIcon type="right" />
      </StyledButton>
    </Paging>
  );
};

export default ReviewPageing;
