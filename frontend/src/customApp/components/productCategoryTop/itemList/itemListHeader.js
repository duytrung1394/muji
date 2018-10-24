import React from "react";
import styled from "styled-components";
import Refine from "./refine";
import IntlMessages from "../../../../components/utility/intlMessages";

const ItemListHeaderWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  padding: 15 10;
  .total {
    font-size: 18px;
  }
`;

const ItemListHeader = props => (
  <ItemListHeaderWrapper>
    <div>
      <IntlMessages id="productCategoryTop.label.item" />{" "}
      <span className="total">{props.total}</span>
    </div>
    <div>商品グループ順</div>
    <div>
      <Refine />
    </div>
  </ItemListHeaderWrapper>
);

export default ItemListHeader;
