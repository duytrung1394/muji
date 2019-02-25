import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import Filter from "../../components/productCategoryTop/itemList/filter";

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PageRangeText = styled.p`
  color: #000;
  font-size: 12px;
`;

const PageRange = ({ total, first, end }) => {
  return (
    <Bar>
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
      <Filter />
    </Bar>
  );
};

export default PageRange;
