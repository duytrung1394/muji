import React from "react";
import styled from "styled-components";

const StyledContentsBox = styled.div`
  padding: 16px 16px 16px;
  margin-top: 20px;
  margin-bottom: 32px;
  background-color: #f2f2f2;
`;

const ContentsBox = props => (
  <StyledContentsBox {...props}>{props.children}</StyledContentsBox>
);

export default ContentsBox;
