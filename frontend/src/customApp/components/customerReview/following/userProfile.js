import React from "react";
import { Icon, Button } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const UserProfileStyle = styled.div`
  position: relative;
`;

const ProfileStyle = styled.div`
  margin-bottom: 10px;
  position: relative;
`;

const UserIcon = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 10px;
`;

const UserName = styled.span`
  color: #333;
  font-size: 16px;
  font-weight: 600;
  width: 150px;
  :hover {
    color: #333;
  }
`;

const RigthArrow = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 35%;
  right: 0;
`;

const Ratings = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-right: 7px;
`;

const RatingStyled = styled.div`
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 10px;
`;

const RatingListStyle = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const RatingItem = styled.li`
  margin-right: 10px;
  font-size: 12px;
`;

const StyledIcon = styled(Icon)`
  color: #ccc;
`;

const MessageStyle = styled.span`
  margin: 0 7px;
`;

const Profile = ({ entity }) => {
  return (
    <ProfileStyle>
      <a href="">
        <UserIcon
          src="https://www.muji.com/jp/store/review/img/avatar_default.png"
          alt=""
        />
        <UserName>
          <IntlMessages id="customerReview.userName" />
        </UserName>
      </a>
      <RigthArrow type="right" />
    </ProfileStyle>
  );
};

const RatingList = ({ entity }) => {
  return (
    <RatingStyled>
      <RatingListStyle>
        <RatingItem>
          <StyledIcon type="message" />
          <MessageStyle>
            <IntlMessages id="customerReview.numberOfReviews" />
          </MessageStyle>
          <Ratings>{entity.review_count}</Ratings>
        </RatingItem>
        <RatingItem>
          <StyledIcon type="like" />
          <MessageStyle>
            <IntlMessages id="customerReview.ratings" />
          </MessageStyle>
          <Ratings>{entity.rating_count}</Ratings>
        </RatingItem>
      </RatingListStyle>
    </RatingStyled>
  );
};

const FollowingUserProfile = ({ entity }) => {
  return (
    <UserProfileStyle>
      <Profile entity={entity} />
      <RatingList entity={entity} />
    </UserProfileStyle>
  );
};

export default FollowingUserProfile;
