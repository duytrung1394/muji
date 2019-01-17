import React from "react";
import styled from "styled-components";
import Item from "./item";

const ItemListWrapper = styled.div`
  float: left;
  list-style: none;
  position: relative;
  width: 100%;

  max-width: 1590px;
  margin: 10px auto 0;
  padding: 0 50px 16px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const ItemList = ({ purchaseItemList }) => {
  return (
    <ItemListWrapper>
      {purchaseItemList.map((purchaseItem, index) => {
        return <Item key={index} purchaseItem={purchaseItem} />;
      })}
    </ItemListWrapper>
  );
};

export default ItemList;
