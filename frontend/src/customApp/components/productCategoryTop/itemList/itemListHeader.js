import React from "react";
import styled from "styled-components";

const ItemListHeaderWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  padding: 15 10;
  .item-number {
    font-size: 18px;
  }
`;

const ItemListHeader = props => (
  <ItemListHeaderWrapper>
    <span>
      アイテム <span className="item-number">567</span>
    </span>
    <span>商品グループ順</span>
    <span>絞り込み</span>
  </ItemListHeaderWrapper>
);

export default ItemListHeader;
