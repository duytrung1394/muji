import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import IntlMessages from "../../../components/utility/intlMessages";
import Filter from "../../components/productCategoryTop/itemList/filter";

const StyledRow = styled(Row)`
  margin-bottom: 10px;
`;

const StyledCol = styled(Col)`
  color: #000;
  font-size: 12px;
`;

const PageRangeText = ({ total, first, end }) => {
  return (
    <StyledRow type="flex" justify="space-between" align="middle">
      <StyledCol>
        <IntlMessages
          id="search.pageRangeText"
          values={{
            total: total,
            from: first,
            to: end
          }}
        />
      </StyledCol>
      <Col>
        <Filter />
      </Col>
    </StyledRow>
  );
};

export default PageRangeText;
