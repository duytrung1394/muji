import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";

const StyledDd = styled.dd`
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

class EditDeleteLink extends Component {
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
    const { addressBookNo, name, destroyRequest } = this.props;
    return (
      <StyledDd>
        <Link to={`/store/cust/address/edit/${addressBookNo}`}>
          <IntlMessages id="customerAddress.list.link.edit" />
        </Link>
        {addressBookNo !== 0 && [
          " | ",
          <a
            onClick={() =>
              this.deleteAddress(addressBookNo, name, destroyRequest)
            }
            key="delete"
          >
            <IntlMessages id="customerAddress.list.link.delete" />
          </a>
        ]}
      </StyledDd>
    );
  }
}

export default injectIntl(EditDeleteLink, {
  withRef: true
});
