import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import CommonButton from "./commonButton";

const UserInformation = styled.div`
  padding: 16px;
  margin-top: 20px;
  background-color: #F2F2F2;
  display: flex;
`;

const Addressee = styled.div`
  background-color: #FFF;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
  flex: 1;
  width: 300px;
  height: 200px;
  position: relative;
  &&&{
    padding: 16px;
  }
`;

const OrderInfo = styled.div`
  background-color: #FFF;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
  flex: 1;
  width: 300px;
  height: 200px;
  position: relative;
  margin-left: 16px;
  &&&{
    padding: 16px;
  }
`;

const UserInfomationTitles = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: rgb(88, 88, 88);
`;

const PersonsName =styled.h2`
  font-size: 13px;
`;

const Others = styled.ul`
  font-size: 13px;
  padding-left: 0;
`;

const AddresseeChangeButton = styled(CommonButton)`
position: absolute;
  left: 0;
  right: 0;
  bottom: 12px;
  margin: auto;
  width: 300px;
`;

const OrderInfoChangeButton = styled(CommonButton)`
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 100px;
`;

const UserData = () => {
  return (
    <UserInformation>
      <Addressee>
        <UserInfomationTitles>
          <IntlMessages id="order.procedure.addressee"/>
        </UserInfomationTitles>
        <PersonsName>
          無印　花子<IntlMessages id="order.procedure.esq"/>
        </PersonsName>
        <Others>
          〒 123 - 4567 東京都渋谷区1-2-3<p />
          TEL：01 - 2345 - 6789
        </Others>
        <AddresseeChangeButton>
          <IntlMessages id="order.procedure.change"/>
      </AddresseeChangeButton>
      </Addressee>
      <OrderInfo>
        <UserInfomationTitles>
          <IntlMessages id="order.procedure.orderInfomation"/>
        </UserInfomationTitles>
        <PersonsName>
          無印 花子<IntlMessages id="order.procedure.esq"/>
        </PersonsName>
        <OrderInfoChangeButton>
          <IntlMessages id="order.procedure.change"/>
      </OrderInfoChangeButton>
      </OrderInfo>
    </UserInformation>
  );
};

export default UserData;