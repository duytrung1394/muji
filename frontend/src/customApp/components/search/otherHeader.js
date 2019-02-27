import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const SearchOtherHeaderH2 = styled.h2`
  line-height: 1;
  margin: 20px 0 0;
  color: #585858;
  font-size: 15px;
  font-weight: normal;
`;

const SearchOtherHeader = props => {
  return (
    <SearchOtherHeaderH2>
      <IntlMessages id={"search." + props.title + ".other"} />
    </SearchOtherHeaderH2>
  );
};

export default SearchOtherHeader;
