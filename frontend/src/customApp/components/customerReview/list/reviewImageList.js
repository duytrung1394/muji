import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import styled from "styled-components";

const iconImageSize = 60;
const iconImageMargin = 10;

export const ListBoxRow = styled(Row)`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
`;

export const StyledCol = styled(Col)`
  text-align: center;
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding-bottom: 10px;

  img {
    height: ${iconImageSize}px;
    width: ${iconImageSize}px;
    margin: ${iconImageMargin}px;
  }

  span {
    display: block;
    vertical-align: middle;
    font-size: 13px;
    word-wrap: break-word;
    padding: 10px;
  }
`;

export const LinkIcon = styled(Link)`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ReviewImageList = ({ innerCategories }) => {
  if (!innerCategories) {
    return null;
  }
  return (
    <ListBoxRow type="flex" justify="normal" align="top">
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
    xs: 12,
    sm: 8,
    md: 6,
    xl: 4
  };
  return (
    <StyledCol {...colLayout}>
      <LinkIcon to="" />
      <img src={item.img_src} alt="" />
      {item.title && <span>{item.title}</span>}
    </StyledCol>
  );
};

export default ReviewImageList;
