import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const Title = styled.h2`
`;

const BillingSummary = () => {
  return (
    <div>
      <Title>
        ご請求内容
      </Title>
      商品小計<br />
      税込7,960円<br />
      付帯・ギフトサービス 税込0円<br />
      配送料 税込980円<br />
      MUJIショッピングポイント - 3,000ポイント<br />
      MUJIコイン - 3,000コイン<br />
      パートナー売上 - 2,000円<br />
      お支払い合計金額 税込450円<br />
    </div>
  );
};
    
export default BillingSummary;