import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Link } from "../../shared/form/link";
import Rate from "./rate";
import { Row, Col } from "antd";

import icoReview from "../../../../image/product_detail/review/img-review-history-grey.png";
import icoComment from "../../../../image/product_detail/review/ico-comment.png";
import userImage from "../../../../image/product_detail/review/img-user.png";

const images = { "img-user.png": userImage };

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

const Explain = styled(Row)`
  justify-content: space-between;
`;

const ExplainImg = styled(Col)`
  width: 15%;
  min-width: 40px;
`;

const UserImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const ExplainName = styled(Col)`
  width: 46%;
`;
const ExplainDate = styled(Col)`
  color: #000;
  font-size: 13px;
`;

const Comment = styled.div`
  line-height: 19px;
  margin-top: 5px;
  color: #999;
  font-size: 11px;
`;

const CommentTitle = styled.div`
  margin-top: 10px;
  font-color: #000;
  font-size: 12px;
`;

const IconLink = styled(Link)`
  display: block;
  margin-top: 5px;
  padding-left: 32px;
  background: url(${props => props.icon}) 0 1px no-repeat;
  background-size: contain;
  font-size: 12px;
  font-weight: bold;

  &,
  &:hover,
  &:active,
  &:focus {
    color: #60b3fa;
    text-decoration: none;
  }

  &:first-child {
    margin-top: 13px;
  }
`;

const CommentLink = ({ to, icon, text }) => {
  return (
    <IconLink to={to} icon={icon}>
      {text}
    </IconLink>
  );
};

const Info = styled.p`
  font-size: 11px;
  color: #585858;
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

const Main = ({ review }) => {
  const infoList = [
    {
      value: review.wearInfo.size,
      label: "productDetail.review.info.size"
    },
    {
      value: review.wearInfo.height,
      label: "productDetail.review.info.height"
    }
  ];

  return (
    <MainWrapper>
      <Explain type="flex">
        <ExplainImg>
          <UserImage src={images[review.userImage]} />
        </ExplainImg>
        <ExplainName>
          <UserName>{review.userName}</UserName>
          <Rate value={review.star} type={"small"} gutter={4} />
          <RateText>
            <IntlMessages
              id="productDetail.review.starMessage"
              values={{ rate: review.star }}
            />
          </RateText>
        </ExplainName>
        <ExplainDate>{review.created}</ExplainDate>
      </Explain>
      {infoList.map((info, index) => {
        return info.value ? (
          <Info key={index}>
            <IntlMessages id={info.label} values={{ value: info.value }} />
          </Info>
        ) : null;
      })}
      <CommentTitle>{review.webCatalogTitle}</CommentTitle>
      <Comment>{review.webCatalogDescription}</Comment>
      <div>
        <CommentLink
          to={"#"}
          icon={icoComment}
          text={
            <IntlMessages
              id="productDetail.review.totalComment"
              values={{ num: review.countComment }}
            />
          }
        />
        <CommentLink
          to={"#"}
          icon={icoReview}
          text={
            <IntlMessages
              id="productDetail.review.countUseful"
              values={{ num: review.countUseful }}
            />
          }
        />
      </div>
    </MainWrapper>
  );
};

export default Main;
