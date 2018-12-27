import React from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";
import { BaseContentLayout } from "../../../components/panel/contentLayout";

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin: 20px 0;
`;

const StyledUserData = styled.div`
  padding: 10px;
  border: 1px solid #eee;
  margin: 5px 0;

  .user-data-icon {
    border-radius: 50%;
    margin-right: 10px;
  }

  .user-data-name {
    font-size: 14px;
    font-weight: 600;
  }
`;

const UserData = ({ data }) => {
  return (
    <StyledUserData>
      <img
        src={data.user_image}
        className="user-data-icon"
        alt="itemImage"
        width="50"
        height="50"
      />
      <span className="user-data-name">{data.user_name}</span>
    </StyledUserData>
  );
};

const StyledItemData = styled.div`
  margin: 5px 0;
  padding: 20px 10px 0;

  .item-data-icon {
    margin-right: 10px;
  }

  .item-data-name {
    font-size: 14px;
    font-weight: 600;
  }
`;

const ItemData = ({ data }) => {
  return (
    <StyledItemData>
      <img
        src={`https://img.muji.net/img/item/${data.jancode}_180.jpg`}
        className="item-data-icon"
        alt="itemImage"
        width="120"
        height="120"
      />
      <span className="item-data-name">{data.name}</span>
    </StyledItemData>
  );
};

const ContentLayout = styled(BaseContentLayout)`
  padding: 0 50px;
`;

const ReviewTop = ({ entity, user }) => {
  if (entity && user) {
    return (
      <ContentLayout>
        <Title>
          <IntlMessages id="customerReview.new.postReview" />
        </Title>
        <UserData data={user} />
        <ItemData data={entity} />
      </ContentLayout>
    );
  }
  return null;
};

export default ReviewTop;
