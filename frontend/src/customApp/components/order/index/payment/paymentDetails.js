import React, { Fragment } from "react";
import PaymentOptions from "./paymentOptions";
import PaymentSummary from "./paymentSummary";
import PaymentMethod from "./paymentMethod";

const PaymentDetails = ({ entity, paymentOptions, optionHandler }) => {
  const { paymentDetails, paymentSummary } = entity;
  return (
    <Fragment>
      {paymentDetails &&
        paymentOptions && (
          <Fragment>
            <PaymentOptions
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
            <PaymentOptions
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
            <PaymentOptions
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
        )}
      {paymentSummary && <PaymentSummary summary={paymentSummary} />}
      <PaymentMethod />
    </Fragment>
  );
};

export default PaymentDetails;
