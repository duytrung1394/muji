import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const TitleArea = styled.h1`
  font-size: 19px;
`;

const Title = () => {
  return (
    <TitleArea>
      <IntlMessages id="review.history.reviewPostHistory" />
    </TitleArea>
  );
};

export default Title;
