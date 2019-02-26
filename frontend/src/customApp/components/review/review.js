import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Rate, Popover } from "antd";
import imgReview1 from "../../../image/review/img-review-history-07.png";
import imgReview2 from "../../../image/review/img-review-history-01.png";
import imgReview3 from "../../../image/review/img-review-history-02.png";
import imgReview4 from "../../../image/review/img-review-history-03.png";
import imgReview5 from "../../../image/review/img-review-history-06.png";
import commentIcon from "../../../image/review/img-review-history-04.png";
import goodIcon from "../../../image/review/img-review-history-05.png";
import bottonIcon from "../../../image/review/btn-comment-set.png";

const itemImages = [imgReview1, imgReview5];

const imagesUrl = [imgReview2, imgReview3, imgReview4];

const ReviewWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: rgba(153, 153, 153, 0.5) 0px 1px 3px 1px;
`;

const ItemArea = styled.div`
  border-top: 1px solid rgb(153, 153, 153);
  border-bottom: 1px solid rgb(153, 153, 153);
  padding: 10px 14px;
`;

const ItemImg = styled.div`
  display: inline-block;
  img {
    width: 90px;
    height: 90px;
  }
`;

const ItemInfo = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

const MaterialName = styled.span`
  font-size: 11px;
  color: rgb(153, 153, 153);
`;

const ItemName = styled.p`
  font-size: 13px;
  color: rgb(88, 88, 88);
`;

const ReviewInfoWrapper = styled.div`
  margin: 0 16px;
  padding: 10px 0;
`;

const ReviewInfoArea = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
`;

const ReviewTitle = styled.li`
  font-size: 15px;
`;

const RateStar = styled(Rate)`
  && {
    font-size: 11px;
    margin-top: 9px;
    color: #ba0d0d;
  }
`;

const PostedDate = styled.li`
  float: right;
  font-size: 13px;
`;

const StarCounter = styled.li`
  font-size: 11px;
  margin-top: 9px;
`;

const WearInfo = styled.li`
  font-size: 12px;
  margin-top: 15px;
`;

const PurchaseSize = styled.span``;

const Span = styled.span`
  margin-left: 5px;
`;

const Height = styled.span`
  margin-left: 20px;
`;

const Title = styled.li`
  font-size: 12px;
  color: rgb(0, 0, 0);
  margin: 15px 0;
`;

const Description = styled.li`
  font-size: 11px;
  margin-bottom: 10px;
`;

const ReviewImagesArea = styled.ul`
  list-style: none;
  display: inline;
  padding: 0;
  margin: 7px;
`;

const ReviewImages = styled.li`
  display: inline;
  padding: 0;
  img {
    width: 193px;
    height: 193px;
  }
`;

const CountArea = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 20px;
`;

const CommentCount = styled.li`
  margin-bottom: 13px;
`;

const CommentLink = styled(Link)`
  color: rgb(96, 179, 250);
`;

const CommentIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;

const GoodIcon = styled(CommentIcon)``;

const StyledSpan = styled.span`
  font-size: 12px;
`;

const UsefulCount = styled.li``;

const DeleteButton = styled.div`
  position: relative;
  cursor: pointer;
`;

const ButtonIcon = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
`;

const DeleteReview = styled.a`
  font-size: 12px;
  color: rgb(88, 88, 88);
  :hover {
    color: rgb(88, 88, 88);
  }
`;

const Review = ({ itemDetail, imageIndex }) => {
  if (itemDetail) {
    return (
      <ReviewWrapper>
        <Fragment>
          <ItemArea>
            <ItemImg span={4}>
              <img src={itemImages[imageIndex]} />
            </ItemImg>
            <ItemInfo span={20}>
              <MaterialName>{itemDetail.materialName}</MaterialName>
              <ItemName>{itemDetail.itemName}</ItemName>
            </ItemInfo>
          </ItemArea>
          <ReviewInfoWrapper>
            <ReviewInfoArea>
              <ReviewTitle>
                <IntlMessages id="review.reviewTitle" />
              </ReviewTitle>
              <RateStar disabled defaultValue={itemDetail.evaluationCount} />
              <PostedDate>{itemDetail.date}</PostedDate>
              <StarCounter>
                <IntlMessages id="review.fiveStarsEvaluation" />
                {itemDetail.evaluationCount}
              </StarCounter>
              {itemDetail.wearInfo.size && itemDetail.wearInfo.height ? (
                <WearInfo>
                  <PurchaseSize>
                    <IntlMessages id="review.purchaseSize" />
                    <Span>{itemDetail.wearInfo.size}</Span>
                  </PurchaseSize>
                  <Height>
                    <IntlMessages id="review.height" />
                    <Span>{itemDetail.wearInfo.height}</Span>
                    <IntlMessages id="review.cm" />
                  </Height>
                </WearInfo>
              ) : null}
              <Title>{itemDetail.webCatalogTitle}</Title>
              <Description>{itemDetail.webCatalogDescription}</Description>
              {itemDetail.images &&
                itemDetail.images.map((image, index) => {
                  return (
                    <ReviewImagesArea key={index}>
                      <ReviewImages>
                        <img src={imagesUrl[image]} />
                      </ReviewImages>
                    </ReviewImagesArea>
                  );
                })}
              <CountArea>
                <CommentCount>
                  <CommentLink to={"#"}>
                    <CommentIcon src={commentIcon} />
                    <StyledSpan>
                      {itemDetail.totalComment}
                      <IntlMessages id="review.totalComment" />
                    </StyledSpan>
                  </CommentLink>
                </CommentCount>
                <UsefulCount>
                  <GoodIcon src={goodIcon} />
                  <StyledSpan>
                    {itemDetail.totalUseful}
                    <IntlMessages id="review.totalUseful" />
                  </StyledSpan>
                </UsefulCount>
              </CountArea>
              <DeleteButton>
                <Popover
                  placement="topRight"
                  content={
                    <DeleteReview>
                      <IntlMessages id="review.reviewDelite" />
                    </DeleteReview>
                  }
                  trigger="click"
                >
                  <ButtonIcon src={bottonIcon} />
                </Popover>
              </DeleteButton>
            </ReviewInfoArea>
          </ReviewInfoWrapper>
        </Fragment>
      </ReviewWrapper>
    );
  }
  return null;
};

export default Review;
