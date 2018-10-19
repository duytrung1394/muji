import React from "react";
import { List, Avatar, Col } from 'antd';
import { Link } from "react-router-dom";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import ArticleWrapper from "./article.style";

const Article = props => {

return(
  <ArticleWrapper>
    <h1 className="category-title">{props.article.category_title}</h1>
        <div className="content-wrapper">
         <Col span={14}>
            <h2 className="category-name">{props.article.category_name}</h2>
            <p className="category-discription">{props.article.category_description}</p>
                <List
                    itemLayout="horizontal"
                    dataSource={props.article.category_list}
                    renderItem={item => (
                <List.Item>
                    <a href="">
                    <List.Item.Meta
                        avatar={<Avatar src={item.img} />}
                        title={item.title}
                        description={item.price}
                    />
                    </a>
                    </List.Item>
                    )}
                />
          </Col>
          <Col span={10}>
            <figure className="">
                <img className="promotion-img" src={props.article.category_img} />
            </figure>
         </Col>
        </div>
  </ArticleWrapper>
 );
}


export default Article;