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
  span {
    font-size: 15px;
    font-weight: bold;
    margin: 0 3px;
    font-family: "Helvetica", sans-serif;
  }
`;

const ItemView = props => {
  const { image, title, price } = props;
  return (
    <CardGrid>
      <div>
        <img src={image} alt=""/>
      </div>
      <Title>{title}</Title>
      <Price>
        {price.tax}{" "}<span>{price.num}</span> {price.currency}
      </Price>
    </CardGrid>
  );
};

export default ItemView;

