import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const Paging = styled.div`
  margin: 30px 0 20px;
`;

const StyledButton = styled.button`
  width: 50%;
  height: 40px;
  cursor: pointer;
  background-color: #f4f4f4;
  border: 1px solid #dadada;
`;

const ReviewPageing = () => {
  return (
    <Paging>
      <StyledButton>
        <IntlMessages id="reviewDetail.previous" />
      </StyledButton>
      <StyledButton>
        <IntlMessages id="reviewDetail.next" />
      </StyledButton>
    </Paging>
  );
};

export default ReviewPageing;
