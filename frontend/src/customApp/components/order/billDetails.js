import React from "react";
import styled from "styled-components";
import BillItems from "./billItems";
import BillingSummary from "./billingSummary";
import PaymentMethod from "./paymentMethod";

const BillContents = styled.div`
  padding: 16px;
  margin-top: 20px;
  margin-bottom: 32px;
  background-color: #F2F2F2;
`;

const BillDetail = () => {
  return (
    <BillContents>
      <BillItems
        title={"MUJIショッピングポイント"}
        labelName={"order.procedure.usePoint"}
        usedBy={"order.procedure.possessionPoint"}
        useItemUnit={"order.procedure.point"}
      />
      <BillItems
        title={"MUJIコイン"}
        labelName={"order.procedure.useCoin"}
        usedBy={"order.procedure.possessionCoin"}
        useItemUnit={"order.procedure.coin"}
      />
      <BillItems
        title={"パートナー売上"}
        labelName={"order.procedure.partnerAcount"}
        usedBy={"order.procedure.account"}
        useItemUnit={"order.procedure.yen"}
      />
      <BillingSummary />
      <PaymentMethod />
    </BillContents>
  );
};

export default BillDetail;