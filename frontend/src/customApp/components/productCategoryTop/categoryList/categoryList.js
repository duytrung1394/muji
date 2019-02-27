import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import styled from "styled-components";

const StyledCol = styled(Col)`
  display: flex;
`;

const LinkBoxShadow = styled(Link)`
  box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3);
  border-radius: 4px;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
`;

const Image = styled.img`
  max-width: 110px;
`;

const Title = styled.div`
  color: #585858;
  text-align: center;
  padding: 10px;
`;

const rowGutter = {
  xs: 16,
  sm: 16,
  md: 24,
  xl: 24
};

const colLayout = {
  xs: 12,
  sm: 8,
  md: 6,
  xl: 4
};

const CategoryList = ({ innerCategories }) => {
  if (!innerCategories) {
    return null;
  }
  return (
    <Row type="flex" gutter={rowGutter}>
      {innerCategories &&
        innerCategories.map((item, index) => {
          return (
            <StyledCol {...colLayout} key={index}>
              <LinkBoxShadow to={`/store/cmdty/section/${item.sectionCode}`}>
                <Image src={item.img_src} alt="" />
                {item.title && <Title>{item.title}</Title>}
              </LinkBoxShadow>
            </StyledCol>
          );
        })}
    </Row>
  );
};

export default CategoryList;
