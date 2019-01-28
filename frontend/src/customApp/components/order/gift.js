import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const Title = styled.h2`

`;

const Gift = () => {
  return (
    <div>
      <Title>
        ギフト包装
      </Title>
      ギフト包装を利用する（162円）
      まとめて包装する
      のし：指定なし　メッセージ：指定なし
      のし・メッセージの指定
    </div>
  );
};
  
export default Gift;