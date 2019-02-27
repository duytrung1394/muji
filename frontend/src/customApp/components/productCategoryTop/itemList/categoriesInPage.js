import React from "react";
import { Row } from "antd";
import styled from "styled-components";
import ItemView from "./itemView";
import IntlMessages from "../../../../components/utility/intlMessages";
import Preamble from "./preamble";
import LargeButton from "../../shared/form/largeButton";

const PageWrapper = styled.div`
  scroll-behavior: smooth;
`;

const Nav = styled.div`
  padding: 15px;
  a {
    padding: 10px;
    color: #585858;
    font-size: 12px;
    text-decoration: underline;
  }
`;

const CategoryWrapper = styled.div`
  margin: 50px 0;
`;

const CategoryTitle = styled.h2`
  font-size: 19px;
  color: #585858;
  text-align: center;
  margin-top: 30px;
`;

const ItemViewWrapper = styled(Row)`
  text-align: center;
`;

const CombineOptionButtonWrapper = styled.div`
  margin-top: 25px;
  text-align: center;
`;

const CombineOptionButton = styled(LargeButton)`
  border-radius: 30px;
  border: 1px solid #585858;
  background: #fff;
  color: #585858;
  padding: 14px 0;
  font-size: 12px;
  :hover {
    color: #585858;
  }
`;

const CategoriesInPage = ({ categories, groups }) => (
  <div style={{ scrollBehavior: "smooth" }}>
    <Nav>
      {categories.map((category, index) => {
        return (
          <a href={`#${category.code}`} key={index}>
            {category.title}
            {category.subtitle}
            <IntlMessages id="productCategoryTop.link.underArrow" />
          </a>
        );
      })}
    </Nav>

    <PageWrapper>
      {categories.map((category, index) => {
        return (
          <CategoryWrapper id={category.code} key={index}>
            <Preamble
              title={category.title}
              subtitle={category.subtitle}
              description={category.description}
              img={category.img}
            />
            {groups.map((group, index) => {
              if (group.category_code_in_page !== category.code) {
                return null;
              }
              return (
                <div key={index}>
                  <CategoryTitle>{group.group_name}</CategoryTitle>
                  <ItemViewWrapper>
                    {group.items.map((item, index) => {
                      return (
                        <ItemView isSlideScroll={false} {...item} key={index} />
                      );
                    })}
                  </ItemViewWrapper>
                  {group.combine_option && (
                    <CombineOptionButtonWrapper>
                      <CombineOptionButton>
                        <IntlMessages id="productCategoryTop.button.combineOption" />
                      </CombineOptionButton>
                    </CombineOptionButtonWrapper>
                  )}
                </div>
              );
            })}
          </CategoryWrapper>
        );
      })}
    </PageWrapper>
  </div>
);

export default CategoriesInPage;
