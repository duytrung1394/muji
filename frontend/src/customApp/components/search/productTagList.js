import React from "react";
import styled from "styled-components";
import ProductItemList from "../../components/search/productItemList";

const TagListWrapper = styled.div`
  padding: 2px;
  width: 100%;
  overflow: auto;
`;

const ProductTagList = props => {
  return (
    <TagListWrapper>
      {props.tags &&
        props.tags.map((tag, index) => {
          return (
            <div key={index}>
              <h3>{tag.tagName}</h3>
              <ProductItemList productList={tag.searchResultProductList} />
            </div>
          );
        })}
    </TagListWrapper>
  );
};
export default ProductTagList;
