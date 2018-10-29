import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import styled from "styled-components";

const iconImageSize = 60;
const iconImageMargin = 10;
const iconTitleMaxHeight = 55;

export const ListBoxRow = styled(Row)`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
`;

export const StyledCol = styled(Col)`
  text-align: center;
  margin: 10px;
  height: 100%;
  max-height: 125px;
`;

export const LinkIcon = styled(Link)`
  color: #333;
  p {
    vertical-align: middle;
    font-size: 13px;
    word-wrap: break-word;
    overflow: hidden;
    max-height: ${iconTitleMaxHeight}px;
  }
`;

export const IconImg = styled.img`
  text-align: center;
  height: ${iconImageSize}px;
  width: ${iconImageSize}px;
  margin: ${iconImageMargin}px;
`;

export const PopularityRankingTitle = styled.h1`
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
`;

const categoryList = ({ innerCategory }) => {
  if (!innerCategory) {
    return null;
  }
  const items = innerCategory.items;
  return (
    <ListBoxRow type="flex" justify="center" align="top">
      {items &&
        items.map((item, index) => {
          return <ItemIcon key={index} item={item} />;
        })}
    </ListBoxRow>
  );
};

const ItemIcon = props => {
  const { item } = props;
  const colLayout = {
    xs: 10,
    sm: 7,
    md: 5,
    lg: 4,
    xl: 3
  };
  return (
    <StyledCol {...colLayout}>
      <LinkIcon to="" className="item-icon">
        <IconImg src={item.img_src} alt="" />
        {item.title && <p>{item.title}</p>}
      </LinkIcon>
    </StyledCol>
  );
};

export default categoryList;
