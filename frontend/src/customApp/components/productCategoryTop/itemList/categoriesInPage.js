import React from "react";
import { Row } from "antd";
import styled from "styled-components";
import ItemView from "./itemView";
import IntlMessages from "../../../../components/utility/intlMessages";
import Preamble from "./preamble";

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

const CategoriesInPage = ({ categories, groups }) => (
  <div style={{ scrollBehavior: "smooth" }}>
    <Nav>
      {categories.map((category, index) => {
        return (
          <a href={`#${category.code}`} key={index}>
            {category.title}
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