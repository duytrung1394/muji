import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const UserInformation = styled.div`
  padding: 16px;
  margin-top: 20px;
  background-color: #F2F2F2;
  display: flex;
`;

const Addressee = styled.div`
  background-color: #FFF;
  flex: 1;
  &&&{
    padding: 16px;
  }
`;

const OrderInfo = styled.div`
  background-color: #FFF;
  flex: 1;
  margin-left: 16px;
  &&&{
    padding: 16px;
  }
`;

const Title = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: rgb(88, 88, 88);
`;

const UserName =styled.h2`
  font-size: 13px;
`;

const Others = styled.ul`
  font-size: 13px;
  padding-left: 0;
`;

const UserData = () => {
  return (
    <UserInformation>
      <Addressee>
        <Title>お届け先</Title>
        <UserName>無印　花子　様</UserName>
        <Others>
          〒 123 - 4567 東京都渋谷区1-2-3<p />
          TEL：01 - 2345 - 6789
        </Others>
        【変更ボタン】
      </Addressee>
      <OrderInfo>
        <Title>ご注文者情報</Title>
        <UserName>無印 花子 様</UserName>
        【変更ボタン】
      </OrderInfo>
    </UserInformation>
  );
};

export default UserData;