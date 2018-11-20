import React from "react";
import styled from "styled-components";
import EditDeleteLink from "./editDeleteLink";
import IntlMessages from "../../../../components/utility/intlMessages";

const StyledAddressItem = styled.div`
  font-size: 13px;
  margin: 15px;
  padding: 15px 15px 0;
  border-top: 1px solid #666;
  dd {
    margin: 0;
  }
`;

const Dt = styled.dt`
  font-weight: bold;
`;

const Dd = styled.dd`
  float: right;
`;

const DdLink = styled.dd`
  float: right;
  font-size: 12px;
  &&& {
    margin-top: -20px;
  }
  a {
    color: #333333;
    text-decoration: underline;
    :hover {
      color: #7f0019;
    }
  }
`;

const AddressItem = ({ entity, destroyRequest }) => (
  <StyledAddressItem>
    <dl>
      <Dt>
        {entity.name}
        <IntlMessages id="customerAddress.attributes.esq" />
      </Dt>
      <Dd>{entity.addressChange}</Dd>
      <dd>{entity.zipCode}</dd>
      <dd>
        {entity.address1}
        {entity.address2}
        {entity.address3}
        {entity.address4}
      </dd>
      <dd>{entity.telNo}</dd>
      <DdLink>
        <EditDeleteLink
          addressBookNo={entity.addressBookNo}
          name={entity.name}
          destroyRequest={destroyRequest}
        />
      </DdLink>
    </dl>
  </StyledAddressItem>
);

export default AddressItem;
