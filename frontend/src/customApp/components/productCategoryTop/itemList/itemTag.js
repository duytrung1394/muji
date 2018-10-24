import React from "react";
import styled from "styled-components";

const Tags = styled.div`
  clear: both;
  text-align: center;
  font-size: 11px;
  height: 2em;
`;

const Tag = styled.span`
  padding: 0 5px;
`;

const tagNames = {
  new: "NEW",
  freeDelivery: "配送料無料",
  discount: "SALE",
  campaign: "期間限定価格"
};

const ItemTag = ({ tags, nostock }) => {
  return (
    <Tags>
      {nostock && <Tag>在庫なし</Tag>}
      {tags.map((tag, index) => <Tag key={index}>{tagNames[tag]}</Tag>)}
    </Tags>
  );
};

export default ItemTag;
