import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const HeaderPreceding = styled.h1`
  margin-top: 30px;
  font-size: 19px;
  letter-spacing: 0.25px;
  color: #000;
`;

const MujicardLinkHeader = () => {
  return (
    <HeaderPreceding>
      <IntlMessages id="account.page.mujicardLink" />
    </HeaderPreceding>
  );
};

export default MujicardLinkHeader;
