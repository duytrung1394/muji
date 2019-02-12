import React, { Fragment } from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";

const StoreLink = styled.a`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #585858;
  line-height: 1;
  font-size: 12px;

  &:hover {
    color: #585858;
  }
`;

const StoreDetailData = styled.span`
  display: inline-block;
  width: 50%;
`;

const ListItem = ({ storeData }) => {
  return (
    <Fragment>
      {storeData.map((stock, index) => {
        return (
          <li key={index}>
            <StoreLink>
              <StoreDetailData>{stock.name}</StoreDetailData>
              <StoreDetailData>{stock.stock}</StoreDetailData>
            </StoreLink>
          </li>
        );
      })}
    </Fragment>
  );
};

export default ListItem;
