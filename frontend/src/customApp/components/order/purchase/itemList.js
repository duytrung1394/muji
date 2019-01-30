import React from "react";
import styled from "styled-components";
import Item from "./item";
import { Col, Row } from "antd";
import mediaQuery from "../../../mediaQuery";

// ※↓ 必要か微妙ですが、サンプルとして。
const ItemListWrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  ${mediaQuery.lessThan("lg")`
    margin-left: 30px;
    margin-right: 30px;
  `}
  ${mediaQuery.lessThan("sm")`
    margin-left: 0;
    margin-right: 0;
  `}
`;

const ItemList = ({ purchaseItemList }) => {
  return (
    <ItemListWrapper>
      <Row gutter={{ xs: 0, sm: 8 }}>
        {purchaseItemList.map((purchaseItem, index) => {
          return (
            <Col lg={8} md={12} xs={24}>
              <Item key={index} purchaseItem={purchaseItem} />
            </Col>
          );
        })}
      </Row>
    </ItemListWrapper>
  );
};

export default ItemList;
