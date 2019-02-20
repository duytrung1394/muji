import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const colContentLayout = {
  xs: 24,
  sm: 24,
  md: 14,
  xl: 14
};

const colImageLayout = {
  xs: 24,
  sm: 24,
  md: 10,
  xl: 10
};

const Title = styled.h1`
  font-size: 19px;
  color: #585858;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 1.9;
`;

const LinkWrapper = styled.div`
  margin: 10px 0;
  text-align: right;
`;

const Preamble = ({ title, description, img }) => (
  <Row type="flex" gutter={32}>
    <Col {...colContentLayout}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <LinkWrapper>
        <Link to="">
          <IntlMessages id="productCategoryTop.link.viewDetail" />
        </Link>
      </LinkWrapper>
    </Col>
    <Col {...colImageLayout}>
      <img src={img} style={{ width: "100%" }} />
    </Col>
  </Row>
);

export default Preamble;
