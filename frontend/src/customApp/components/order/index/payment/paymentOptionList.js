import React, { Fragment } from "react";
import PaymentOption from "./paymentOption";

const PaymentOptionList = ({
  paymentDetails,
  paymentOptions,
  optionHandler
}) => {
  return (
    <Fragment>
      <PaymentOption
        paymentPoints={paymentDetails.points}
        optionHandler={optionHandler}
        optionKey={"shoppingPoint"}
        paymentOption={paymentOptions.shoppingPoint}
      />
      <PaymentOption
        paymentPoints={paymentDetails.giftCard}
        optionHandler={optionHandler}
        optionKey={"giftCard"}
        paymentOption={paymentOptions.giftCard}
      />
    </Fragment>
  );
};

export default PaymentOptionList;
