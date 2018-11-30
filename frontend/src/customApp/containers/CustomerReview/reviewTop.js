import React, { Component } from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components"

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

`;

const Name = styled.span`
font-size:14px;
font-weight:600;
`;

const PostPageTitle = styled.h1`
font-size: 25px;
font-weight: 600;
margin: 20px 0;
`;

const ConfirmPageTitle = styled.h1`
font-size: 25px;
font-weight: 600;
margin: 20px 0;
`;

const ReviewTop = (props)=>{
    return(
        <FixArea>
        {/* レビュー画面のタイトル */}
        <PostPageTitle>レビューを投稿する</PostPageTitle>
        
        {/* 確認画面のタイトル */}
        {/* <ConfirmPageTitle>入力をご確認ください</ConfirmPageTitle> */}
        <UserData>
          <UserIcon
          src={`https://www.muji.com/jp/store/review/img/avatar_default.png`}
          alt="itemImage"
          width="50"
          height="50"
          />
          <Name>tanaka tarou</Name>
        </UserData>
        <SelectedItem>
          <ItemImg
          src={`https://img.muji.net/img/item/${props.imageUrl}_180.jpg`}
          alt="itemImage"
          width="120"
          height="120"
          />
          <Name>フレンチウール混ショートピーコート</Name>
        </SelectedItem>
        </FixArea>
    )
}

export default ReviewTop;