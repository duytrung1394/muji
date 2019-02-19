import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Rate, Popover, Modal } from "antd";
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

const ReviewDiv = styled.div`
  background-color: rgb(242, 242, 242);
  padding: 16px;
  margin: 20px 0;
`;

const ReviewWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 15px;
`;

const ItemArea = styled.div`
  border-top: 1px solid rgb(153, 153, 153);
  border-bottom: 1px solid rgb(153, 153, 153);
  padding: 10px 14px;
`;

const Img = styled.div`
  display: inline-block;
  img {
    width: 90px;
    height: 90px;
  }
`;

const Info = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

const Type = styled.span`
  font-size: 11px;
  color: rgb(153, 153, 153);
`;

const Name = styled.p`
  font-size: 13px;
  color: rgb(88, 88, 88);
`;

const ReviewInfoWrapper = styled.div`
  margin: 0 30px;
  padding: 10px 0;
`;

const ReviewInfoArea = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
`;

const Title = styled.li`
  font-size: 15px;
`;

const RateStar = styled(Rate)`
  && {
    font-size: 11px;
    margin-top: 9px;
    color: #BA0D0D;
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

const BuyerInfo = styled.li`
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

const ReviewTitle = styled.li`
  font-size: 12px;
  color: rgb(0, 0, 0);
  margin: 15px 0;
`;

const ReviewText = styled.li`
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

const GoodIcon = styled(CommentIcon)`
`;

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

const Review = ({ ReviewItems }) => {
  if (ReviewItems) {
    return (
      <ReviewDiv>
        <ReviewWrapper>
          {ReviewItems &&
            ReviewItems.map((ReviewItems, image) => {
              return (
                <Fragment>
                  <ItemArea>
                    <Img span={4}>
                      <img src={itemImages[image]} />
                    </Img>
                    <Info span={20}>
                      <Type>{ReviewItems.type}</Type>
                      <Name>{ReviewItems.name}</Name>
                    </Info>
                  </ItemArea>
                  <ReviewInfoWrapper>
                    <ReviewInfoArea>
                      <Title>
                        <IntlMessages id="review.reviewTitle" />
                      </Title>
                      <RateStar disabled defaultValue={4} />
                      <PostedDate>{ReviewItems.date}</PostedDate>
                      <StarCounter>
                        <IntlMessages id="review.fiveStarsEvaluation" />
                        {ReviewItems.evaluation_count}
                      </StarCounter>
                      {/* {ReviewItems.buyerInfo &&
                        ReviewItems.buyerInfo.map((size, height) => {
                          return (
                            <BuyerInfo>
                              <PurchaseSize>
                                <IntlMessages id="review.purchaseSize" />
                                <Span>{size}</Span>
                              </PurchaseSize>
                              <Height>
                                <IntlMessages id="review.height" />
                                <Span>{height}</Span>
                                <IntlMessages id="review.cm" />
                              </Height>
                            </BuyerInfo>
                          );
                        }
                      )} */}
                      <ReviewTitle>{ReviewItems.review_title}</ReviewTitle>
                      <ReviewText>{ReviewItems.review_comment}</ReviewText>

                      {ReviewItems.images &&
                        ReviewItems.images.map((image, index) => {
                          return (
                            <ReviewImagesArea>
                              <ReviewImages key={index}>
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
                              {ReviewItems.total_comment}
                              <IntlMessages id="review.commentCount" />
                            </StyledSpan>
                          </CommentLink>
                        </CommentCount>
                        <UsefulCount>
                          <GoodIcon src={goodIcon} />
                          <StyledSpan>
                            {ReviewItems.total_useful}
                            <IntlMessages id="review.usefulCount" />
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
              );
            })}
        </ReviewWrapper>
      </ReviewDiv>
    );
  }
  return null;
};

export default Review;
