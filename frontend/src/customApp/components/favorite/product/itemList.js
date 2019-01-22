import React from "react";
import styled from "styled-components";
import FavoriteItem from "./item.js";

const FavoriteItemListWrapper = styled.div`
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

  div + & {
      margin-top: 0;
  }
`;

const FavoriteItemList = ({ itemList }) => {
  return (
    <FavoriteItemListWrapper>
      {itemList.map((item, index) => {
        return <FavoriteItem key={index} item={item} />;
      })}
    </FavoriteItemListWrapper>
  );
};

export default FavoriteItemList;
