import React from "react";
import { Icon } from "antd";
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


const RatingListStyle = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
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

const StyledRatingItem = styled.li`
  margin-right: 15px;
  font-size: 12px;

  .rating-item-icon {
    margin-right: 7px;
    color: #ccc;
  }

  .rating-item-rating {
    margin-left: 7px;
    font-size: 12px;
    font-weight: bold;
  }
`;

const RatingItem = ({ iconType, messageId, rating}) => {
  return (
    <StyledRatingItem>
      <Icon className="rating-item-icon" type={iconType} />
      <IntlMessages id={messageId} />
      <span className="rating-item-rating">{rating}</span>
    </StyledRatingItem>
  );
};

const RatingList = ({ entity }) => {
  return (
    <RatingListStyle>
      <RatingItem
        iconType="message"
        messageId="customerReview.numberOfReviews"
        rating={entity.review_count}
      />
      <RatingItem
        iconType="like"
        messageId="customerReview.ratings"
        rating={entity.rating_count}
      />
    </RatingListStyle>
  );
};

const UserProfile = ({ entity }) => {
  return (
    <UserProfileStyle>
      <Profile entity={entity} />
      <RatingList entity={entity} />
    </UserProfileStyle>
  );
};

export default UserProfile;
