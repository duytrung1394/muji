import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Row, Col } from 'antd';

const UserRow = styled(Row)`
  padding: 16px;
  margin-top: 20px;
  background-color: #F2F2F2;
  &{
    width: 100%;
  }
`;

const AddresseeCol = styled(Col)`
  background-color: #FFF;
  &&&{
    padding: 16px;
  }
`;

const CustomerInfoCol = styled(Col)`
  background-color: #FFF;
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

const UserUl = styled.ul`
  font-size: 13px;
  padding-left: 0;
`;

const UserData = () => {
  return (
      <UserRow gutter={16}>
        <AddresseeCol span={12}>
            <Title>お届け先</Title>
            <UserName>無印　花子　様</UserName>
            <UserUl>
              〒 123 - 4567 東京都渋谷区1-2-3<p />
              TEL：01 - 2345 - 6789
            </UserUl>
            【変更ボタン】
        </AddresseeCol>
        <CustomerInfoCol span={12}>
          <Title>ご注文者情報</Title>
          <UserName>無印 花子 様</UserName>
            【変更ボタン】
        </CustomerInfoCol>
      </UserRow>
  );
};

export default UserData;