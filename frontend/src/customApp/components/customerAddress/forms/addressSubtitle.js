import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const H3 = styled.h3`
  font-size: 13px;
  font-weight: bold;
  margin-top: 13px;
`;

const AddressSubtitle = () => (
  <H3>
    <IntlMessages id="customerAddress.subtitle" />
  </H3>
);

export default AddressSubtitle;
