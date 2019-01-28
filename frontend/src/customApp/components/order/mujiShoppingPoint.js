import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const Title = styled.h2`
`;

const MujiShoppingpoint = () => {
  return (
    <div>
      <Title>
        MUJIショッピングポイント
      </Title>
      詳細
      ポイントを利用する<br />
      （保有ポイント：3,000ポイント）<br />
      全て利用する<br />
      一部を利用する<br />
    </div>
  );
};
    
export default MujiShoppingpoint;