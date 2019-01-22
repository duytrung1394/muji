import React from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { BaseContentLayout } from "../../components/panel/contentLayout";

const PopularityRankingTitle = styled.h1`
  font-size: 25px;
  padding: 10px;
`;

const RankingWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const StyledCol = styled(Col)`
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 #585858;
  margin: 10px;
`;

const Badge = styled.span`
  position: absolute;
  left: 8px;
  top: 8px;
  min-width: 16px;
  min-height: 12px;
  border-radius: 50%;
  padding: 8px;
  line-height: 0.8;
  text-align: center;
  display: block;
  color: #fff;
  background-color: #585858;
  font-size: 12px;
  font-family: sans-serif;
`;

const ItemImage = styled.img`
  border-radius: 4px 4px 0 0;
  width: 100%;
`;

const ItemMaterial = styled.div`
  color: #999;
  font-size: 11px;
  padding: 5px 10px;
`;
const ItemTitle = styled.div`
  color: #000;
  font-size: 12px;
  padding: 5px 10px 10px;
`;

const colLayout = {
  xs: 8,
  sm: 8,
  md: 6,
  xl: 5
};

const PopularityRanking = ({ rankings }) => {
  if (!rankings) {
    return null;
  }

  return (
    <BaseContentLayout>
      <PopularityRankingTitle>
        <IntlMessages id="productCategoryTop.popularityRanking.title" />
      </PopularityRankingTitle>
      <RankingWrapper>
        {rankings.map((ranking, index) => {
          return (
            <StyledCol key={index} {...colLayout}>
              <Link to="">
                <ItemImage src={ranking.img} />
                <Badge>{index + 1}</Badge>
                <ItemMaterial>{ranking.material}</ItemMaterial>
                <ItemTitle>{ranking.title}</ItemTitle>
              </Link>
            </StyledCol>
          );
        })}
      </RankingWrapper>
    </BaseContentLayout>
  );
};

export default PopularityRanking;
