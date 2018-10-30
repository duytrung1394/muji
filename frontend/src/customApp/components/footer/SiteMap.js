import React, { Component } from "react";
import styled from "styled-components";
import { List, Col, Row } from "antd";
import { Icons } from "./Icons";

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

const StyledRow = styled(Row)`
  overflow: hidden;
  margin-bottom: 30px;
`;

const StyledList = styled(List)`
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

export const SiteMap = () => {
  return (
    <StyledRow>
      <Col span={8}>
        <img src="https://img.muji.net/img/common/logo-muji.svg" />
        <Icons />
      </Col>
      {siteMaps.map((siteMap, index) => {
        return (
          <Col span={4} key={index}>
            <StyledList
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
    </StyledRow>
  );
};
