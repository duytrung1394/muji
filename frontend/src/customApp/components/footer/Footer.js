import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import FooterWrapper from "./footer.style";

const AntdFooter = Layout.Footer;

const Footer = () => {
  return (
    <FooterWrapper>
      <AntdFooter className="antd-footer">
        <Row type="flex" justify="start">
          <Col md={{ span: 8 }} span={6}>
            <ul>
              <li class="footer-logo">
                <a>
                  <img src="https://img.muji.net/img/common/logo-muji.svg" />
                </a>
              </li>
              <li class="social-buttons">
                <ul>
                  <li>
                    <a>
                      <img src="https://img.muji.net/img/common/twitter-with-circle.svg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://img.muji.net/img/common/facebook-with-circle.svg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://img.muji.net/img/common/youtube-with-circle.svg" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src="https://img.muji.net/img/common/instagram-with-circle.svg" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col span={4}>
            <Row className="footer-common-row">
              <Col>
                <a>店舗情報</a>
              </Col>
              <Col>
                <a>イベント</a>
              </Col>
              <Col>
                <a>くらしの研究所</a>
              </Col>
              <Col>
                <a>MUJI SUPPORT</a>
              </Col>
              <Col>
                <a>MUJI HOUSE VISION</a>
              </Col>
              <Col>
                <a>お問い合わせ</a>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row className="footer-common-row">
              <Col>
                <a>無印良品の家</a>
              </Col>
              <Col>
                <a>Cafe＆Meal MUJI</a>
              </Col>
              <Col>
                <a>キャンプ場</a>
              </Col>
              <Col>
                <a>Found MUJI</a>
              </Col>
              <Col>
                <a>MUJI BOOKS</a>
              </Col>
              <Col>
                <a>MUJI HOTEL</a>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row className="footer-common-row">
              <Col>
                <a>MUJI passport</a>
              </Col>
              <Col>
                <a>カタログ</a>
              </Col>
              <Col>
                <a>MUJI Card</a>
              </Col>
              <Col>
                <a>MUJI GIFT CARD</a>
              </Col>
              <Col>
                <a>法人のお客様へ</a>
              </Col>
              <Col>
                <a>Tax-free Services</a>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row>
              <Col>
                <a>ニュースリリース</a>
              </Col>
              <Col>
                <a>採用情報</a>
              </Col>
              <Col>
                <a>無印良品のメッセージ</a>
              </Col>
              <Col>
                <a>無印良品について</a>
              </Col>
              <Col>
                <a>株式会社　良品計画</a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="footer-navi">
          <Col span={24}>
            <Row>
              <Col span={2}>
                <a>日本</a>
              </Col>
              <Col span={6}>
                <a>個人情報の取り扱い</a>
              </Col>
              <Col span={4}>
                <a>サイトマップ</a>
              </Col>
              <Col span={12} className="copy-right">
                <a>Copyright ©Ryohin Keikaku Co., Ltd.</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </AntdFooter>
    </FooterWrapper>
  );
};

export default Footer;
