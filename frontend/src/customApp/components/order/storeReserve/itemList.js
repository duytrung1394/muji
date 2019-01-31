import React from "react";
import styled from "styled-components";
import StoreReserveItem from "./item.js";

const StoreReserveItemListWrapper = styled.div`
  float: left;
  list-style: none;
  position: relative;
  width: 100%;

  max-width: 1590px;
  margin: 10px auto 0;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const StoreReserveItemList = ({ itemList }) => {
  return (
    <StoreReserveItemListWrapper>
      {itemList.map((item, index) => {
        return <StoreReserveItem key={index} item={item} />;
      })}
    </StoreReserveItemListWrapper>
  );
};

export default StoreReserveItemList;
