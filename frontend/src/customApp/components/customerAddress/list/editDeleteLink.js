import React from "react";
import { Link } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";

const Div = styled.div`
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

const EditDeleteLink = ({ to, deleteAddress }) => (
  <Div>
    <Link to={to}>
      <IntlMessages id="customerAddress.list.link.edit" />
    </Link>
    {deleteAddress && [
      " | ",
      <a onClick={() => deleteAddress()} key="delete">
        <IntlMessages id="customerAddress.list.link.delete" />
      </a>
    ]}
  </Div>
);

export default EditDeleteLink;
