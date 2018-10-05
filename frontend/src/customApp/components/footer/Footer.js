import React, { Component } from "react";
import { Layout,Row,Col } from "antd";
import FooterWrapper from "./footer.style";

const AntdFooter = Layout.Footer;

class Footer extends Component {
  
  render() {
    return (
      <FooterWrapper>
        <AntdFooter>
          <Row>
            <Col span={6}>
              <ul>
                <li id="footer-logo"><a><img src="https://img.muji.net/img/common/logo-muji.svg"></img></a></li>
                <li class="social-buttons">
                  <ul>
                      <li>
                        <a><img src="https://img.muji.net/img/common/twitter-with-circle.svg"></img></a>
                      </li>
                      <li>
                        <a><img src="https://img.muji.net/img/common/facebook-with-circle.svg"></img></a>
                      </li>
                      <li>
                        <a><img src="https://img.muji.net/img/common/youtube-with-circle.svg"></img></a>
                      </li>
                      <li>
                        <a><img src="https://img.muji.net/img/common/instagram-with-circle.svg"></img></a>
                      </li>
                  </ul>
                </li>
              </ul>
            </Col>
            <Col span={4}>
              <ul>
                <li><a>店舗情報</a></li>
                <li><a>イベント</a></li>
                <li><a>くらしの研究所</a></li>
                <li><a>MUJI SUPPORT</a></li>
                <li><a>MUJI HOUSE VISION</a></li>
                <li><a>お問い合わせ</a></li>
              </ul>
            </Col>
            <Col span={4}>
              <ul>
                <li><a>無印良品の家</a></li>
                <li><a>Cafe＆Meal MUJI</a></li>
                <li><a>キャンプ場</a></li>
                <li><a>Found MUJI</a></li>
                <li><a>MUJI BOOKS</a></li>
                <li><a>MUJI HOTEL</a></li>
              </ul>
            </Col>
            <Col span={4}>
              <ul>
                <li><a>MUJI passport</a></li>
                <li><a>カタログ</a></li>
                <li><a>MUJI Card</a></li>
                <li><a>MUJI GIFT CARD</a></li>
                <li><a>法人のお客様へ</a></li>
                <li><a>Tax-free Services</a></li>
              </ul>
            </Col>
            <Col span={4}>
              <ul>
                <li><a>ニュースリリース</a></li>
                <li><a>採用情報</a></li>
                <li><a>無印良品のメッセージ</a></li>
                <li><a>無印良品について</a></li>
                <li><a>株式会社　良品計画</a></li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <ul>
                <Col span={1}><li><a>日本</a></li></Col>
                <Col span={3}><li><a>個人情報の取り扱い</a></li></Col>
                <Col span={3}><li><a>サイトマップ</a></li></Col>
              </ul>
              </Col>
           </Row>
        </AntdFooter>
      </FooterWrapper>
    );
  }
}

export default Footer;
