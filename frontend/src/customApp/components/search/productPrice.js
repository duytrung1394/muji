import React from "react";
import styled from "styled-components";

const ProductPriceWrapper = styled.div`
  padding: 10px 0;
  font-size: 11px;
  font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
    "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体", "Yu Gothic",
    YuGothic, Meiryo, メイリオ, "MS PGothic", Osaka, arial, sans-serif;
  color: #000;
  text-align: center;
`;

const Num = styled.span`
  padding: 0 3px;
  font-size: 11px;
  font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
    "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体", "Yu Gothic",
    YuGothic, Meiryo, メイリオ, "MS PGothic", Osaka, arial, sans-serif;
`;

const Del = styled.del`
  display: inline;
  text-decoration: line-through;
  color: #999;
`;

const Arrow = styled.del`
  margin: 0 5px;
  text-decoration: none;
  color: #999;
`;

const Ins = styled.ins`
  display: inline;
  color: #8b1a27;
  text-decoration: none;
`;

const InsNum = styled.span`
  color: #8b1a27;
`;

const ProductPrice = ({ priceList }) => (
  <ProductPriceWrapper>
    {(() => {
      if (priceList[0].hasPrePrice) {
        return (
          <span>
            <Del> 税込{priceList[0].cancelPrice.toLocaleString()}円</Del>
            <Arrow>→</Arrow>
            <Ins>
              税込<InsNum>{priceList[0].viewPrice.toLocaleString()}</InsNum>円
            </Ins>
          </span>
        );
      } else {
        return (
          <span>
            税込<Num>{priceList[0].viewPrice.toLocaleString()}</Num>円
          </span>
        );
      }
    })()}
  </ProductPriceWrapper>
);

export default ProductPrice;
