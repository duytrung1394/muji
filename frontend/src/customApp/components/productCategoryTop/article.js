import React from "react";
import { List, Avatar, Col,Breadcrumb  } from 'antd';
import ArticleWrapper from "./article.style";

const Article = props => {

return(
  <ArticleWrapper>
      <Breadcrumb>
        <Breadcrumb.Item className="breadcrumb"><a href="">{props.article.category_breadcrumb}</a></Breadcrumb.Item>
     </Breadcrumb>
      <h1 className="category-title">{props.article.category_title}</h1>
        <div className="content-wrapper">
         <Col xl={{span:14}}>
         <h2 className="category-name">{props.article.category_name}</h2>
            <p className="category-discription">{props.article.category_description}</p>
                <List
                    className="coategory-list"
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
            <figure className="promotion-figure">
                <img className="promotion-img" src={props.article.category_img} />
            </figure>
         </Col>
        </div>
  </ArticleWrapper>
 );
}


export default Article;