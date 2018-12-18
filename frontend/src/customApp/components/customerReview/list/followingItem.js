import React from "react";
import styled from "styled-components";
import { Link } from "../../form/link";
import { Icon, Rate, Popover, Button } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import FollowingUserProfile from "../../../components/customerReview/list/followingUserProfile";
import ReviewButton from "./reviewButton";

const StyledItem = styled.li`
  border: 1px solid #ccc;
  padding: 15px 20px;
  margin: 10px;
`;

const FollowingItemHeader = styled.div`
  position: relative;
`;

const ReviewTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding-top: 15px;
`;

const SubData = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: baseline;
`;

const StarWrap = styled.span`
  color: #f60;
  position: relative;
  padding: 0;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
`;

const StarWrapper = styled(StarWrap)`
  & .ant-rate {
    color: #f60;
  }
`;

const Star = styled(Rate)`
  & .ant-rate-star {
    font-size: 1px;
  }
`;

const SubDataDate = styled.li`
  margin-right: auto;
  font-size: 12px;
`;

const IconStyle = styled(Icon)`
  color: #ccc;
  position: relative;
  top: 20px;
  left: 675px;
`;

const ItemTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-left: 10px;
`;

const Comment = styled.p`
  font-size: 14px;
  font-weigth: 600;
  color: #333;
  margin-top: 5px;
`;

const FollwingItem = ({ entity }) => (
  <StyledItem>
    <FollowingItemHeader>
      <FollowingUserProfile entity={entity} />
    </FollowingItemHeader>
    <div>
      <ReviewTitle>
        <IntlMessages id="customerReview.list.recentReviews" />
      </ReviewTitle>
      <IconStyle type="right" />
      <SubData>
        <li>
          <StarWrapper>
            <Star disabled defaultValue={entity.star} />
          </StarWrapper>
        </li>
        <SubDataDate>{entity.upload_date}</SubDataDate>
      </SubData>
      <Link to={`store/review/detail/${entity.jancode}`}>
        <Comment>{entity.title}</Comment>
      </Link>
      <img
        src={`https://img.muji.net/img/item/${entity.jancode}_180.jpg`}
        alt="itemImage"
        width="60"
        height="60"
      />
      <ItemTitle>{entity.product}</ItemTitle>
    </div>
  </StyledItem>
);

export default FollwingItem;
