import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Rate, Icon, Popover, Modal } from "antd";
import imgReview1 from "../../../image/review/img-review-history-07.png";
import imgReview2 from "../../../image/review/img-review-history-01.png";
import imgReview3 from "../../../image/review/img-review-history-02.png";
import imgReview4 from "../../../image/review/img-review-history-03.png";
import imgReview5 from "../../../image/review/img-review-history-06.png";

const itemImages = [imgReview1, imgReview5];

const imagesUrl = [imgReview2, imgReview3, imgReview4];

const ReviewWrapper = styled.div`
  margin-top: 20px;
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
  margin: 20px 30px;
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
    font-size: 13px;
    margin-top: 9px;
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

const StyledIcon = styled(Icon)`
  font-size: 18px;
  color: gray;
  margin-right: 10px;
`;

const StyledSpan = styled.span`
  font-size: 12px;
`;

const UsefulCount = styled.li``;

const DeleteButton = styled.div`
  position: relative;
  cursor: pointer;
`;

const ButtonIcon = styled(Icon)`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 30px;
  color: gray;
`;

const DeleteReview = styled.a`
  font-size: 12px;
  color: rgb(88, 88, 88);
  :hover {
    color: rgb(88, 88, 88);
  }
`;

const Review = ({ reviews }) => {
  if (reviews) {
    return (
      <ReviewWrapper>
        {reviews &&
          reviews.map((review, image, num) => {
            return (
              <Fragment>
                <ItemArea>
                  <Img span={4}>
                    <img src={itemImages[image]} />
                  </Img>
                  <Info span={20}>
                    <Type>{review.type}</Type>
                    <Name>{review.name}</Name>
                  </Info>
                </ItemArea>
                <ReviewInfoWrapper>
                  <ReviewInfoArea>
                    <Title>
                      <IntlMessages id="review.reviewTitle" />
                    </Title>
                    <RateStar disabled defaultValue={4} />
                    <PostedDate>{review.date}</PostedDate>
                    <StarCounter>
                      <IntlMessages id="review.fiveStarsEvaluation" />
                      {review.evaluation_count}
                    </StarCounter>
                    <BuyerInfo>
                      <PurchaseSize>
                        <IntlMessages id="review.purchaseSize" />
                        <Span>{review.size}</Span>
                      </PurchaseSize>
                      <Height>
                        <IntlMessages id="review.height" />
                        <Span>{review.height}</Span>
                        <IntlMessages id="review.cm" />
                      </Height>
                    </BuyerInfo>
                    <ReviewTitle>{review.review_title}</ReviewTitle>
                    <ReviewText>{review.review_comment}</ReviewText>

                    {review.images &&
                      review.images.map((image, index) => {
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
                          <StyledIcon type="message" />
                          <StyledSpan>
                            {review.total_comment}
                            <IntlMessages id="review.commentCount" />
                          </StyledSpan>
                        </CommentLink>
                      </CommentCount>
                      <UsefulCount>
                        <StyledIcon type="like" />
                        <StyledSpan>
                          {review.total_useful}
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
                        <ButtonIcon type="ellipsis" />
                      </Popover>
                    </DeleteButton>
                  </ReviewInfoArea>
                </ReviewInfoWrapper>
              </Fragment>
            );
          })}
      </ReviewWrapper>
    );
  }
  return null;
};

// const Review = ({ reviews }) => {
//   if( reviews ) {
//     return (
//       <ReviewWrapper>
//         {reviews && reviews.map((review, image, num)=>{
//           return(
//           	<Fragment>
// 							<ReviewItemArea>
// 								<ItemImg span={4}>
// 									<img src={itemImages[image]} />
// 								</ItemImg>
// 								<ItemInfo span={20}>
// 									<ItemType>{review.type}</ItemType>
// 									<ItemName>{review.name}</ItemName>
// 								</ItemInfo>
// 							</ReviewItemArea>
//         			<ReviewContentsArea>
//             		<ReviewContentsTitle>
//               		<IntlMessages id="review.reviewContentsTitle" />
//             		</ReviewContentsTitle>
//             		<ReviewContentsRate disabled defaultValue={4} />
//             		<PostDate>{review.date}</PostDate>
//             		<Evaluation>
//               		<IntlMessages id="review.fiveStarsEvaluation" />
//               		{review.evaluation_count}
//             		</Evaluation>
//             		<PurchaseSize>
//               		<IntlMessages id="review.purchaseSize" /><StyledSpan>{review.size}</StyledSpan>
//             			<UserHeight>
//               			<IntlMessages id="review.height" /><StyledSpan>{review.height}</StyledSpan>
//               			<IntlMessages id="review.cm" />
//             			</UserHeight>
//             		</PurchaseSize>
//             		<ReviewTitle>{review.review_title}</ReviewTitle>
//             		<ReviewComment>{review.review_comment}</ReviewComment>
//               	{review.images && review.images.map((image,index)=>{
//                 	return(
//                   	<ImageArea key={index}>
//                     	<img src={imagesUrl[image]}/>
//                   	</ImageArea>
//                 	)
//               	})
//           }
// 					<div>
// 						<CommentLink href="#">
// 							<StyledIcon type="message" />
// 							<TextStyle>
// 								{review.total_comment}
// 								<IntlMessages id="review.commentCount" />
// 							</TextStyle>
// 						</CommentLink>
//             <HelpfulCount>
// 							<StyledIcon type="like" />
// 							<TextStyle>
// 								{review.total_useful}
// 								<IntlMessages id="review.usefulCount" />
// 							</TextStyle>
//             </HelpfulCount>
// 					</div>
//             <ReviewDeleteIconArea>
//               <Popover
// 								placement="topRight"
//                 content={
//                 <PopoverMessage>
//                   <a href="#">
//                   	<IntlMessages id="review.reviewDelite" />
//                 	</a>
//                 </PopoverMessage>
//                 }
//                 trigger="click"
//               >
//               <ReviewDeleteIcon type="ellipsis" />
//               </Popover>
//             	</ReviewDeleteIconArea>
//             </ReviewContentsArea>
//             </Fragment>
//             )
//           })}
//       </ReviewWrapper>
//     );
//   } return null
// };

export default Review;
