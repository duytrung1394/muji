import React from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import {
  PopularityRankingWrapper,
  PopularityRankingTitle,
  Badge,
  PopularityRankingCard
} from "./popularityRanking.style";
import IntlMessages from "../../../components/utility/intlMessages";

const badgeColor = index => {
  if (index === 0) {
    return "#ffc107";
  } else if (index === 1) {
    return "#b4b4b4";
  } else if (index === 2) {
    return "#9a5b00";
  } else {
    return "ffffff";
  }
};

const badgeNumberColor = index => {
  if (index === 0 || index === 1 || index === 2) {
    return "ffffff";
  } else {
    return "#777";
  }
};

const { Meta } = Card;

const PopularityRanking = props => {
  const { popularityRanking } = props;

  if (!popularityRanking) {
    return null;
  }

  return (
    <PopularityRankingWrapper>
      <PopularityRankingTitle>
        <IntlMessages id="productCategoryTop.popularityRanking.title" />
      </PopularityRankingTitle>
      <Row type="flex" justify="start" align="top">
        {popularityRanking.map((ranking, index) => {
          return (
            <Col key={index} xl={{ span: 4 }} md={{ span: 4 }} xs={{ span: 8 }}>
              <Link to="">
                <PopularityRankingCard
                  cover={<img src={ranking.img} />}
                  bordered={false}
                >
                  <Badge
                    backgroundColor={badgeColor(index)}
                    color={badgeNumberColor(index)}
                  >
                    {index + 1}
                  </Badge>
                  <Meta title={ranking.title} />
                </PopularityRankingCard>
              </Link>
            </Col>
          );
        })}
      </Row>
    </PopularityRankingWrapper>
  );
};

export default PopularityRanking;
