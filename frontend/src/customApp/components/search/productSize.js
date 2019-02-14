import React from "react";
import styled from "styled-components";

const ProductSizeWrapper = styled.div`
  margin-top: 10px;
  padding: 0 15px;
  font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
    "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体", "Yu Gothic",
    YuGothic, Meiryo, メイリオ, "MS PGothic", Osaka, arial, sans-serif;
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

const ProductSize = props => (
  <ProductSizeWrapper>
    <SizeSpan> {props.min}</SizeSpan>
    <CenterSpan>〜</CenterSpan>
    <SizeSpan>{props.max}</SizeSpan>
  </ProductSizeWrapper>
);

export default ProductSize;
