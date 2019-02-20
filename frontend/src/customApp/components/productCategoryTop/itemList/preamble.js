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

const Description = styled.div`
  font-size: 16px;
  line-height: 1.9;
`;

const LinkWrapper = styled.div`
  margin: 10px 0;
  text-align: right;
`;

const PreambleWithImage = ({ title, description, img }) => {
  const Title = styled.h1`
    font-size: 19px;
    color: #585858;
  `;
  return (
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
};

const PreambleWithoutImage = ({ title, subtitle }) => {
  const Title = styled.h1`
    font-size: 15px;
    color: #999;
    text-align: center;
  `;
  const Subtitle = styled.h1`
    font-size: 19px;
    color: #585858;
    text-align: center;
  `;
  return (
    <div>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </div>
  );
};

const Preamble = props => {
  if (props.img) {
    return <PreambleWithImage {...props} />;
  } else {
    return <PreambleWithoutImage {...props} />;
  }
};

export default Preamble;
