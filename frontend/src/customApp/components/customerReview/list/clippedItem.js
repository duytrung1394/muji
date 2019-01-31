import React from "react";
import styled from "styled-components";
import { Link } from "../../shared/form/link";
import { Icon, Rate, Popover, Button } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import UserData from "./userData";

const StyledItem = styled.li`
  border: 1px solid #ccc;
  padding: 15px 20px;
  margin: 10px;
`;

const ClippedItemHeader = styled.div`
  position: relative;
`;

const ReviewTitle = styled.span`
  font-size: 14px;
  color: #333;
  margin-left: 10px;
`;

const RigthArrow = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 35%;
  right: 0;
`;

const StarWrap = styled.span`
  color: #f60;
  position: relative;
  padding: 0;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
`;

const SubData = styled.ul`
  list-style: none;
  padding: 15px 0;
  display: flex;
  align-items: baseline;
`;

const SubDataDate = styled.li`
  margin-left: auto;
  font-size: 12px;
`;

const CommentTitle = styled.span`
  font-size: 16px;
  font-weigth: bold;
  color: #333;
`;

const Comment = styled.p`
  font-size: 14px;
  color: #333;
  margin-top: 10px;
`;

const CommentIcon = styled(Icon)`
  color: gray;
  padding-right: 5px;
`;

const StarWrapper = styled(StarWrap)`
  & .ant-rate {
    color: #f60;
  }
`;

const Star = styled(Rate)`
  & .ant-rate-star {
    font-size: 14px;
  }
`;

const InfoList = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
`;

const UsefulReview = styled.div`
  font-size: 12px;
  margin: 10px 0 5px 0;
`;

const ButtonStyle = styled.div`
  margin-left: 5px;
  padding: 0;
  display: inline-block;
  text-align: center;
`;

const UsefulButton = styled(Button)`
  &.ant-btn {
    color: #555;
    width: 80px;
    height: 22px;
    border-radius: 15px;
    font-size: 11px;
    font-weight: bold;
    text-align: center;
    padding: 0;
    &:active {
      color: #555;
      border-color: #ccc;
    }
    &:hover {
      color: #555;
      border-color: #ccc;
    }
    &:focus {
      color: #555;
      border-color: #ccc;
    }
  }
`;

const PopIcon = styled.li`
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: #333;
  font-size: 20px;
  cursor: pointer;
`;

const PopoverButton = styled.span`
  color: rgba(0, 0, 0, 0.25);
`;

const LinkStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  zIndex: "10"
};

const ClippedItem = ({ entity }) => (
  <StyledItem>
    <ClippedItemHeader>
      <Link to={``} style={LinkStyle} />
      <img
        src={`https://img.muji.net/img/item/${entity.jancode}_180.jpg`}
        alt="itemImage"
        width="60"
        height="60"
      />
      <ReviewTitle>{entity.product}</ReviewTitle>
      <RigthArrow type="right" />
    </ClippedItemHeader>
    <div>
      <SubData>
        <li>
          <StarWrapper>
            <Star disabled defaultValue={entity.star} />
          </StarWrapper>
        </li>
        <SubDataDate>{entity.upload_date}</SubDataDate>
      </SubData>
      <Link to={`/store/review/detail/${entity.jancode}`}>
        <CommentTitle>{entity.title}</CommentTitle>
        <Comment>{entity.detail_comment}</Comment>
      </Link>
    </div>
    <UserData />
    <InfoList>
      <li>
        <CommentIcon type="message" />
        <Link to={`/store/review/detail/${entity.jancode}`}>
          <span>{entity.evaluations_comment_count}</span>
          <IntlMessages id="customerReview.list.matterComment" />
        </Link>
      </li>
      <li>
        <CommentIcon type="like" />
        <Link to={`/store/review/detail/${entity.jancode}`}>
          <span>{entity.evaluations_useful_count}</span>
          <IntlMessages id="customerReview.list.usefulThinking" />
        </Link>
      </li>
      <UsefulReview>
        <IntlMessages id="customerReview.list.usefulReview" />
        <ButtonStyle>
          <UsefulButton>
            <IntlMessages id="customerReview.list.useful" />
          </UsefulButton>
        </ButtonStyle>
      </UsefulReview>
      <PopIcon>
        <Popover
          placement="bottomRight"
          content={
            <span>
              <IntlMessages id="customerReview.list.reviewDelete" />
            </span>
          }
          trigger="click"
        >
          <Icon type="paper-clip" />
        </Popover>
      </PopIcon>
    </InfoList>
  </StyledItem>
);

export default ClippedItem;
