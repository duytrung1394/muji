import React from "react";
import styled from "styled-components";

const MainHeader = styled.section`
  line-height: 1;
  padding: 30px 16px 30px 0;
`;

const Title = styled.h1`
  color: #000;
  font-size: 19px;
  margin-bottom: 0;
`;

const CouponHeader = ({ title }) => {
  return (
    <MainHeader>
      <Title>{title}</Title>
    </MainHeader>
  );
};

export default CouponHeader;
