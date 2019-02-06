import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";

const CountaText = styled.h1`
  color: #000;
  font-size: 12px;
`;

const Counta = ({ total, first, end }) => {
  return (
    <CountaText>
      {total}件中 {first} 〜 {end}件を表示
    </CountaText>
  );
};

export default Counta;
