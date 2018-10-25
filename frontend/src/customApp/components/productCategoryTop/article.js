import React from "react";
import { Col } from "antd";
import CategoryListItem from "./categoryItemList";
import {
  ArticleWrapper,
  CategoryTitle,
  CategoryName,
  ContentWrapper,
  CategoryDiscription,
  CategoryDiscriptionWrapper,
  FigureWrapper
} from "./article.style";

const Article = ({ article }) => {
  return (
    <ArticleWrapper>
      {article && (
        <ContentWrapper>
          <FigureWrapper span={10}>
            <figure className="promotion-figure">
              <img className="promotion-img" src={article.back_ground_image} />
            </figure>
          </FigureWrapper>
          <Col md={{ span: 14 }} xl={{ span: 14 }}>
            <CategoryName>{article.title}</CategoryName>
          </Col>
          <CategoryDiscriptionWrapper xl={{ span: 14 }}>
            <CategoryDiscription>{article.description}</CategoryDiscription>
            <CategoryListItem list={article.items} />
          </CategoryDiscriptionWrapper>
        </ContentWrapper>
      )}
    </ArticleWrapper>
  );
};

export default Article;
