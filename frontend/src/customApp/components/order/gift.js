import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const GiftWrapper = styled.div`
  padding: 16px;
  margin-top: 30px;
  background-color: #F2F2F2;
`;

const GiftStyle = styled.div`
  padding: 16px;
  background-color: #FFF;
`;

const Title = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: rgb(88, 88, 88);
`;

const Gift = () => {
  return (
    <GiftWrapper>
      <GiftStyle>
        <Title>
          ギフト包装
        </Title>
        ギフト包装を利用する（162円）<p />
        まとめて包装する<p />
        のし：指定なし　メッセージ：指定なし<p />
        のし・メッセージの指定
      </GiftStyle>
    </GiftWrapper>
  );
};
  
export default Gift;