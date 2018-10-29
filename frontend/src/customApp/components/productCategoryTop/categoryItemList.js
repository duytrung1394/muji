import React from "react";
import { Avatar, List } from "antd";
import styled from "styled-components";

const StyledList = styled(List)`
  padding-left: 34px;

  .ant-list {
    margin: 3% 0;
  }

  .ant-avatar {
    border-radius: 0px;
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 1300px) {
    .ant-spin-nested-loading {
      padding-bottom: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    .ant-spin-nested-loading {
      padding: 0 20px 30px;
    }
  }
`;

const StyledMeta = styled(List.Item.Meta)`
  .ant-list-item-meta-title {
    color: rgba(0, 0, 0, 0.55);
  }

  .ant-list-item-meta-title:hover {
    color: rgba(0, 0, 0, 0.55);
  }

  .ant-list-item-meta-description {
    font-weight: bold;
    color: #333;
  }

  .ant-list-item-meta-description:before {
    content: "税込 ";
    font-size: 10px;
    color: rgba(0, 0, 0, 0.5);
  }
  .ant-list-item-meta-description:after {
    content: " 円";
    font-size: 10px;
    color: rgba(0, 0, 0, 0.5);
  }

  @media only screen and (max-width: 768px) {
    .ant-list-item-meta-title {
      font-size: 12px;
      line-height: 1.5;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const CategoryItems = props => {
  const { list } = props;

  return (
    <StyledList
      itemLayout="horizontal"
      dataSource={list}
      renderItem={item => (
        <List.Item>
          <a href="">
            <StyledMeta
              avatar={<Avatar src={item.img} />}
              title={item.name}
              description={item.price}
            />
          </a>
        </List.Item>
      )}
    />
  );
};

export default CategoryItems;
