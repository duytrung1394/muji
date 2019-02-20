import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const PageRangeText = styled.p`
  color: #000;
  font-size: 12px;
`;

const PageRange = ({ total, first, end }) => {
  return (
    <PageRangeText>
      <IntlMessages
        id="search.pageRangeText"
        values={{
          total: total,
          from: first,
          to: end
        }}
      />
    </PageRangeText>
  );
};

export default PageRange;
