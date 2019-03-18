import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const MainTitle = styled.h1`
  font-size: 19px;
`;

const Title = () => {
  return (
    <MainTitle>
      <IntlMessages id="review.history.title" />
    </MainTitle>
  );
};

export default Title;
