import React from "react";
import styled from "styled-components";
import BillItems from "./billItems";
import BillingSummary from "./billingSummary";
import PaymentMethod from "./paymentMethod";

const BillContents = styled.div`
  padding: 16px;
  margin-top: 20px;
  margin-bottom: 32px;
  background-color: #f2f2f2;
`;

const BillDetail = ({ billDetails }) => {
  if (billDetails) {
    return (
      <BillContents>
        <BillItems
          title={"order.procedure.mujiShoppingPoint"}
          labelName={"order.procedure.usePoint"}
          usedBy={"order.procedure.possessionPoint"}
          useItemUnit={"order.procedure.point"}
          billDetail={billDetails.points}
          resetFlg={true}
        />
        <BillItems
          title={"order.procedure.mujiCoin"}
          labelName={"order.procedure.useCoin"}
          usedBy={"order.procedure.possessionCoin"}
          useItemUnit={"order.procedure.coin"}
          billDetail={billDetails.coins}
          resetFlg={true}
        />
        <BillItems
          title={"order.procedure.partonerSales"}
          labelName={"order.procedure.partnerAcount"}
          usedBy={"order.procedure.account"}
          useItemUnit={"order.procedure.yen"}
          billDetail={billDetails.account}
          resetFlg={false}
        />
        <BillingSummary />
        <PaymentMethod />
      </BillContents>
    );
  }
  return null;
};

export default BillDetail;
