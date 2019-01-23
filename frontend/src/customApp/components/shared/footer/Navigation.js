import React, { Component } from "react";
import { Col, Row } from "antd";
import styled from "styled-components";

const NavLink = styled.a`
  font-size: 12px;
  margin: 20px 10px;

  &,
  &:hover {
    color: #333;
  }
`;

const FlexCol = styled(Col)`
  flex: 1;
`;

export const Navigation = () => {
  return (
    <Row type="flex">
      <Col>
        <NavLink href="">日本</NavLink>
      </Col>
      <Col>
        <NavLink href="">個人情報の取り扱い</NavLink>
      </Col>
      <FlexCol>
        <NavLink href="">サイトマップ</NavLink>
      </FlexCol>
      <Col className="copy-right">
        <p>Copyright ©Ryohin Keikaku Co., Ltd.</p>
      </Col>
    </Row>
  );
};
