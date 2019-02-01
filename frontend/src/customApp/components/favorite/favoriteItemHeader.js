import { ItemHeader } from "../shared/tabSlider/tabSliderItem";
import React from "react";
import styled from "styled-components";

const FavoriteHeadline = styled.div`
  color: rgb(163, 163, 163);
`;

const FavoriteTitle = styled.h2`
  width: 100%;
  margin: 0;
  line-height: 16px;
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.65);
`;

const FavoriteItemHeader = ({ item }) => {
  const { headline, item_name } = item;
  return (
    <ItemHeader>
      <FavoriteHeadline>{headline}</FavoriteHeadline>
      <FavoriteTitle>{item_name}</FavoriteTitle>
    </ItemHeader>
  );
};

export default FavoriteItemHeader;
