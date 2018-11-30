import React, { Component } from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components"
import CustomerReview from ".";

const FixArea = styled.div`
max-width:768px;
margin:30px auto;
`;

const UserData = styled.div`
padding:10px;
border:1px solid #eee;
margin:5px 0;
`;

const UserIcon = styled.img`
border-radius:50%;
margin-right:10px;
`;

const SelectedItem = styled.div`
margin:5px 0;
padding:20px 10px 0;
`;

const ItemImg = styled.img`
margin-right:10px;
`;

const Name = styled.span`
font-size:14px;
font-weight:600;
`;

const PostPageTitle = styled.div`
font-size: 25px;
font-weight: 600;
margin: 20px 0;
`;

const ConfirmPageTitle = styled.div`
font-size: 25px;
font-weight: 600;
margin: 20px 0;
`;

const ReviewTop = (props)=>{
  if(props.entity.user && props.entity.customer_reviews){
    const { user,customer_reviews } = props.entity
    return(
        <FixArea>
        {/* レビュー画面のタイトル */}
        <PostPageTitle>
          <IntlMessages id="reviewPost.postTitle" />
        </PostPageTitle>
        
        {/* 確認画面のタイトル */}
        {/* <ConfirmPageTitle>
          <IntlMessages id="reviewPost.confirmTitle" />
        </ConfirmPageTitle> */}
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
          src={`https://img.muji.net/img/item/${customer_reviews[0].jancode}_180.jpg`}
          alt="itemImage"
          width="120"
          height="120"
          />
          <Name>{customer_reviews[0].product}</Name>
        </SelectedItem>
        </FixArea>
      )
    } return null;
}

export default ReviewTop;