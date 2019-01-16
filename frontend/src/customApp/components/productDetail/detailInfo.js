import React from "react";
import styled from "styled-components";
import { Col } from "antd";
import Detail from "./detail";
import Color from "./color";
import Size from "./size";
import Quantity from "./quantity";
import Buttons from "./buttons";

const DetailName = styled.p`
  color: #999;
  font-size: 17px;
  word-spacing: 0.45px;
  margin: 0;
`;

const ItemName = styled.h2`
  font-size: 19px;
`;

const SeeMore = styled.a`
  font-size: 12px;
`;

const DetailText = styled.p`
  font-size: 13px;
`;

const Info = () => {
  return (
    <div>
      <DetailText>
        裏のループが短い裏毛素材に編み立てました。ほど良い厚みの生地とゆったりとしたシルエットが特長です。
        着心地やわらかに、自由に楽しめるベーシックなTシャツです。
      </DetailText>
      <SeeMore>もっと見る</SeeMore>
    </div>
  );
};

const DetailInfo = () => {
  return (
    <Col span={11} offset={1}>
      <DetailName>オーガニックコットン</DetailName>
      <ItemName>ミニ裏毛五分袖ワイドＴシャツ</ItemName>
      <Info />
      <Detail />
      <Color />
      <Size />
      <Quantity />
      <Buttons />
    </Col>
  );
};

export default DetailInfo;
