import React from "react";
import CommonButton from "../button";
import IntlMessages from "../../../../components/utility/intlMessages";

const RegistrationButtons = () => {
  return (
    <CommonButton>
      <IntlMessages id="account.memberRegistration" />
    </CommonButton>
  );
};

export default RegistrationButtons;
