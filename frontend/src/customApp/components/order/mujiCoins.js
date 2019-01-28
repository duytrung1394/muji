import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const Title = styled.h2`
`;

const MujiCoins = () => {
  return (
    <div>
      <Title>
        MUJIコイン
      </Title>
      詳細
      コインを利用する<br />
      （保有コイン：3,000コイン）<br />
      全て利用する<br />
      一部を利用する<br />
    </div>
  );
};
    
export default MujiCoins;