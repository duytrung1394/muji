import React from "react";
import styled from "styled-components";
import ArticleItemList from "../../components/search/articleItemList";

const CategoryListWrapper = styled.div`
  padding: 2px;
  width: 100%;
  overflow: auto;
`;

const ArticleCategoryList = props => {
  return (
    <CategoryListWrapper>
      {props.categories &&
        props.categories.map((category, index) => {
          return (
            <div key={index}>
              <h3>{category.categoryTitle}</h3>
              <ArticleItemList articles={category.articles} />
            </div>
          );
        })}
    </CategoryListWrapper>
  );
};
export default ArticleCategoryList;
