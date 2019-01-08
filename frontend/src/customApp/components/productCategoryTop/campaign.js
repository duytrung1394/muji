import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import styled from "styled-components";
import settings from "../../../settings";
import IntlMessages from "../../../components/utility/intlMessages";

const ItemImage = styled.img`
  border-radius: 4px 4px 0 0;
  width: 100%;
`;

const ItemTitle = styled.div`
  color: #585858;
  text-align: center;
  padding: 10px;
`;

const LinkBoxShadow = styled.a`
  box-shadow: 0 1px 3px 0 #585858;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 10px;
`;

const colLayout = {
  xs: 12,
  sm: 12,
  md: 6,
  xl: 6
};

const rowGutter = {
  xs: 16,
  sm: 16,
  md: 24,
  xl: 32
};

const StyledCol = styled(Col)`
  display: flex;
`;

const Campaign = ({ campaigns }) => {
  if (!campaigns) {
    return null;
  }
  return (
    <div>
      <h1>
        <IntlMessages id="productCategoryTop.title.campaign" />
      </h1>
      <Row type="flex" gutter={rowGutter}>
        {campaigns &&
          campaigns.map((item, index) => {
            return (
              <StyledCol {...colLayout} key={index}>
                <LinkBoxShadow to="">
                  <ItemImage
                    src={`${settings.apiUrl}/${item.img_src}`}
                    alt=""
                  />
                  <ItemTitle>{item.title}</ItemTitle>
                </LinkBoxShadow>
              </StyledCol>
            );
          })}
      </Row>
    </div>
  );
};

export default Campaign;
