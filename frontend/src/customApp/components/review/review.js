import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Rate,Icon,Popover,Row,Col } from 'antd';
// import imgReview1 from "../../../../image/review/img-review-history-07.png";
// import imgReview2 from "../../../../image/review/img-review-history-01.png";
// import imgReview3 from "../../../../image/review/img-review-history-02.png";
// import imgReview4 from "../../../../image/review/img-review-history-03.png";
// import imgReview5 from "../../../../image/review/img-review-history-06.png";

// const images = {
//   "img-review-history-07.png": imgReview1,
//   "img-review-history-01.png": imgReview2,
//   "img-review-history-02.png": imgReview3,
//   "img-review-history-03.png": imgReview4,
//   "img-review-history-06.png": imgReview5,
// };

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

const ReviewComment = styled.p`
  font-size: 12px;
  color: rgb(0, 0, 0);
`;

const ReviewCommentDetails = styled.p`
  font-size: 11px;
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

const Review = () => {
  return (
    <ReviewWrapper>
      <ReviewItemArea>
        <ItemImg span={4}>
        img
          {/* <img src={images[ReviewItem.img_src]} alt="" /> */}
        </ItemImg>
        <ItemInfo span={20}>
          <ItemType>モダールコットン</ItemType>
          <ItemName>ムースハイネックワンピース</ItemName>
        </ItemInfo>
      </ReviewItemArea>
      <ReviewContentsArea>
          <ReviewContentsTitle>
            <IntlMessages id="review.reviewContentsTitle" />
          </ReviewContentsTitle>
          <ReviewContentsRate disabled defaultValue={4} />
          <PostDate>2018/10/20</PostDate>
          <Evaluation>
            <IntlMessages id="review.fiveStarsEvaluation" />4
          </Evaluation>
          <PurchaseSize>
            <IntlMessages id="review.purchaseSize" /><StyledSpan>M</StyledSpan>
            <UserHeight>身長：<StyledSpan>165cm</StyledSpan></UserHeight>
          </PurchaseSize>
          <ReviewComment>思ったより、、</ReviewComment>
          <ReviewCommentDetails>とても着やすいです。無印のマタニティデニムを合わせるとお腹がすっぽり隠れるので重宝しています。</ReviewCommentDetails>
          <span>img  </span>
          <span>img  </span>
          <span>img  </span>
          

          <div>
          <CommentLink href="#"><StyledIcon type="message" /><TextStyle>0件のコメント</TextStyle></CommentLink>
          <HelpfulCount><StyledIcon type="like" /><TextStyle>0人が役にたったと考えています</TextStyle></HelpfulCount>
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
    </ReviewWrapper>
  );
};

export default Review;