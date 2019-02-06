import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import CommonButton from "./commonButton";

const UserInformation = styled.div`
  padding: 16px;
  margin-top: 20px;
  background-color: #f2f2f2;
  display: flex;
  color: rgb(88, 88, 88);
  & div:nth-child(1) {
    margin-right: 16px;
  }
`;

const DataDiv = styled.div`
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
  flex: 1;
  width: 300px;
  position: relative;
  &&& {
    padding: 16px;
  }
`;

const UserInfomationTitles = styled.h1`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
  color: rgb(88, 88, 88);
`;

const UserName = styled.h2`
  font-size: 13px;
`;

const DataItem = styled.li`
  font-size: 13px;
  margin-bottom: 4px;
`;

const DataList = styled.ul`
  font-size: 13px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ChangeButton = styled(CommonButton)`
  position: absolute;
  font-size: 12px;
  bottom: 12px;
  right: 12px;
  width: 100px;
`;

const UserData = ({ userData }) => {
  if (userData) {
    return (
      <UserInformation>
        <DataDiv>
          <UserInfomationTitles>
            <IntlMessages id="order.confirm.addressee" />
          </UserInfomationTitles>
          <UserName>
            {userData.addressee_name}
            <IntlMessages id="order.confirm.esq" />
          </UserName>
          <DataList>
            <DataItem>
              <IntlMessages id="order.confirm.postMark" />
              {userData.street_address}
            </DataItem>
            <DataItem>{userData.address}</DataItem>
            <DataItem>
              <IntlMessages id="order.confirm.telephone" />
              {userData.phone_number}
            </DataItem>
          </DataList>
          <ChangeButton>
            <IntlMessages id="order.procedure.change" />
          </ChangeButton>
        </DataDiv>
        <DataDiv>
          <UserInfomationTitles>
            <IntlMessages id="order.confirm.orderData" />
          </UserInfomationTitles>
          <UserName>
            {userData.addressee_name}
            <IntlMessages id="order.confirm.esq" />
          </UserName>
          <ChangeButton>
            <IntlMessages id="order.procedure.change" />
          </ChangeButton>
        </DataDiv>
      </UserInformation>
    );
  }
  return null;
};

export default UserData;
