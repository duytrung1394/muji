import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "../shared/form/link";
import IntlMessages from "../../../components/utility/intlMessages";
import CommonButton from "./button";

const MemberGuideHeadTitle = styled.h1`
  color: #000;
  font-size: 19px;
  letter-spacing: 0.25px;
  margin-top: 30px;
`;

const MemberGuideHeadText = styled.p`
  color: #585858;
  font-size: 13px;
  letter-spacing: 0.3px;
  line-height: 19px;
  margin: 20px 0 0;
`;

const MemberRegistrationButton = () => {
  return (
    <CommonButton>
      <IntlMessages id="account.memberRegistration" />
    </CommonButton>
  );
};

const ContentsWrapper = props => {
  return (
    <Fragment>
      <div>
        <MemberGuideHeadTitle>
          <IntlMessages id="account.memberGuideHeadTitle" />
        </MemberGuideHeadTitle>
        <MemberGuideHeadText>
          <IntlMessages id="account.memberGuideHeadText" />
        </MemberGuideHeadText>
        <MemberRegistrationButton />
      </div>
      {props.children}
      <MemberRegistrationButton />
    </Fragment>
  );
};

export default ContentsWrapper;
