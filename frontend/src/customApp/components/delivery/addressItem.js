import React from "react";
import styled, { ThemeProvider } from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import Button from "./button";
import DeleteLink from "./deleteLink";

const Wrapper = styled.div`
  color: rgb(88, 88, 88);
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: bold;
`;

const AddressArea = styled.div`
  border-top: 1px solid #666;
`;

const Address = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ChangeButton = styled(Button)`
  width: 97px;
  height: 38px;
`; 

const AddressItem = () => {
  return (
    <Wrapper>
      <Title>
        <IntlMessages id="delivery.addressItem.title" /> 
      </Title>
      <AddressArea>
        <Address>
          <li>名前<IntlMessages id="delivery.addressItem.esq" /></li>
          <li><IntlMessages id="delivery.addressItem.postalSign" />郵便番号</li>
          <li>住所1</li>
          <li>住所2</li>
          <li><IntlMessages id="delivery.addressItem.tel" />電話番号</li>
          <li>
            ↓(addressBookNoが0の時だけ反映する)<br />
            <IntlMessages id="delivery.addressItem.note" />
          </li>
          <ChangeButton>
            <IntlMessages id="delivery.addressItem.change" />
          </ChangeButton>
          <DeleteLink />
        </Address>
      </AddressArea>
    </Wrapper>
  );
};

export default AddressItem;