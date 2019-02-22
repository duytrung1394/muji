import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const TopicListWrapper = styled.div`
  width: 100%;
  overflow: auto;

  .ant-card-grid {
    width: calc((100% - 90px) / 4);
    margin: 10px 30px 20px 0;
    padding: 0;

    box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3);
    border-radius: 4px;
    overflow: hidden;

    h3 {
      margin: 0;
      padding: 10px;
      min-height: 25px;
      overflow: hidden;
      color: #585858;
      display: -webkit-box;
      word-break: break-all;
      font-weight: normal;
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 980px) {
    .ant-card-grid {
      width: calc((100% - 60px) / 2);
    }
  }
  @media only screen and (max-width: 768px) {
    .ant-card-grid {
      width: calc((100% - 60px));
    }
  }
`;

const TopicImg = styled.img`
  border: solid 1px #f0f0f0;
  width: 100%;
  transition: filter 0.2s ease;
  filter: brightness(0.85);
`;

const ItemDiv = styled.div`
  .ant-card-grid:nth-child(4n) {
    margin-right: 0;
  }
`;

const TopicList = props => {
  return (
    <TopicListWrapper>
      <h3>
        <IntlMessages id="search.topic.title" />
      </h3>
      <ItemDiv>
        {props.topicList &&
          props.topicList.map((item, index2) => {
            return (
              <Card.Grid key={index2}>
                <Link to={"/store/topic/" + item.topicId}>
                  <TopicImg src={item.image_url} alt="" />
                  <h3>{item.topicName}</h3>
                </Link>
              </Card.Grid>
            );
          })}
      </ItemDiv>
    </TopicListWrapper>
  );
};
export default TopicList;
