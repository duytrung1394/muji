import React from "react";
import { Select, Icon, Button } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const LayoutWrapper = styled.div`
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

const FollowButton = styled(Button)`
  height: 24px;
  font-size: 11px;
  border-radius: 15px;
  position: absolute;
  right: 10px;
  top: 15px;
  font-weight: bold;
  text-align: center;
`;

const UserInfoWrapper = styled.div`
  font-weight: 600;
  width: 150px;

  span {
    font-size: 16px;
  }

  ul {
    display: flex;
    padding: 0;
    padding-top: 10px;
    margin: 0;
    list-style: none;

    li {
      width: 100%;
      font-size: 12px;

      span {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
`;

const RatingWrapper = styled.div`
  ul {
    list-style: none;
    display: flex;
    padding: 0;

    li {
      margin-right: 10px;

      span {
        font-size: 16px;
        font-weight: 600;
        margin-right: 8px;
      }
    }
  }
`;

const StyledIcon = styled(Icon)`
  color: #ccc;
`;

const ReviewUserProfile = ({ entity }) => {
  return (
    <LayoutWrapper>
      <Profile>
        <UserIcon
          src="https://www.muji.com/jp/store/review/img/avatar_default.png"
          alt=""
        />
        <UserInfoWrapper>
          <span>
            <IntlMessages id="customerReview.userName" />
          </span>
          <ul>
            <li>
              <span>{entity.follower}</span>
              <br />
              <IntlMessages id="customerReview.followers" />
            </li>
            <li>
              <span>{entity.follow}</span>
              <br />
              <IntlMessages id="customerReview.following" />
            </li>
          </ul>
        </UserInfoWrapper>
      </Profile>
      <FollowButton>
        <IntlMessages id="customerReview.follow" />
      </FollowButton>
      <RatingWrapper>
        <ul>
          <li>
            <StyledIcon type="message" />
            <IntlMessages id="customerReview.numberOfReviews" />
            <span>{entity.total}</span>
          </li>
          <li>
            <StyledIcon type="like" />
            <IntlMessages id="customerReview.ratings" />
            <span>{entity.total_rating}</span>
          </li>
        </ul>
      </RatingWrapper>
    </LayoutWrapper>
  );
};

export default ReviewUserProfile;
