import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const ArticleItemListWrapper = styled.div`
  padding: 2px;
  width: 100%;
  overflow: hidden;

  .ant-card-grid {
    width: calc((100% - 90px) / 4);
    margin: 10px 30px 20px 0;
    padding: 0 0 30px 0;
    box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3);
    border-radius: 4px;
    img {
      border: solid 1px #f0f0f0;
      width: 100%;
      transition: filter 0.2s ease;
      filter: brightness(0.85);
      border-radius: 4px 4px 0 0;
    }

    p {
      display: block;
      margin: 0;
      padding: 5px 10px;
      line-height: 15px;
      font-size: 11px;
      color: #999;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    h3 {
      margin-bottom: 0;
      padding: 0 10px;
      color: #585858;
      font-weight: normal;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .ant-card-grid:nth-child(4n) {
    margin-right: 0;
  }
  @media only screen and (max-width: 980px) {
    .ant-card-grid {
      width: calc((100% - 100px) / 2);
    }
  }
  @media only screen and (max-width: 768px) {
    .ant-card-grid {
      width: calc((100% - 100px));
    }
  }
`;
const ArticleItemList = props => {
    return (
        <ArticleItemListWrapper>
            {props.articles &&
            props.articles.map((item, index) => {
                return (
                    <Card.Grid key={index}>
                        <Link to={"/store/event/" + item.articleId}>
                            <img src={item.image_url} alt="" />
                            <p>{item.header}</p>
                            <h3>{item.title}</h3>
                            <h3>{item.date}</h3>
                        </Link>
                    </Card.Grid>
                );
            })}
        </ArticleItemListWrapper>
    );
};
export default ArticleItemList;