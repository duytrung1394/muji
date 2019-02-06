import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";

const SearchOtherHeaderH1 = styled.h1`
  line-height: 1;
  margin: 20px 0 0;
  color: #585858;
  font-size: 15px;
  font-weight: normal;
`;

const SearchOtherHeader = ({}) => {
  return <SearchOtherHeaderH1>店舗以外の検索結果</SearchOtherHeaderH1>;
};

export default SearchOtherHeader;
