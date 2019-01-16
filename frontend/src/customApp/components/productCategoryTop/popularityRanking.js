import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { BaseContentLayout } from "../../components/panel/contentLayout";
import Slider from "../slider";

const PopularityRankingTitle = styled.h1`
  font-size: 25px;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  position: relative;
  display: block;
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

const customSliderSettings = {
  infinite: true
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
      <Slider {...customSliderSettings}>
        {rankings.map((ranking, index) => {
          return (
            <div key={index}>
              <StyledLink to="">
                <ItemImage src={ranking.img} />
                <Badge>{index + 1}</Badge>
                <ItemMaterial>{ranking.material}</ItemMaterial>
                <ItemTitle>{ranking.title}</ItemTitle>
              </StyledLink>
            </div>
          );
        })}
      </Slider>
    </BaseContentLayout>
  );
};

export default PopularityRanking;
