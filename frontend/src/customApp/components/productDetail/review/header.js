import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import { Link } from "../../shared/form/link";
import IntlMessages from "../../../../components/utility/intlMessages";
import Rate from "./rate";

const RateText = styled.p`
  font-size: 11px;
  margin-top: 10px;
  margin-bottom: 0;
`;

const HeaderWrapper = styled(Row)`
  justify-content: space-between;
  align-items: flex-end;
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin-right: 24px;
  margin-bottom: 12px;
`;

const ReviewNum = styled.span`
  padding: 0 1px;
  font-size: 14px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  font-size: 12px;
  letter-spacing: -1px;

  &,
  &:hover,
  &:active,
  &:focus {
    color: #60b3fa;
    text-decoration: none;
  }
`;

const Header = ({ entity }) => {
  return (
    <HeaderWrapper type="flex">
      <Col>
        <Title>
          <IntlMessages id="productDetail.review.title" />
        </Title>
        <Rate value={entity.star} gutter={4} />
        <RateText>
          <IntlMessages
            id="productDetail.review.starMessage"
            values={{ rate: entity.star }}
          />
        </RateText>
      </Col>
      <Col>
        <StyledLink to={"#"}>
          <IntlMessages
            id="productDetail.review.seeTotalReview"
            values={{
              value: (
                <ReviewNum>
                  <IntlMessages
                    id="productDetail.review.totalReview"
                    values={{ num: entity.reviewNum }}
                  />
                </ReviewNum>
              )
            }}
          />
        </StyledLink>
      </Col>
    </HeaderWrapper>
  );
};

export default Header;
