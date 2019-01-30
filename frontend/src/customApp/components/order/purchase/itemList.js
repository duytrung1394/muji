import React from "react";
import styled from "styled-components";
import Item from "./item";
import { Col, Row } from "antd";

// ※ 後でCSSを足したくなりそうなので
const ItemListWrapper = styled.div`
`;

const ItemList = ({ purchaseItemList }) => {
  return (
    <ItemListWrapper>
      <Row gutter={{ xs: 0, sm: 8 }}>
        {purchaseItemList.map((purchaseItem, index) => {
          return (
            <Col lg={6} md={8} xs={24}>
              <Item key={index} purchaseItem={purchaseItem} />
            </Col>
          );
        })}
      </Row>
    </ItemListWrapper>
  );
};

export default ItemList;
