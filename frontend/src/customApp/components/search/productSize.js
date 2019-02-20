import React from "react";
import styled from "styled-components";

const ProductSizeWrapper = styled.div`
  margin-top: 10px;
  padding: 0 15px;
  display: flex;
  align-items: center;
`;

const SizeSpan = styled.span`
  padding: 0 5px;
  line-height: 14px;
  border: 1px solid #999;
  font-size: 12px;
  color: #999;
`;

const CenterSpan = styled.span`
  padding: 0 5px;
  border: none;
  font-size: 11px;
  color: #999;
`;

const sizeLabels = { 0: "S", 1: "M", 2: "L", 3: "XL" };

const ProductSize = ({ sizeList }) => {
  if (sizeList.length === 1) {
    return (
      <ProductSizeWrapper>
        <SizeSpan>{sizeLabels[sizeList[0]]}</SizeSpan>
      </ProductSizeWrapper>
    );
  } else {
    return (
      <ProductSizeWrapper>
        <SizeSpan>{sizeLabels[Math.min.apply(null, sizeList)]}</SizeSpan>
        <CenterSpan>〜</CenterSpan>
        <SizeSpan>{sizeLabels[Math.max.apply(null, sizeList)]}</SizeSpan>
      </ProductSizeWrapper>
    );
  }
};

export default ProductSize;
