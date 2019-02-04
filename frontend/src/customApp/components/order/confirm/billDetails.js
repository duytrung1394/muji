import React from "react";
import styled from "styled-components";
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
        <BillingSummary />
        <PaymentMethod />
      </BillContents>
    );
  }
  return null;
};

export default BillDetail;
