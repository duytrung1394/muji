import React from "react";
import { Avatar, Col, Breadcrumb, List } from "antd";
import {
  ArticleWrapper,
  CategoryTitle,
  CategoryList,
  CategoryListItemMeta,
  CategoryName,
  ContentWrapper,
  CategoryDiscription,
  CategoryDiscriptionWrapper,
  FigureWrapper
} from "./article.style";

const Article = props => {
  return (
    <ArticleWrapper>
      <Breadcrumb>
        <Breadcrumb.Item className="breadcrumb">
          <a href="">{props.article.category_breadcrumb}</a>
        </Breadcrumb.Item>
      </Breadcrumb>
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
          <CategoryList
            itemLayout="horizontal"
            dataSource={props.article.category_list}
            renderItem={item => (
              <List.Item>
                <a href="">
                  <CategoryListItemMeta
                    avatar={<Avatar src={item.img} />}
                    title={item.title}
                    description={item.price}
                  />
                </a>
              </List.Item>
            )}
          />
        </CategoryDiscriptionWrapper>
      </ContentWrapper>
    </ArticleWrapper>
  );
};

export default Article;
