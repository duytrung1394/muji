import React from "react";
import styled from "styled-components";

const StyledOrderTitle = styled.h1`
  line-height: 19px;
  width: 100%;
  color: rgb(0, 0, 0);
  font-size: 19px;
  letter-spacing: 0.25px;
`;

const Title = props => <StyledOrderTitle>{props.title}</StyledOrderTitle>;

export default Title;
