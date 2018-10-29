import React from "react";
import { Col } from "antd";
import CategoryItems from "./categoryItemList";
import {
  ArticleWrapper,
  CategoryName,
  StyledRow,
  CategoryDiscription,
  FigureCol
} from "./article.style";

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
            <CategoryItems list={article.items} />
          </Col>
        </StyledRow>
      )}
    </ArticleWrapper>
  );
};

export default Article;
