import React from "react";
import styled from "styled-components";
import PurchaseItem from "./purchaseItem";

const PurchaseItemListWrapper = styled.div`
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

const PurchaseItemList = ({ purchaseItemList }) => {
  return (
    <PurchaseItemListWrapper>
      {purchaseItemList.map((purchaseItem, index) => {
        return <PurchaseItem key={index} purchaseItem={purchaseItem} />;
      })}
    </PurchaseItemListWrapper>
  );
};

export default PurchaseItemList;
