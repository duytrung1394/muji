import React from "react";
import styled from "styled-components";
import { Link } from "../../shared/form/link";
import Rate from "./rate";

const RateText = styled.p`
  font-size: 11px;
  margin-top: 10px;
  margin-bottom: 0;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Right = styled.div`
  font-size: 12px;
  text-align: right;
  letter-spacing: -1px;
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
  color: #60b3fa;
`;

const Header = ({ entity }) => {
  return (
    <HeaderWrapper>
      <div>
        <Title>レビュー</Title>
        <Rate value={3.4} />
        <RateText>5つ星のうち{entity.star}</RateText>
      </div>
      <Right>
        <StyledLink to={"#"}>
          <ReviewNum>{entity.reviewNum}件</ReviewNum>
          のカスタマーレビューを見る
        </StyledLink>
      </Right>
    </HeaderWrapper>
  );
};

export default Header;
