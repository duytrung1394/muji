import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
import CategoryItems from "./categoryItemList";

export const CategoryName = styled.h1`
  font-size: 36px;
  margin-bottom: 4%;
  font-family: serif;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.8);
  padding: 30px 0 0 0;
  z-index: 2;

  @media screen and (max-width: 1300px) {
    font-size: 32px;
    position: absolute;
    padding-left: 0;
    top: -26vh;
    left: 2vh;
  }

  @media only screen and (max-width: 768px) {
    font-size: 22px;
    top: 50;
  }

  @media only screen and (max-width: 475px) {
    position: static;
    margin: 0;
    padding: 10px 20px;
  }
`;

export const StyledRow = styled(Row)`
  font-size: 14px;
  background: linear-gradient(#fafafa, #f6f6f6);
  width: 100%;
  max-width: 1540px;
  margin: 0 auto 0px;
  overflow: hidden;
`;

export const CategoryDiscription = styled.p`
  font-size: 16px;
  font-family: serif;
  line-height: 2.1;
  color: rgba(0, 0, 0, 0.6);

  @media only screen and (max-width: 768px) {
    padding:0 20px;
  }

  @media only screen and (max-width: 475px) {
    font-size:14px;
    line:height:1.5;
  }
`;

export const FigureCol = styled(Col)`
  & figure {
    margin: 0;
  }

  & img {
    width: 100%;
    height: auto;
    min-height: 100%;
    max-width: 1440px;
    z-index: 1;
  }

  @media only screen and (max-width: 475px) {
    margin-bottom: 15px;
  }
`;

export const ArticleWrapper = styled.div`
  margin: 0 0 30px;

  .ant-col-10 {
    float: right;
  }

  .ant-list-split .ant-list-item {
    border: none;
  }

  .ant-row > div {
    padding-left: 34px;
  }

  @media screen and (max-width: 1300px) {
    .ant-col-xl-14 {
      width: 100%;
    }

    .article-list {
      clear: both;
    }

    .ant-row > div {
      padding-left: 20px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .ant-col-10 {
      width: 60%;
    }

    .promotion-img {
      position: visible;
      top: 0;
      right: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .ant-col-md-14 {
      position: absolute;
      top: 80;
      padding-left: 15px;
    }
    .ant-list-item-meta-title {
      font-size: 12px;
      line-height: 1.5;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.7);
    }
    .ant-row > div {
      padding-left: 0px;
    }
  }

  @media only screen and (max-width: 475px) {
    .ant-col-md-14 {
      position: static;
    }
    .ant-col-10 {
      width: 100%;
      padding: 0;
    }
  }
`;

const Article = ({ article }) => {
  return (
    <ArticleWrapper>
      {article && (
        <StyledRow>
          <FigureCol span={10}>
            <figure>
              <img src={article.back_ground_image} />
            </figure>
          </FigureCol>
          <Col md={{ span: 14 }} xl={{ span: 14 }}>
            <CategoryName>{article.title}</CategoryName>
          </Col>
          <Col className="article-list" xl={{ span: 14 }}>
            <CategoryDiscription>{article.description}</CategoryDiscription>
            <CategoryItems items={article.items} />
          </Col>
        </StyledRow>
      )}
    </ArticleWrapper>
  );
};

export default Article;
