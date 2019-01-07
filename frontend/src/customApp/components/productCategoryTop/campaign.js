import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import styled from "styled-components";
import settings from "../../../settings";
import IntlMessages from "../../../components/utility/intlMessages";

const StyledCol = styled(Col)`
  text-align: center;
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding-bottom: 10px;

  img {
    width: 100%;
  }

  span {
    display: block;
    vertical-align: middle;
    font-size: 13px;
    word-wrap: break-word;
    padding: 10px;
    color: #000;
  }
`;

const Box = styled.div`
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 #585858;
  margin: 10px;
  padding-bottom: 30px;
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
      <Row type="flex" justify="normal" align="top">
        {campaigns &&
          campaigns.map((item, index) => {
            return <ItemIcon key={index} item={item} />;
          })}
      </Row>
    </div>
  );
};

const ItemIcon = props => {
  const { item } = props;
  const colLayout = {
    xs: 12,
    sm: 12,
    md: 6,
    xl: 6
  };
  return (
    <StyledCol {...colLayout}>
      <Link to={item.title}>
        <Box>
          <img src={`${settings.apiUrl}/${item.img_src}`} alt="" />
          {item.title && <span>{item.title}</span>}
        </Box>
      </Link>
    </StyledCol>
  );
};

export default Campaign;
