import React from "react";
import styled from "styled-components";
import EditDeleteLink from "./editDeleteLink";

const StyledAddressItem = styled.div`
  font-size: 13px;
  margin: 15px;
  padding: 15px 0 0;
  border-top: 1px solid #e6e6e6;
`;

const AddressItem = ({ entity, destroyRequest }) => (
  <StyledAddressItem>
    <div>{entity.name}</div>
    <div>{entity.zipCode}</div>
    <div>
      {entity.address1}
      {entity.address2}
      {entity.address3}
      {entity.address4}
    </div>
    <div>
      <div>{entity.telNo}</div>
      <EditDeleteLink
        addressBookNo={entity.addressBookNo}
        name={entity.name}
        destroyRequest={destroyRequest}
      />
    </div>
  </StyledAddressItem>
);

export default AddressItem;
