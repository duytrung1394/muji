import React from "react";
import styled from "styled-components";
import { Card } from "antd";

const CardGrid = styled(Card.Grid)`
  width: 25% !important;
  box-shadow: none !important;
  img {
    width: 100%;
  }
`;

const Title = styled.div`
  color: #333;
  font-size: 12px;
  text-align: center;
`;

const Price = styled.div`
  font-size: 11px;
  text-align: center;
`;

const PriceValue = styled.span`
  color: ${props => (props.isOldPrice ? "#999" : "#333")};
  span {
    font-size: 15px;
    font-weight: bold;
    margin: 0 3px;
    font-family: "Helvetica", sans-serif;
  }
`;

const NewPriceValue = styled(PriceValue)`
  color: #7f0019;
  .arrow {
    color: #999;
    margin-left: 0 3px;
  }
`;

const ItemView = props => {
  const { swatches, title, price, new_price } = props;
  const image = `https://img.muji.net/img/item/${swatches[0].jancode}_400.jpg`;
  return (
    <CardGrid>
      <div>
        <img src={image} alt="" />
      </div>
      <Title>{title}</Title>
      <Price>
        <PriceValue isOldPrice={new_price}>
          {price.tax} <span>{price.num}</span>
          {price.currency}
        </PriceValue>
        {new_price && (
          <NewPriceValue>
            <span className="arrow">→</span>
            {new_price.tax} <span>{new_price.num}</span>
            {new_price.currency}
          </NewPriceValue>
        )}
      </Price>
    </CardGrid>
  );
};

export default ItemView;
