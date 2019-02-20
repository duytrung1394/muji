import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const ProductPriceWrapper = styled.div`
  padding: 10px 0;
  font-size: 11px;
  color: #000;
  text-align: center;
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

const ProductPrice = ({ priceList }) => (
  <ProductPriceWrapper>
    {(() => {
      if (priceList[0].hasPrePrice) {
        return (
          <span>
            <Del>
              <IntlMessages
                id="search.item.price"
                values={{
                  price: priceList[0].cancelPrice.toLocaleString()
                }}
              />
            </Del>
            <Arrow>→</Arrow>
            <Ins>
              <IntlMessages
                id="search.item.price"
                values={{
                  price: priceList[0].viewPrice.toLocaleString()
                }}
              />
            </Ins>
          </span>
        );
      } else {
        return (
          <span>
            <IntlMessages
              id="search.item.price"
              values={{
                price: priceList[0].viewPrice.toLocaleString()
              }}
            />
          </span>
        );
      }
    })()}
  </ProductPriceWrapper>
);

export default ProductPrice;
