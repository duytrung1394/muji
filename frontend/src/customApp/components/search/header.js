import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const SearchHeaderH1 = styled.h1`
  line-height: 1;
  margin-top: 13px;
  margin-left: 16px;
  padding-bottom: 30px;
  color: #000;
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 0.25px;
`;

const SearchHeader = ({ keyword }) => {
  return (
    <SearchHeaderH1>
      <IntlMessages
        id="search.header"
        values={{
          keyword: keyword
        }}
      />
    </SearchHeaderH1>
  );
};

export default SearchHeader;
