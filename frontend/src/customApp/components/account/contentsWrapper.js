import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "../../components/shared/form/link";
import IntlMessages from "../../../components/utility/intlMessages";

const MemberGuidHeadTitle = styled.h1`
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

const Button = styled.button`
  background: #7f0019;
  border: 1px solid #7f0019;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(88, 88, 88, 0.3);
  cursor: pointer;
  display: block;
  font-size: 12px;
  height: 40px;
  margin: 20px auto 0;
  max-width: 300px;
  text-align: center;
  width: 100%;
`;

const ToMembershipAgreement = styled(Link)`
  color: #fff;
`;

const MemberRegistrationButton = () => {
  return (
    <Button>
      <ToMembershipAgreement to="#">
        <IntlMessages id="account.memberRegistration" />
      </ToMembershipAgreement>
    </Button>
  );
};

const ContentsWrapper = props => {
  return (
    <Fragment>
      <div>
        <MemberGuidHeadTitle>
          <IntlMessages id="account.memberGuideHeadTitle" />
        </MemberGuidHeadTitle>
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
