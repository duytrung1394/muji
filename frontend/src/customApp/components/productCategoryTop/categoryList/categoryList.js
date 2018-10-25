import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import styled from "styled-components";

const iconImageSize = 60;
const iconImageMargin = 10;
const iconTitleMaxHeight = 55;

export const CategoryBoxCol = styled(Col)`
  border-bottom: 1px solid #eee;
  margin-bottom: 15px;
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

const categoryList = ({ innerCategory }) => {
  if (!innerCategory) {
    return null;
  }
  const items = innerCategory.items;
  return (
    items &&
    items.map((item, index) => {
      return <ItemIcon key={index} item={item} />;
    })
  );
};

const ItemIcon = props => {
  const { item } = props;
  const colLayout = {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 4,
    xl: 3
  };
  return (
    <Row>
      <StyledCol {...colLayout}>
        <LinkIcon to="" className="item-icon">
          <IconImg src={item.img_src} alt="" />
          {item.title && <p>{item.title}</p>}
        </LinkIcon>
      </StyledCol>
    </Row>
  );
};

export default categoryList;
