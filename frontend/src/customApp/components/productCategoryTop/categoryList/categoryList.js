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
  max-height: 125px;

  background-color: #333;
  background: transparent;

  &:hover{
    opacity:0.9;
  }

  
`;

export const LinkIcon = styled(Link)`
  color:black;
  color: #333;
  display:block;
  height:auto;
  background-color: #333;
  position:relative;
  z-index:2000;

  &:hover{
    background-color: #333;
  }

  img {
    height: ${iconImageSize}px;
    width: ${iconImageSize}px;
    margin: ${iconImageMargin}px;
    position:relative;
  }

  span {
    display: block;
    vertical-align: middle;
    font-size: 13px;
    word-wrap: break-word;
    overflow: hidden;
    max-height: ${iconTitleMaxHeight}px;
  }
`;

const CategoryList = ({ innerCategories }) => {
  if (!innerCategories) {
    return null;
  }
  return (
    <ListBoxRow type="flex" justify="center" align="top">
      {innerCategories &&
        innerCategories.map((item, index) => {
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
        <img src={item.img_src} alt="" />
        {item.title && <span>{item.title}</span>}
      </LinkIcon>
    </StyledCol>
  );
};

export default CategoryList;
