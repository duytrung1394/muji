import React, { Component } from "react";
import { Col } from "antd";

import {
  FooterWrapper,
  FooterContainer,
  FooterIconsWrapper,
  FooterListWrapper,
  FooterLogo,
  FooterList,
  FooterListItem,
  FooterIconsList,
  FooterIcon,
  FooterListItemLink,
  FooterIconsListItem,
  ItemLink
} from "./footer.style";

const listsData = [
  {
    1: [
      "店舗情報",
      "イベント",
      "暮らしの良品研究所",
      "MUJI SUPPORT",
      "MUJI HOUSE VISION",
      "お問い合わせ"
    ]
  },
  {
    2: [
      "無印良品の家",
      "Café&Meal MUJI",
      "キャンプ場",
      "Found MUJI",
      "MUJI BOOKS",
      "MUJI HOTEL"
    ]
  },
  {
    3: [
      "MUJI passport",
      "カタログ",
      "MUJI Card",
      "MUJI GIFT CARD",
      "法人のお客様へ",
      "Tax-free Services"
    ]
  },
  {
    4: [
      "ニュースリリース",
      "採用情報",
      "無印良品メッセージ",
      "無印良品について",
      "株式会社　良品計画"
    ]
  }
];

const imgsData = [
  "https://img.muji.net/img/common/twitter-with-circle.svg",
  "https://img.muji.net/img/common/facebook-with-circle.svg",
  "https://img.muji.net/img/common/youtube-with-circle.svg",
  "https://img.muji.net/img/common/instagram-with-circle.svg"
];

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterListWrapper span={4}>
          <FooterLogo src="https://img.muji.net/img/common/logo-muji.svg" />
          <FooterIconsList>
            {imgsData &&
              imgsData.map(imgData => {
                return (
                  <FooterIconsListItem>
                    <ItemLink>
                      <FooterIcon src={imgData} />
                    </ItemLink>
                  </FooterIconsListItem>
                );
              })}
          </FooterIconsList>
        </FooterListWrapper>
        {listsData &&
          listsData.map((listData, index) => {
            return (
              <FooterListWrapper span={5}>
                <FooterList
                  size="small"
                  bordered
                  dataSource={listData[index + 1]}
                  renderItem={item => (
                    <FooterListItem>
                      <FooterListItemLink>{item}</FooterListItemLink>
                    </FooterListItem>
                  )}
                />
              </FooterListWrapper>
            );
          })}
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
