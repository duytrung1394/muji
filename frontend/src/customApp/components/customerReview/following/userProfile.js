import React from "react";
import { Icon } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import {Link} from "../../form/link";

const ProfileStyle = styled.div`
  margin-bottom: 10px;
  position: relative;

  .profile-user-icon {
    width: 75px;
    height: 75px;
    margin-right: 10px;
  }

  .profile-user-name {
    color: #333;
    font-size: 16px;
    font-weight: 600;
    width: 150px;
    :hover {
      color: #333;
    }
  }
`;

const RigthArrow = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 35%;
  right: 0;
`;

const Profile = ({ entity }) => {
  return (
    <ProfileStyle>
      <Link to="">
        <img
          className="profile-user-icon"
          src="https://www.muji.com/jp/store/review/img/avatar_default.png"
          alt=""
        />
        <span className="profile-user-name">
          <IntlMessages id="customerReview.userName" />
        </span>
      </Link>
      <RigthArrow type="right" />
    </ProfileStyle>
  );
};

const RatingItemStyle = styled.li`
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
    <RatingItemStyle>
      <Icon className="rating-item-icon" type={iconType} />
      <IntlMessages id={messageId} />
      <span className="rating-item-rating">{rating}</span>
    </RatingItemStyle>
  );
};

const RatingListStyle = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

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

const UserProfileStyle = styled.div`
  position: relative;
`;

const UserProfile = ({ entity }) => {
  return (
    <UserProfileStyle>
      <Profile entity={entity} />
      <RatingList entity={entity} />
    </UserProfileStyle>
  );
};

export default UserProfile;
