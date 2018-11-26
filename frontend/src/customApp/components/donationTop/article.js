import React from "react";
import styled from "styled-components";
import { Col,Row } from "antd";

const CategoryName = styled.h1`
  font-size: 30px;
  text-align: center;
  line-height: 1.4;
  padding-bottom: 10px;
  font-weight: bold;
  color: #191919;
`;

const StyledRow = styled(Row)`
    font-size: 14px;
`;

const CategoryDiscription = styled.p`
  font-size: 16px;
  line-height: 1.7;
  padding: 10px 0;
`;

const FigureCol = styled(Col)` 
max-width: 400px;
margin: 0 5% 0 0;
  & img {
    width:100%;
    height:auto;
  }
`;

const ArticleWrapper = styled.div`
  margin:0 0 30px;
  display: inline-block;
  padding: 100px 15px;
`;
const Article = ({ article }) => {

  return (
    <ArticleWrapper>
      {article && (
        <StyledRow type="flex" justify="center">
          <FigureCol md={{ span: 14 }} xl={{ span: 14 }}>
              <img src={article.back_ground_image} />
          </FigureCol>
          <Col md={{ span: 14 }} xl={{ span: 14 }}>
            <CategoryName>{article.title}</CategoryName>
            <CategoryDiscription>{article.description}</CategoryDiscription>
          </Col>
        </StyledRow>
      )}
    </ArticleWrapper>
  );
};

export default Article;
