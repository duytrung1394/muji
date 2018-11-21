import React from "react";
import styled from "styled-components";
import EditDeleteLink from "./editDeleteLink";
import IntlMessages from "../../../../components/utility/intlMessages";

const StyledAddressItem = styled.div`
  font-size: 13px;
  margin: 15px;
  padding: 15px 15px 0;
  border-top: 1px solid #666;
  dt {
    font-weight: bold;
  }
  dd {
    margin: 0;
  }
  .right {
    float: right;
  }
`;

const AddressItem = ({ entity, destroyRequest }) => (
  <StyledAddressItem>
    <dl>
      <dt>
        {entity.name}
        <IntlMessages id="customerAddress.attributes.esq" />
      </dt>
      <dd className="right">
        {entity.addressBookNo === 0 ? entity.addressChange : null}
      </dd>
      <dd>{entity.zipCode}</dd>
      <dd>
        {entity.address1}
        {entity.address2}
        {entity.address3}
        {entity.address4}
      </dd>
      <dd>
        {entity.care}
        <IntlMessages id="customerAddress.attributes.care" />
      </dd>
      <dd>{entity.telNo}</dd>
      <EditDeleteLink
        addressBookNo={entity.addressBookNo}
        name={entity.name}
        destroyRequest={destroyRequest}
      />
    </dl>
  </StyledAddressItem>
);

export default AddressItem;
