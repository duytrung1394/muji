import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import styled from "styled-components";

const ListBoxRow = styled(Row)`
  padding: 0 10px;
`;

const StyledCol = styled(Col)`
  height: auto;
  &&& {
    padding: 0 5px;
    max-height: 127px;

    @media (max-width: 767px) {
      max-height: 210px;
    }
    @media (max-width: 540px) {
      max-height: 127px;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

const ReviewImageList = ({ innerCategories }) => {
  if (!innerCategories) {
    return null;
  }
  return (
    <ListBoxRow gutter={16} type="flex" justify="normal" align="top">
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
    xs: 8,
    sm: 8,
    md: 5,
    xl: 5
  };
  return (
    <StyledCol {...colLayout}>
      <Link to="">
        <img src={item.img_src} alt="" />
      </Link>
    </StyledCol>
  );
};

export default ReviewImageList;
