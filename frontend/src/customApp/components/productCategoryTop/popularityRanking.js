import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { BaseContentLayout } from "../../components/shared/panel/contentLayout";
import Slider, { Link } from "../shared/slider";

const StyledLink = styled(Link)`
  display: inline-block;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 #585858;

  .ranking-item-image {
    border-radius: 4px 4px 0 0;
    width: 100%;
  }

  & > div {
    padding: 10px;

    .ranking-item-material {
      color: #999;
      font-size: 11px;
      padding-bottom: 5px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }

    .ranking-item-title {
      min-height: 40px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: #000;
      font-size: 12px;
    }
  }
`;

const Badge = styled.span`
  position: absolute;
  left: 18px;
  top: 18px;
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

const RankingItemStyle = styled.div`
  display: inline-block;
  position: relative;
  padding: 10px;
`;

const RankingItem = ({ badgeNum, ranking }) => {
  return (
    <RankingItemStyle>
      <StyledLink to="">
        <img className="ranking-item-image" src={ranking.img} />
        <div>
          <div className="ranking-item-material">{ranking.material}</div>
          <div className="ranking-item-title">{ranking.title}</div>
        </div>
      </StyledLink>
      <Badge>{badgeNum}</Badge>
    </RankingItemStyle>
  );
};

const PopularityRankingTitle = styled.h1`
  font-size: 25px;
  padding: 10px;
`;

const customSliderSettings = {};

const PopularityRanking = ({ rankings }) => {
  if (!rankings) {
    return null;
  }

  return (
    <BaseContentLayout>
      <PopularityRankingTitle>
        <IntlMessages id="productCategoryTop.popularityRanking.title" />
      </PopularityRankingTitle>
      <Slider {...customSliderSettings}>
        {rankings.map((ranking, index) => {
          return (
            <RankingItem key={index} badgeNum={index + 1} ranking={ranking} />
          );
        })}
      </Slider>
    </BaseContentLayout>
  );
};

export default PopularityRanking;
