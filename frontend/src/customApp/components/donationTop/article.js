import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";

const ArticleWrapper = styled.div`
  padding: 100px 15px;
`;

const StyledRow = styled(Row)`
  &&& {
    font-size: 14px;

    @media only screen and (min-width: 1280px) {
      flex-wrap: nowrap;
    }
  }
`;

const FigureCol = styled(Col)`
  max-width: 400px;
  margin: 0 3vw;
  & img {
    width: 100%;
    height: auto;
  }
`;

const DiscriptionCol = styled(Col)`
  &&& {
    margin: 0 3vw;
    width: 70%;

    @media only screen and (min-width: 1280px) {
      max-width: 50%;
    }
  }
`;

const CategoryName = styled.h1`
  font-size: 30px;
  text-align: center;
  line-height: 1.4;
  padding-bottom: 10px;
  font-weight: bold;
  color: #191919;
`;

const CategoryDiscription = styled.p`
  font-size: 16px;
  line-height: 1.7;
  padding: 10px 0;
`;

const Article = ({ article }) => {
  return (
    <ArticleWrapper>
      {article && (
        <StyledRow type="flex" justify="center">
          <FigureCol md={{ span: 14 }} xl={{ span: 14 }}>
            <img src={article.back_ground_image} />
          </FigureCol>
          <DiscriptionCol md={{ span: 14 }} xl={{ span: 14 }}>
            <CategoryName>{article.title}</CategoryName>
            <CategoryDiscription>
              {article.description}
              <br />
              {article.description1}
            </CategoryDiscription>
            <CategoryDiscription>{article.description2}</CategoryDiscription>
          </DiscriptionCol>
        </StyledRow>
      )}
    </ArticleWrapper>
  );
};

export default Article;
