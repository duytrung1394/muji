import React from "react";
import styled from "styled-components";
import { Link } from "../../shared/form/link";
import { OutlineButton } from "../../shared/form/button";

import fullStar from "../../../../image/product_detail/review/ico-other-red-fullstar.png";
import halfStar from "../../../../image/product_detail/review/ico-other-red-halfstar.png";
import emptyStar from "../../../../image/product_detail/review/ico-other-red-emptystar.png";

import icoReview from "../../../../image/product_detail/review/img-review-history-grey.png";
import icoComment from "../../../../image/product_detail/review/ico-comment.png";
import icoCommentWhite from "../../../../image/product_detail/review/ico-comment-white.png";
import userImage from "../../../../image/product_detail/review/img-user.png";

const Base = styled.section`
  background-color: #f2f2f2;
  padding: 16px;
  margin-top: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Left = styled.div``;

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

const Stars = styled.ul`
  list-style-type: none;
  width: inherit;
  margin: 0;
  padding: 0;
`;

const getStarSize = props => {
  switch (props.type) {
    case "small":
      return `
        max-width: 11px;
      `;
    default:
      return `
        max-width: 15px;
      `;
  }
};

const Star = styled.li`
  ${props => getStarSize(props)} display: inline-block;
  vertical-align: top;
  line-height: 21px;
  margin-left: 4px;

  &:first-child {
    margin-left: 0;
  }
`;

const StarImg = styled.img`
  width: 100%;
`;

const RateText = styled.p`
  font-size: 11px;
  margin-top: 10px;
  margin-bottom: 0;
`;

const Rate = ({ value, type }) => {
  let maxStar = 5;
  let unit = 0.5;
  let starValue = Math.round(value / unit) * unit;
  let starList = [];

  let fullStarCount = Math.floor(starValue);
  for (var i = 0; i < fullStarCount; i++) {
    starList.push(<StarImg src={fullStar} />);
  }

  let isHalfStar = starValue % 1 > 0;
  if (isHalfStar) {
    starList.push(<StarImg src={halfStar} />);
  }

  let emptyStarCount = Math.floor(maxStar - starValue);
  for (var i = 0; i < emptyStarCount; i++) {
    starList.push(<StarImg src={emptyStar} />);
  }

  return (
    <Stars>
      {starList.map((star, index) => {
        return (
          <Star key={index} type={type}>
            {star}
          </Star>
        );
      })}
    </Stars>
  );
};

const Content = styled.div`
  box-shadow: rgba(153, 153, 153, 0.5) 0px 1px 3px 1px;
  padding: 20px;
  background-color: #fff;
  font-size: 12px;
`;

const ReviewNum = styled.span`
  padding: 0 1px;
  font-size: 14px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  color: #60b3fa;
`;

const Main = styled.div`
  margin-top: 7px;
  padding: 15px 0;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
`;
const Footer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const Explain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ExplainImg = styled.div`
  width: 15%;
  min-width: 40px;
`;

const UserImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const ExplainName = styled.div`
  width: 46%;
`;
const ExplainDate = styled.div`
  color: #000;
  font-size: 13px;
`;

const CommentWrapper = styled.div`
  margin-top: 10px;
`;

const Comment = styled.div`
  line-height: 19px;
  margin-top: 5px;
  color: #999;
  font-size: 11px;
`;

const CommentTitle = styled.div`
  font-color: #000;
  font-size: 12px;
`;

const CommentLink = styled(Link)`
  margin-top: 5px;
  padding-left: 32px;
  background: url(${props => props.icon}) 0 1px no-repeat;
  background-size: contain;
  color: #60b3fa;
  font-size: 12px;
  font-weight: bold;

  &:first-child {
    margin-top: 13px;
  }
`;

const FooterButton = styled.li`
  margin: 20px auto 0;

  &:first-child {
    margin-top: 30px;
  }
`;

const ReviewButton = styled(OutlineButton)`
  & span:before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 8px;
    background: url(${icoCommentWhite}) no-repeat;
    background-size: contain;
    vertical-align: middle;
  }
`;

const WearInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  color: #585858;
`;

const CommentLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.p`
  margin-top: 5px;
  margin-bottom: 0px;
`;

const UserName = styled.p`
  line-height: 1.2;
  font-size: 13px;
  color: #000;
  margin-top: 0;
  margin-bottom: 3px;
`;

const Review = ({ entity }) => {
  return (
    <Base>
      <Content>
        <Header>
          <Left>
            <Title>レビュー</Title>
            <Rate value={3.4} />
            <RateText>5つ星のうち{entity.star}</RateText>
          </Left>
          <Right>
            <StyledLink to={"#"}>
              <ReviewNum>{entity.reviewNum}件</ReviewNum>
              のカスタマーレビューを見る
            </StyledLink>
          </Right>
        </Header>
        <Main>
          <Explain>
            <ExplainImg>
              <UserImage src={userImage} />
            </ExplainImg>
            <ExplainName>
              <UserName>ユーザー名</UserName>
              <Rate value={5} type={"small"} />
              <RateText>5つ星のうち{entity.reviews[0].star}</RateText>
            </ExplainName>
            <ExplainDate>{entity.reviews[0].created}</ExplainDate>
          </Explain>
          <WearInfo>
            <Info>購入サイズ：{entity.reviews[0].wearInfo.size}</Info>
            <Info>身長：{entity.reviews[0].wearInfo.height}cm</Info>
          </WearInfo>
          <CommentWrapper>
            <CommentTitle>{entity.reviews[0].webCatalogTitle}</CommentTitle>
            <Comment>{entity.reviews[0].webCatalogDescription}</Comment>
          </CommentWrapper>
          <CommentLinkWrapper>
            <CommentLink to={"#"} icon={icoComment}>
              {entity.reviews[0].countComment}件のコメント
            </CommentLink>
            <CommentLink to={"#"} icon={icoReview}>
              {entity.reviews[0].countUseful}人が役にたったと考えています
            </CommentLink>
          </CommentLinkWrapper>
        </Main>
        <Footer>
          <FooterButton>
            <OutlineButton>レビューをもっと見る</OutlineButton>
          </FooterButton>
          <FooterButton>
            <ReviewButton reverse="true" color="#7f0119">
              レビューを投稿する
            </ReviewButton>
          </FooterButton>
        </Footer>
      </Content>
    </Base>
  );
};

export default Review;
