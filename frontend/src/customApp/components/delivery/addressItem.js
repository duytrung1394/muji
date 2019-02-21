import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import Button from "./button";
import DeleteLink from "./deleteLink";

const Address = styled.ul`
  list-style: none;
`;

const AddressItem = () => {
  return (
    <div>
      <h2>
        <IntlMessages id="delivery.addressItem.title" /> 
      </h2>
      <div>
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
          <Button />
          <DeleteLink />
        </Address>
      </div>
    </div>
  );
};

export default AddressItem;