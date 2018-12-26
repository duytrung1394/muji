import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Filter from "./filter";
import IntlMessages from "../../../../components/utility/intlMessages";

const ItemListHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  padding: 15 10;
`;

const SortLinkWrapper = styled.span`
  :after {
    padding: 0 10px;
    content: "/";
  }
  :last-child:after {
    content: none;
  }
`;

const sortLinkList = [
  {
    sortKey: "DEFAULT",
    direction: "DESC"
  },
  {
    sortKey: "SALES_START_TIMESTAMP",
    direction: "DESC"
  },
  {
    sortKey: "PRICE_IN_VAT",
    direction: "ASC"
  },
  {
    sortKey: "RANKING",
    direction: "ASC"
  }
];

const SortLink = ({ sortKey, direction, children }) => {
  // 表示中のソートキーに一致したときはLinkをはずす
  // TODO: 正式には現在表示中のソートキーと比較する(暫定的に先頭の商品カテゴリ順を非リンクにしている)
  //       ex. sortKey === props.currentSortKey
  if (sortKey === "DEFAULT") {
    return children;
  }
  return (
    <Link to={{ search: `?sort=${sortKey}&direction=${direction}` }}>
      {children}
    </Link>
  );
};

const ItemListHeader = props => (
  <ItemListHeaderWrapper>
    {sortLinkList.map(sortLink => (
      <SortLinkWrapper key={sortLink.sortKey}>
        <SortLink {...sortLink}>
          <IntlMessages
            id={`productCategoryTop.label.sort.${sortLink.sortKey}`}
          />
        </SortLink>
      </SortLinkWrapper>
    ))}
  </ItemListHeaderWrapper>
);

export default ItemListHeader;
