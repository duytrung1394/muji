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

const Article = props => {
  return (
    <ArticleWrapper>
      <CategoryTitle>{props.article.category_title}</CategoryTitle>
      <ContentWrapper>
        <FigureWrapper span={10}>
          <figure className="promotion-figure">
            <img className="promotion-img" src={props.article.category_img} />
          </figure>
        </FigureWrapper>
        <Col md={{ span: 14 }} xl={{ span: 14 }}>
          <CategoryName>{props.article.category_name}</CategoryName>
        </Col>
        <CategoryDiscriptionWrapper xl={{ span: 14 }}>
          <CategoryDiscription>
            {props.article.category_description}
          </CategoryDiscription>
          <CategoryListItem list={props.article.category_list} />
        </CategoryDiscriptionWrapper>
      </ContentWrapper>
    </ArticleWrapper>
  );
};

export default Article;
