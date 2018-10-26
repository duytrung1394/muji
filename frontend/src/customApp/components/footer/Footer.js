import React, { Component } from "react";

import {
  FooterWrapper,
  FooterContainer,
  ListWrapper,
  Logo,
  StyledList,
  ListItem,
  IconsList,
  Icon,
  ListItemLink,
  IconsListItem,
  ItemLink,
  Nav,
  NavItem,
  NavItemLink,
  CopyWrite
} from "./footer.style";

const listsData = [
  [
    "店舗情報",
    "イベント",
    "暮らしの良品研究所",
    "MUJI SUPPORT",
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

const imgsData = [
  "https://img.muji.net/img/common/twitter-with-circle.svg",
  "https://img.muji.net/img/common/facebook-with-circle.svg",
  "https://img.muji.net/img/common/youtube-with-circle.svg",
  "https://img.muji.net/img/common/instagram-with-circle.svg"
];

const navItemsData = ["日本", "個人情報の取り扱い", "サイトマップ"];

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <ListWrapper span={4}>
          <Logo src="https://img.muji.net/img/common/logo-muji.svg" />
          <IconsList>
            {imgsData &&
              imgsData.map((imgData, index) => {
                return (
                  <IconsListItem key={index}>
                    <ItemLink>
                      <Icon src={imgData} />
                    </ItemLink>
                  </IconsListItem>
                );
              })}
          </IconsList>
        </ListWrapper>
        {listsData &&
          listsData.map((listData, index) => {
            return (
              <ListWrapper key={index} span={5}>
                <StyledList
                  size="small"
                  bordered
                  dataSource={listData}
                  renderItem={item => (
                    <ListItem>
                      <ListItemLink>{item}</ListItemLink>
                    </ListItem>
                  )}
                />
              </ListWrapper>
            );
          })}
        <Nav>
          {navItemsData &&
            navItemsData.map((navItemData, index) => {
              return (
                <NavItem key={index}>
                  <NavItemLink>{navItemData}</NavItemLink>
                </NavItem>
              );
            })}
          <CopyWrite>Copyright ©Ryohin Keikaku Co., Ltd.</CopyWrite>
        </Nav>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
