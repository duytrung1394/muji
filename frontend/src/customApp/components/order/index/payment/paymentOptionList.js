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
        title={"order.procedure.mujiShoppingPoint"}
        labelName={"order.procedure.usePoint"}
        usedBy={"order.procedure.possessionPoint"}
        useItemUnit={"order.procedure.point"}
        paymentPoints={paymentDetails.points}
        optionHandler={optionHandler}
        optionKey={"shoppingPoints"}
        paymentOption={paymentOptions.shoppingPoints}
        resetFlg={true}
      />
      <PaymentOption
        title={"order.procedure.mujiCoin"}
        labelName={"order.procedure.useCoin"}
        usedBy={"order.procedure.possessionCoin"}
        useItemUnit={"order.procedure.coin"}
        paymentPoints={paymentDetails.coins}
        optionHandler={optionHandler}
        optionKey={"coins"}
        paymentOption={paymentOptions.coins}
        resetFlg={true}
      />
      <PaymentOption
        title={"order.procedure.partonerSales"}
        labelName={"order.procedure.partnerAcount"}
        usedBy={"order.procedure.account"}
        useItemUnit={"order.procedure.yen"}
        paymentPoints={paymentDetails.account}
        optionHandler={optionHandler}
        optionKey={"partnerSales"}
        paymentOption={paymentOptions.partnerSales}
        resetFlg={false}
      />
    </Fragment>
  );
};

export default PaymentOptionList;
