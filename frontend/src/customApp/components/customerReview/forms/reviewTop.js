import React from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";

const FixArea = styled.div`
  max-width: 768px;
  margin: 30px auto;
`;

const UserData = styled.div`
  padding: 10px;
  border: 1px solid #eee;
  margin: 5px 0;
`;

const UserIcon = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;

const SelectedItem = styled.div`
  margin: 5px 0;
  padding: 20px 10px 0;
`;

const ItemImg = styled.img`
  margin-right: 10px;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const PostPageTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin: 20px 0;
`;

const ReviewTop = props => {
  if (props.entity && props.user) {
    const { user, entity } = props;
    return (
      <FixArea>
        <PostPageTitle>
          <IntlMessages id="customerReview.new.postReview" />
        </PostPageTitle>
        <UserData>
          <UserIcon
            src={user.user_image}
            alt="itemImage"
            width="50"
            height="50"
          />
          <Name>{user.user_name}</Name>
        </UserData>
        <SelectedItem>
          <ItemImg
            src={`https://img.muji.net/img/item/${entity.jancode}_180.jpg`}
            alt="itemImage"
            width="120"
            height="120"
          />
          <Name>{entity.product}</Name>
        </SelectedItem>
      </FixArea>
    );
  }
  return null;
};

export default ReviewTop;
