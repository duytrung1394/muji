import React from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";
import {
  ContentLayout,
  PopularityRankingTitle,
  Badge,
  PopularityRankingCard
} from "./popularityRanking.style";

const badgeColor = index => {
  switch (index) {
    case 0:
      return "#ffc107";
    case 1:
      return "#b4b4b4";
    case 2:
      return "#9a5b00";
    default:
      return "ffffff";
  }
};

const badgeNumberColor = index => {
  if (index <= 2) {
    return "ffffff";
  } else {
    return "#777";
  }
};

const { Meta } = Card;

const PopularityRanking = ({ rankings }) => {
  if (!rankings) {
    return null;
  }

  return (
    <ContentLayout>
      <PopularityRankingTitle>
        <IntlMessages id="productCategoryTop.popularityRanking.title" />
      </PopularityRankingTitle>
      <Row type="flex" justify="space-around" align="top">
        {rankings.map((ranking, index) => {
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
    </ContentLayout>
  );
};

export default PopularityRanking;
