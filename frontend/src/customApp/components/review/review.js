import React,{Fragment} from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Rate,Icon,Popover,Row,Col } from 'antd';
import imgReview1 from "../../../image/review/img-review-history-07.png";
import imgReview2 from "../../../image/review/img-review-history-01.png";
import imgReview3 from "../../../image/review/img-review-history-02.png";
import imgReview4 from "../../../image/review/img-review-history-03.png";
import imgReview5 from "../../../image/review/img-review-history-06.png";

const itemImages = [
  imgReview1,
  imgReview5,
]

const imagesUrl = [
  imgReview2,
  imgReview3,
  imgReview4,
]

const ReviewWrapper = styled.div`
  background-color: rgb(242, 242, 242);
  padding: 20px;
  margin-top: 20px;
`;

const ReviewItemArea = styled(Row)`
  border-top: 1px solid rgb(153, 153, 153);
  border-bottom: 1px solid rgb(153, 153, 153);
`;

const ItemImg = styled(Col)`
  background-color: rgb(255, 255, 255);
  img {
    width: 90px;
    height: 90px;
  }
`;

const ItemInfo = styled(Col)`
  background-color: rgb(255, 255, 255);
`;

const ItemType = styled.span`
  font-size: 11px;
`;

const ItemName = styled.p`
  font-size: 13px;
  color: rgb(88, 88, 88);
`;

const ReviewContentsArea = styled.div`
  background-color: rgb(255, 255, 255);
`;

const ReviewContentsTitle = styled.h2`
  font-size: 15px;
`;

const ReviewContentsRate = styled(Rate)`
  & .ant-rate-star {
    font-size: 13px;
  }
`;

const PostDate = styled.span`
  float: right;
`;

const Evaluation = styled.p`
  font-size: 11px;
`;

const PurchaseSize = styled.p`
  font-size: 12px;
`;

const StyledSpan = styled.span`
  margin-left: 5px;
`;

const UserHeight = styled.span`
  margin-left: 20px;
`;

const ReviewTitle = styled.p`
  font-size: 12px;
  color: rgb(0, 0, 0);
`;

const ReviewComment = styled.p`
  font-size: 11px;
`;

const ImageArea = styled.div`
  display: flex;
  img {
    width: 193px;
    height: 193px;
    margin: 7px;
  }
`;

const CommentLink = styled.a`
  text-decoration: none;
  color: rgb(96, 179, 250);
`;

const StyledIcon = styled(Icon)`
  font-size: 18px;
  color: gray;
  margin-right: 10px;
`;

const TextStyle = styled.span`
  font-size: 12px;
`;

const HelpfulCount = styled.p`
`;

const ReviewDeleteIconArea = styled.div`
  position: relative;
  cursor: pointer;
`; 

const ReviewDeleteIcon = styled(Icon)`
  position: absolute;
  bottom: 20px;
  right: 30px;
  font-size: 30px;
  color: gray;
`;

const PopoverMessage = styled.span`
  font-size: 12px;
  a {
    color: rgb(88, 88, 88);
  }
  & :hover {
    color: rgb(88, 88, 88);
  }
`;

const Review = ({ reviews }) => {
  if( reviews ) {
    return (
      <ReviewWrapper>
        {reviews && reviews.map((review, image, num)=>{
          return(
            <Fragment>
        <ReviewItemArea>
          <ItemImg span={4}>
            <img src={itemImages[image]} />
          </ItemImg>
          <ItemInfo span={20}>
            <ItemType>{review.type}</ItemType>
            <ItemName>{review.name}</ItemName>
          </ItemInfo>
        </ReviewItemArea>
        <ReviewContentsArea>
            <ReviewContentsTitle>
              <IntlMessages id="review.reviewContentsTitle" />
            </ReviewContentsTitle>
            <ReviewContentsRate disabled defaultValue={4} />
            <PostDate>{review.date}</PostDate>
            <Evaluation>
              <IntlMessages id="review.fiveStarsEvaluation" />
              {review.evaluation_count}
            </Evaluation>
            <PurchaseSize>
              <IntlMessages id="review.purchaseSize" /><StyledSpan>{review.size}</StyledSpan>
            <UserHeight>
              <IntlMessages id="review.height" /><StyledSpan>{review.height}</StyledSpan>
              <IntlMessages id="review.cm" />
            </UserHeight>
            </PurchaseSize>
            <ReviewTitle>{review.review_title}</ReviewTitle>
            <ReviewComment>{review.review_comment}</ReviewComment>
            {
              review.images && review.images.map((image,index)=>{
                return(
                  <ImageArea key={index}>
                    <img src={imagesUrl[image]}/>
                  </ImageArea>
                )
              })
            }
            <div>
              <CommentLink href="#">
                <StyledIcon type="message" />
                  <TextStyle>
                    {review.total_comment}
                    <IntlMessages id="review.commentCount" />
                  </TextStyle>
              </CommentLink>
              <HelpfulCount>
                <StyledIcon type="like" />
                  <TextStyle>
                    {review.total_useful}
                    <IntlMessages id="review.usefulCount" />
                  </TextStyle>
              </HelpfulCount>
            </div>
            <ReviewDeleteIconArea>
              <Popover
                placement="topRight"
                content={
                  <PopoverMessage>
                    <a href="#">
                      <IntlMessages id="review.reviewDelite" />
                    </a>
                  </PopoverMessage>
                }
                trigger="click"
              > 
                <ReviewDeleteIcon type="ellipsis" />
              </Popover> 
            </ReviewDeleteIconArea>
            </ReviewContentsArea>
            </Fragment>
            )
          })}
      </ReviewWrapper>
    );
  } return null
};

export default Review;