import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const Title = styled.h2`
`;

const PartnerSales = () => {
  return (
    <div>
      <Title>
        パートナー売上
      </Title>
      詳細
      パートナー口座残高から利用する<br />
      （口座：2,000円）<br />
      全て利用する<br />
      一部を利用する　円<br />
    </div>
  );
};
    
export default PartnerSales;