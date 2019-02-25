import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import Button from "./button";
import DeleteLink from "./deleteLink";

const Wrapper = styled.div`
  padding: 16px;
  background: rgb(242, 242, 242);
`;

const AddressItemArea = styled.div`
  padding: 16px;
  color: rgb(88, 88, 88);
  background: #fff;
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: bold;
`;

const AddressArea = styled.div`
  padding: 16px;
  border-top: 1px solid #666;
`;

const Address = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
  position: relative;
`;

const Name = styled.li`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ZipCode = styled.li`
  font-size: 11px;
  margin-bottom: 10px;
`;

const Address1 = styled.li`
  font-size: 11px;
`;

const Address2 = styled.li`
  font-size: 11px;
  margin-bottom: 10px;
`;

const Tel = styled.li`
  font-size: 11px;
  margin-bottom: 10px;
`;

const Note = styled.li`
  font-size: 11px;
`;

const ChangeButton = styled(Button)`
  width: 97px;
  height: 38px;
  position: absolute;
  bottom: 0;
  right: 0;
`; 

const AddressItem = ({ addressItem }) => {
  return (
    <Wrapper>
      <AddressItemArea>
        <Title>
          <IntlMessages id="delivery.addressItem.title" /> 
        </Title>
        {addressItem.map((item, index) => {
          return (
            <AddressArea key={index}>
              <Address>
                {index != 0 ? (
                  <DeleteLink />
                ) : null}
                <Name>
                  {item.name}
                  <IntlMessages id="delivery.addressItem.esq" />
                </Name>
                <ZipCode>
                  <IntlMessages id="delivery.addressItem.postalSign" />
                  {item.zipCode}
                </ZipCode>
                <Address1>
                  {item.address1}
                </Address1>
                <Address2>
                  {item.address2}
                </Address2>
                <Tel>
                  <IntlMessages id="delivery.addressItem.tel" />
                  {item.tel}
                </Tel>
                {index == 0 ? (
                  <Note>
                  <IntlMessages id="delivery.addressItem.note" />
                </Note>
                ) : null}
                <ChangeButton>
                  <IntlMessages id="delivery.addressItem.change" />
                </ChangeButton>
              </Address>
            </AddressArea>
          );
        })}
      </AddressItemArea>
    </Wrapper>
  );
};

export default AddressItem;