import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import SiderWrapper from "./sider.style";

const { Sider } = Layout;
const MenuItemGroup = Menu.ItemGroup;

class SideMenu extends Component {
  render() {
    return (
      <SiderWrapper>
        <Sider breakpoint="lg" collapsedWidth="0"
          style={{ overflow: 'scroll', position: 'left', left: 0, background: '#f7f7f7'}
      }>
          <Menu>
            <MenuItemGroup title="特集" key="g1">
              <Menu.Item key="10">特集</Menu.Item>
              <Menu.Item key="11">新商品</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="毎日の無印良品" key="g2">
              <Menu.Item key="20">ネット限定 対象商品配送料無料</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="お買い得" key="g3">
              <Menu.Item key="31">期間限定価格</Menu.Item>
              <Menu.Item key="32">まとめ買い</Menu.Item>
              <Menu.Item key="33">切れ端、不揃い、大容量</Menu.Item>
              <Menu.Item key="34">SALE</Menu.Item>
              <Menu.Item key="35">アウトレット</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="衣料品" key="g4">
              <Menu.Item key="4_01"><Link to="/store/cmdty/section/T10000">婦人ウェア</Link></Menu.Item>
              <Menu.Item key="4_02"><Link to="/store/cmdty/section/T10001">婦人インナーウェア</Link></Menu.Item>
              <Menu.Item key="4_03"><Link to="/store/cmdty/section/T10002">紳士ウェア</Link></Menu.Item>
              <Menu.Item key="4_04"><Link to="/store/cmdty/section/T10003">紳士インナーウェア</Link></Menu.Item>
              <Menu.Item key="4_05"><Link to="/store/cmdty/section/T10016">靴下</Link></Menu.Item>
              <Menu.Item key="4_06"><Link to="/store/cmdty/section/T10004">靴</Link></Menu.Item>
              <Menu.Item key="4_07"><Link to="/store/cmdty/section/T10005">バッグ</Link></Menu.Item>
              <Menu.Item key="4_08"><Link to="/store/cmdty/section/T10006">服飾雑貨</Link></Menu.Item>
              <Menu.Item key="4_09"><Link to="/store/cmdty/section/T10013">MUJI Labo 婦人</Link></Menu.Item>
              <Menu.Item key="4_10"><Link to="/store/cmdty/section/T10015">MUJI Labo 紳士</Link></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="子供・マタニティ" key="g5">
              <Menu.Item key="5_01"><Link to="/store/cmdty/section/T10007">ベピー (80 - 100cm)</Link></Menu.Item>
              <Menu.Item key="5_02"><Link to="">キッズ (110 - 150cm)</Link></Menu.Item>
              <Menu.Item key="5_03"><Link to="">マタニティ・新生児</Link></Menu.Item>
              <Menu.Item key="5_04"><Link to="">子供用品・家具・三輪車</Link></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="家具・インテリア" key="g6">
              <Menu.Item key="6_01"><Link to="">ユニットシェルフ</Link></Menu.Item>
              <Menu.Item key="6_02"><Link to="">収納用品</Link></Menu.Item>
              <Menu.Item key="6_03"><Link to="">小物収納用品</Link></Menu.Item>
              <Menu.Item key="6_04"><Link to="">テーブル・チェア</Link></Menu.Item>
              <Menu.Item key="6_05"><Link to="">デスク・チェア</Link></Menu.Item>
              <Menu.Item key="6_06"><Link to="">ベッド</Link></Menu.Item>
              <Menu.Item key="6_07"><Link to="">布団・寝具</Link></Menu.Item>
              <Menu.Item key="6_08"><Link to="">ソファ</Link></Menu.Item>
              <Menu.Item key="6_09"><Link to="">ラグ・クッション・スリッパ</Link></Menu.Item>
              <Menu.Item key="6_10"><Link to="">カーテン・ブラインド</Link></Menu.Item>
              <Menu.Item key="6_11"><Link to="">インテリア用品</Link></Menu.Item>
              <Menu.Item key="6_12"><Link to="">家電・照明</Link></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="ヘルス＆ビューティー" key="g7">
              <Menu.Item key="7_01"><Link to="">スキンケア用品</Link></Menu.Item>
              <Menu.Item key="7_02"><Link to="">メイクアップ用品</Link></Menu.Item>
              <Menu.Item key="7_03"><Link to="">ヘアケア・オーラルケア</Link></Menu.Item>
              <Menu.Item key="7_04"><Link to="">ボディケア・入浴剤</Link></Menu.Item>
              <Menu.Item key="7_05"><Link to="">アロマ・フレグランス</Link></Menu.Item>
              <Menu.Item key="7_06"><Link to="">ポーチ・小分け容器</Link></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="雑貨・日用品" key="g8">            
              <Menu.Item key="8_01"><Link to=""></Link></Menu.Item>
              <Menu.Item key="8_02"><Link to="">食器</Link></Menu.Item>
              <Menu.Item key="8_03"><Link to="">キッチン用品</Link></Menu.Item>
              <Menu.Item key="8_04"><Link to="">タオル・バス・トイレ用品</Link></Menu.Item>
              <Menu.Item key="8_05"><Link to="">掃除・洗濯用品・ハンガー</Link></Menu.Item>
              <Menu.Item key="8_06"><Link to="">文房具</Link></Menu.Item>
              <Menu.Item key="8_07"><Link to="">アルバム</Link></Menu.Item>
              <Menu.Item key="8_08"><Link to="">本・BGM</Link></Menu.Item>
              <Menu.Item key="8_09"><Link to="">自転車</Link></Menu.Item>
              <Menu.Item key="8_10"><Link to="">トラベル用品</Link></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="食品" key="g9">
              <Menu.Item key="9_01"><Link to="">レトルト・調味料</Link></Menu.Item>
              <Menu.Item key="9_02"><Link to="">冷凍食品</Link></Menu.Item>
              <Menu.Item key="9_03"><Link to="">製菓材料</Link></Menu.Item>
              <Menu.Item key="9_04"><Link to="">菓子</Link></Menu.Item>
              <Menu.Item key="9_05"><Link to="">飲料</Link></Menu.Item>
              <Menu.Item key="9_06"><Link to="">食の基本</Link></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="花・グリーン" key="g10">
              <Menu.Item key="10_01"><Link to="">インテリアグリーン</Link></Menu.Item>
              <Menu.Item key="10_02"><Link to="">花</Link></Menu.Item>
              <Menu.Item key="10_03"><Link to="">ハーブ・栽培セット</Link></Menu.Item>
              <Menu.Item key="10_04"><Link to="">ガーデンファニチャー・雑貨</Link></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="産地直送" key="g11">
              <Menu.Item key="111"><Link to="/store/pc/user/shokoku/">諸国良品</Link></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="キャンプ場" key="g30">
              <Menu.Item key="30_01"><a href="https://www.muji.net/camp/">無印良品キャンプ場</a></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="MUJI SUPPORT" key="g40">
              <Menu.Item key="40_01"><a href="https://www.muji.com/jp/mujisupport/#storage">くらしの収納相談</a></Menu.Item>
              <Menu.Item key="40_02"><a href="https://www.muji.com/jp/mujisupport/#roommaking">部屋づくり相談</a></Menu.Item>
              <Menu.Item key="40_03"><a href="https://www.muji.com/jp/mujisupport/#sizeorder">サイズオーダーサービス</a></Menu.Item>
              <Menu.Item key="40_04"><a href="https://www.muji.com/jp/mujisupport/#installation">各種取り付けサービス</a></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="MUJI HOUSE VISION" key="g50">
              <Menu.Item key="50_01"><a href="https://www.muji.net/ie/">無印良品の家</a></Menu.Item>
              <Menu.Item key="50_02"><a href="https://www.muji.net/renovation/">無印良品のリノベーション</a></Menu.Item>
              <Menu.Item key="50_03"><a href="https://www.muji.net/ie/mujiur/">団地リノベーション</a></Menu.Item>
              <Menu.Item key="50_04"><a href="https://housevision.muji.com/renovation/">MUJI Renovation Club</a></Menu.Item>
              <Menu.Item key="50_05"><a href="https://housevision.muji.com/infillplus/">くらしのパーツ相談</a></Menu.Item>
              <Menu.Item key="50_06"><a href="https://www.muji.net/hojin/">法人サービス</a></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="IDÉE" key="g60">
              <Menu.Item key="60_01"><a href="https://www.muji.com/jp/muji-meets-idee/2018aug.html">MUJI meets IDÉE</a></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="募金" key="g70">
              <Menu.Item key="90_01"><Link to="/store/cmdty/donation/">募金券</Link></Menu.Item>
            </MenuItemGroup>
          </Menu>
        </Sider>
      </SiderWrapper>
    );
  }
}

export default SideMenu;
