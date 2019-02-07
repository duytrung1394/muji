import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const CountaText = styled.h1`
  color: #000;
  font-size: 12px;
`;

const Counta = ({ total, first, end }) => {
  return (
    <CountaText>
      <IntlMessages
        id="search.counta"
        values={{
          total: total,
          from: first,
          to: end
        }}
      />
    </CountaText>
  );
};

export default Counta;
