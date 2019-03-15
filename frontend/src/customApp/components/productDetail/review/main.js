import React from "react";
import styled from "styled-components";
import { Link } from "../../shared/form/link";
import Rate from "./rate";

import icoReview from "../../../../image/product_detail/review/img-review-history-grey.png";
import icoComment from "../../../../image/product_detail/review/ico-comment.png";
import userImage from "../../../../image/product_detail/review/img-user.png";

const RateText = styled.p`
  font-size: 11px;
  margin-top: 10px;
  margin-bottom: 0;
`;

const MainWrapper = styled.div`
  margin-top: 7px;
  padding: 15px 0;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
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

const Main = ({ entity }) => {
  return (
    <MainWrapper>
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
    </MainWrapper>
  );
};

export default Main;
