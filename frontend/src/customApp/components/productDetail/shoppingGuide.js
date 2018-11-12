import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const StyledCol = styled(Col)`
  &&& {
    margin: 15px 0;
    padding: 15px;
    border: 1px solid #ddd;
    color: #333;
    background: #f7f7f7;
  }
`;

const Title = styled.h2`
  font-size: 14px;
`;

const ShoppingGuide = () => (
  <Row>
    <StyledCol span={24}>
      <Title>ショッピングガイド</Title>
    </StyledCol>
  </Row>
);

export default ShoppingGuide;
