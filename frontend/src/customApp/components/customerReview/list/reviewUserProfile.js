import React from "react";
import { Select, Icon, Button } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const StyledDiv = styled.div`
  position: relative;
`;

const Profile = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const UserIcon = styled.img`
  width: 75px;
  height: 75px;
`;

const UserName = styled.div`
  font-size: 16px;
`;

const FollowList = styled.ul`
  display: flex;
  padding: 0;
  padding-top: 10px;
  margin: 0;
  list-style: none;
`;

const FollowItem = styled.li`
  width: 100%;
  font-size: 12px;
`;

const FollowNum = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const FollowButton = styled(Button)`
  height: 24px;
  font-size: 11px;
  border-radius: 15px;
  position: absolute;
  right: 10px;
  top: 15px;
  font-weight: bold;
`;

const UserDiv = styled.div`
  font-weight: 600;
  width: 150px;
`;

const UserSpan = styled.span`
  font-size: 14px;
`;

const Ratings = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-right: 8px;
`;

const RatingList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const RatingItem = styled.li`
  margin-right: 10px;
`;

const StyledIcon = styled(Icon)`
  color: #ccc;
`;

const Profile = () => {
  return(
    <ProfileStyle>
        <UserIcon
          src="https://www.muji.com/jp/store/review/img/avatar_default.png"
          alt=""
        />
        <UserDiv>
          <UserName>
            <IntlMessages id="customerReview.userName" />
          </UserName>
          <FollowList>
            <FollowItem>
              <FollowNum>{entity.follower}</FollowNum>
              <IntlMessages id="customerReview.followers" />
            </FollowItem>
            <FollowItem>
              <FollowNum>{entity.follow}</FollowNum>
              <IntlMessages id="customerReview.following" />
            </FollowItem>
          </FollowList>
        </UserDiv>
      </ProfileStyle>
  )
}

const RatingList = () => {
  return(
    <RatingListStyle>
      <RatingItem>
        <StyledIcon type="message" />
        <IntlMessages id="customerReview.numberOfReviews" />
        <Ratings>{entity.total}</Ratings>
      </RatingItem>
      <RatingItem>
        <StyledIcon type="like" />
        <IntlMessages id="customerReview.ratings" />
        <Ratings>{entity.total_rating}</Ratings>
      </RatingItem>
    </RatingListStyle>
  )
}

const ReviewUserProfile = ({ entity }) => {
  return (
    <StyledDiv>
      <Profile />
      <FollowButton>
        <IntlMessages id="customerReview.follow" />
      </FollowButton>
      <RatingList />
    </StyledDiv>
  );
};

export default ReviewUserProfile;
