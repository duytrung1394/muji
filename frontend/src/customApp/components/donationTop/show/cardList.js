import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Card } from "antd";

const StyledRow = styled(Row)`
  margin-bottom: 55px;
`;

const StyledCol = styled(Col)`
  width: ${props => props.cardwidth};
  padding: 0 20px;
  margin-bottom: 20px;

  .ant-card-bordered {
    border: none;
  }

  .ant-card-meta-title {
    font-size: 17px;
  }

  .ant-card-meta-description {
    color: #333;
  }

  .ant-card-body {
    padding: 0;
    margin-bottom: 15px;
  }
`;

const CardList = ({ items, cardWidth }) => {
  if (items) {
    return (
      <StyledRow type="flex">
        {items.map((item, index) => {
          return (
            <StyledCol key={index} cardwidth={cardWidth}>
              <Card cover={<img src={item.img} />} />
              <Card.Meta title={item.title} description={item.description} />
            </StyledCol>
          );
        })}
      </StyledRow>
    );
  } else return null;
};

export default CardList;
