import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Rate,Icon,Popover } from 'antd';

const ReviewWrapper = styled.div`
  background-color: rgb(255, 255, 255);
`;

const ReviewItemContents = styled.div`
  padding: 10px;
  border-top: 1px solid rgb(153, 153, 153);
  border-bottom: 1px solid rgb(153, 153, 153);
`;

const ItemType = styled.span`
  font-size: 11px;
`;

const ItemName = styled.p`
  font-size: 13px;
  color: rgb(88, 88, 88);
`;

const ReviewContents = styled.ul`
  list-style: none;
  position: relative;
  padding-left: 0;
`;

const ReviewContentsTitle = styled.li`
  font-size: 15px;
`;

const ReviewContentsRate = styled(Rate)`
  & .ant-rate-star {
    font-size: 13px;
  }
`;

const PostDate = styled.div`
  position: absolute;
  top: 20px;
  right: 5px;
  font-size: 13px;
`;

const Evaluation = styled.li`
  font-size: 11px;
`;

const PurchaseSize = styled.li`
  font-size: 12px;
`;

const StyledSpan = styled.span`
  margin-left: 5px;
`;

const UserHeight = styled.span`
  margin-left: 20px;
`;

const ReviewComment = styled.li`
  font-size: 12px;
  color: rgb(0, 0, 0);
`;

const ReviewCommentDetails = styled.li`
  font-size: 11px;
`;

const CommentsLink = styled.a`
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

const PopoverMessage = styled.span`
  font-size: 12px;
  a {
    color: rgb(88, 88, 88);
  }
  & :hover {
    color: rgb(88, 88, 88);
  }
`;

const PopIcon = styled.li`
  font-size: 40px;
  color: gray;
  position: absolute;
  top: 190px;
  right: 10px;
  cursor: pointer;
`;

const Review = () => {
  return (
    <ReviewWrapper>
      <ReviewItemContents>
        {/* <img
          src={`https://img.muji.net/img/item/${entity.jancode}_180.jpg`}
          alt="itemImage"
          width="60"
          height="60"
        /> */}
        <ItemType>モダールコットン</ItemType>
        <ItemName>ムースハイネックワンピース</ItemName>
      </ReviewItemContents>
      <div>
        <ReviewContents>
          <ReviewContentsTitle>
            <IntlMessages id="review.reviewContentsTitle" />
          </ReviewContentsTitle>
          <li><ReviewContentsRate disabled defaultValue={4} /></li>
          <li><PostDate>2018/10/20</PostDate></li>
          <Evaluation>
            <IntlMessages id="review.fiveStarsEvaluation" />4
          </Evaluation>
          <PurchaseSize>
            <IntlMessages id="review.purchaseSize" /><StyledSpan>M</StyledSpan>
            <UserHeight>身長：<StyledSpan>165cm</StyledSpan></UserHeight>
          </PurchaseSize>
          <ReviewComment>思ったより、、</ReviewComment>
          <ReviewCommentDetails>とても着やすいです。無印のマタニティデニムを合わせるとお腹がすっぽり隠れるので重宝しています。</ReviewCommentDetails>
          <li><span>img</span></li>
          <li><span>img</span></li>
          <li><span>img</span></li>
          <li><CommentsLink href="#"><StyledIcon type="message" /><TextStyle>0件のコメント</TextStyle></CommentsLink></li>
          <li><StyledIcon type="like" /><TextStyle>0人が役にたったと考えています</TextStyle></li>
          <PopIcon>
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
              <Icon type="ellipsis" />
            </Popover> 
          </PopIcon>
        </ReviewContents>
      </div>
    </ReviewWrapper>
  );
};

export default Review;