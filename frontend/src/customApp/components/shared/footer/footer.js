import React, { Component } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { List, Col, Row } from "antd";

const SocialsLayout = styled.ul`
  display: flex;
  padding: 0;
  margin: 110px 0 0 0;

  & > li {
    list-style: none;
    margin-right: 6px;

    & > a {
      opacity: 0.3;
    }
  }
`;

const srcs = [
  "https://img.muji.net/img/common/twitter-with-circle.svg",
  "https://img.muji.net/img/common/facebook-with-circle.svg",
  "https://img.muji.net/img/common/youtube-with-circle.svg",
  "https://img.muji.net/img/common/instagram-with-circle.svg"
];

const Socials = () => {
  return (
    <SocialsLayout>
      {srcs.map((src, index) => {
        return (
          <li key={index}>
            <a href="">
              <img src={src} />
            </a>
          </li>
        );
      })}
    </SocialsLayout>
  );
};

const siteMaps = [
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

const SiteMapLayout = styled(Row)`
  overflow: hidden;
  margin-bottom: 30px;
`;

const SiteMapList = styled(List)`
  && .ant-list-item {
    font-size: 12px;
    padding: 0;
    margin-bottom: 10px;
    border-bottom: none;

    & a,
    & a:hover {
      color: #616161;
    }
  }
`;

const SiteMap = () => {
  return (
    <SiteMapLayout>
      <Col span={8}>
        <img src="https://img.muji.net/img/common/logo-muji.svg" />
        <Socials />
      </Col>
      {siteMaps.map((siteMap, index) => {
        return (
          <Col span={4} key={index}>
            <SiteMapList
              dataSource={siteMap}
              renderItem={item => (
                <List.Item>
                  <a href="">{item}</a>
                </List.Item>
              )}
            />
          </Col>
        );
      })}
    </SiteMapLayout>
  );
};

const NavigationLayout = styled(Row)`
  .navigation-link {
    font-size: 12px;
    margin: 20px 10px;

    &,
    &:hover {
      color: #333;
    }
  }

  .copy-right {
    flex: 1;
    text-align: right;
  }
`;

const Navigation = () => {
  return (
    <NavigationLayout type="flex">
      <Col>
        <a className="navigation-link" href="">
          日本
        </a>
      </Col>
      <Col>
        <a className="navigation-link" href="">
          個人情報の取り扱い
        </a>
      </Col>
      <Col>
        <a className="navigation-link" href="">
          サイトマップ
        </a>
      </Col>
      <Col className="copy-right">
        <p>Copyright ©Ryohin Keikaku Co., Ltd.</p>
      </Col>
    </NavigationLayout>
  );
};

const Footer = () => {
  return (
    <Layout.Footer>
      <SiteMap />
      <Navigation />
    </Layout.Footer>
  );
};

export default Footer;
