import React, { Component } from "react";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import { Modal } from "antd";
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

class AddressItem extends Component {
  deleteAddress = (addressBookNo, name, destroyRequest) => {
    Modal.confirm({
      title: this.props.intl.formatMessage(
        {
          id: "customerAddress.list.delete.confirm"
        },
        {
          name: name
        }
      ),
      onOk() {
        destroyRequest(addressBookNo);
      }
    });
  };

  render() {
    const { entity, destroyRequest } = this.props;
    return (
      <StyledAddressItem>
        <dl>
          <dt>
            {entity.name}
            <IntlMessages id="customerAddress.attributes.esq" />
          </dt>
          <dd className="right">
            {entity.addressBookNo === 0 ? (
              <IntlMessages id="customerAddress.attributes.addressChange" />
            ) : null}
          </dd>
          <dd>{entity.zip_code}</dd>
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
          <dd>{entity.tel}</dd>
          <EditDeleteLink
            to={`/store/cust/address/edit/${entity.addressBookNo}`}
            deleteAddress={
              entity.addressBookNo !== 0
                ? () =>
                    this.deleteAddress(
                      entity.addressBookNo,
                      entity.name,
                      destroyRequest
                    )
                : null
            }
          />
        </dl>
      </StyledAddressItem>
    );
  }
}

export default injectIntl(AddressItem, {
  withRef: true
});
