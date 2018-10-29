import React, { Component } from "react";
import { Col } from "antd";
import { StyledAntdFooter, NavRow, SiteMapRow, NavLink } from "./footer.style";

import { IconList } from "./IconList";
import { SiteMapList } from "./SiteMapList";

const imgsData = [
  "https://img.muji.net/img/common/twitter-with-circle.svg",
  "https://img.muji.net/img/common/facebook-with-circle.svg",
  "https://img.muji.net/img/common/youtube-with-circle.svg",
  "https://img.muji.net/img/common/instagram-with-circle.svg"
];

const siteMapData = [
  [
    "店舗情報",
    "イベント",
    "くらしの良品研究所",
    "NUJI SUPPORT",
    "MUJI HOUSE VISION",
    "お問い合わせ"
  ],
  [
    "無印良品の家",
    "Café&Meal MUJI",
    "キャンプ場",
    "Found MUJI",
    "MUJI BOOKS",
    "MUJI HOTEL"
  ],
  [
    "MUJI passport",
    "カタログ",
    "MUJI Card",
    "MUJI GIFT CARD",
    "法人のお客様へ",
    "Tax-free Services"
  ],
  [
    "ニュースリリース",
    "採用情報",
    "無印良品メッセージ",
    "無印良品について",
    "株式会社　良品計画"
  ]
];

const Footer = () => {
  return (
    <StyledAntdFooter>
      <SiteMapRow>
        <Col span={8}>
          <img src="https://img.muji.net/img/common/logo-muji.svg" />
          <IconList imgsData={imgsData} />
        </Col>
        {siteMapData &&
          siteMapData.map((Data, index) => {
            return (
              <Col span={4} key={index}>
                <SiteMapList Data={Data} />
              </Col>
            );
          })}
      </SiteMapRow>
      <NavRow>
        <Col span={2}>
          <NavLink>日本</NavLink>
        </Col>
        <Col span={7}>
          <NavLink>個人情報の取り扱い</NavLink>
        </Col>
        <Col span={5}>
          <NavLink>サイトマップ</NavLink>
        </Col>
        <Col span={9}>Copyright ©Ryohin Keikaku Co., Ltd.</Col>
      </NavRow>
    </StyledAntdFooter>
  );
};

export default Footer;
