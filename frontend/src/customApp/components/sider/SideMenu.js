import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Menu, Icon, Select} from "antd";
import MenuIcon from "../icon/menulcon";
import SiderWrapper from "./sider.style";
import NavLink from "./NavLink";
import { Link } from 'react-router-dom';
import sidebarIcon2 from "./sider_icons/sidebarIcon2.png";
import sidebarIcon3 from "./sider_icons/sidebarIcon3.png";
import sidebarIcon4 from "./sider_icons/sidebarIcon4.png";
import sidebarIcon5 from "./sider_icons/sidebarIcon5.png";
import sidebarIcon6 from "./sider_icons/sidebarIcon6.png";
import sidebarIcon7 from "./sider_icons/sidebarIcon7.png";
import sidebarIcon8 from "./sider_icons/sidebarIcon8.png";
import sidebarIcon9 from "./sider_icons/sidebarIcon9.png";
import sidebarIcon10 from "./sider_icons/sidebarIcon10.png";
import sidebarIcon11 from "./sider_icons/sidebarIcon11.png";
import sidebarIcon12 from "./sider_icons/sidebarIcon12.png";


const { Sider } = Layout;
const MenuItemGroup = Menu.ItemGroup;

const SideMenu = () => {

    return (
      <SiderWrapper>
        <Sider breakpoint="lg" collapsedWidth="0" width="230">
          <Menu>
            <MenuItemGroup title={<span><img className="sider-icon"/><span>特集</span></span>} key="g1">
              <Menu.Item key="10">特集</Menu.Item>
              <Menu.Item key="11">新商品</Menu.Item>
            </MenuItemGroup>


            <MenuItemGroup title="" key="g2">
            <Menu.Item key="20"><NavLink to="/store/cmdty/section/T001011">毎日の無印良品
            <p className="sider-everyday-p">ネット限定 対象商品配送料無料</p></NavLink></Menu.Item>
            </MenuItemGroup>


            <MenuItemGroup title={<span><img className="sider-icon"/><span>お買い得</span></span>} key="g3">
              <Menu.Item key="31">期間限定価格</Menu.Item>
              <Menu.Item key="32">まとめ買い</Menu.Item>
              <Menu.Item key="33">切れ端、不揃い、大容量</Menu.Item>
              <Menu.Item key="34">SALE</Menu.Item>
              <Menu.Item key="35">アウトレット</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup key="g4" title={<span><img className="sider-icon"　src={sidebarIcon2}/><span>衣料品</span></span>}>
              <Menu.Item className="ant-menu-item" key="4_01"><NavLink  to="/store/cmdty/section/T10000">婦人ウェア</NavLink></Menu.Item>
              <Menu.Item key="4_02"><NavLink to="/store/cmdty/section/T10001">婦人インナーウェア</NavLink></Menu.Item>
              <Menu.Item key="4_03"><NavLink to="/store/cmdty/section/T10002">紳士ウェア</NavLink></Menu.Item>
              <Menu.Item key="4_04"><NavLink to="/store/cmdty/section/T10003">紳士インナーウェア</NavLink></Menu.Item>
              <Menu.Item key="4_05"><NavLink to="/store/cmdty/section/T10016">靴下</NavLink></Menu.Item>
              <Menu.Item key="4_06"><NavLink to="/store/cmdty/section/T10004">靴</NavLink></Menu.Item>
              <Menu.Item key="4_07"><NavLink to="/store/cmdty/section/T10005">バッグ</NavLink></Menu.Item>
              <Menu.Item key="4_08"><NavLink to="/store/cmdty/section/T10006">服飾雑貨</NavLink></Menu.Item>
              <Menu.Item key="4_09"><NavLink to="/store/cmdty/section/T10013">MUJI Labo 婦人</NavLink></Menu.Item>
              <Menu.Item key="4_10"><NavLink to="/store/cmdty/section/T10015">MUJI Labo 紳士</NavLink></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title={<span><img className="sider-icon"　src={sidebarIcon3}/><span>子供・マタニティ</span></span>} key="g5">
              <Menu.Item key="5_01"><NavLink to="/store/cmdty/section/T10007">ベピー (80 - 100cm)</NavLink></Menu.Item>
              <Menu.Item key="5_02"><NavLink to="">キッズ (110 - 150cm)</NavLink></Menu.Item>
              <Menu.Item key="5_03"><NavLink to="">マタニティ・新生児</NavLink></Menu.Item>
              <Menu.Item key="5_04"><NavLink to="">子供用品・家具・三輪車</NavLink></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title={<span><img className="sider-icon"　src={sidebarIcon4}/><span>家具・インテリア・家電</span></span>} key="g6">
              <Menu.Item key="6_01"><NavLink to="">ユニットシェルフ</NavLink></Menu.Item>
              <Menu.Item key="6_02"><NavLink to="">収納用品</NavLink></Menu.Item>
              <Menu.Item key="6_03"><NavLink to="">小物収納用品</NavLink></Menu.Item>
              <Menu.Item key="6_04"><NavLink to="">テーブル・チェア</NavLink></Menu.Item>
              <Menu.Item key="6_05"><NavLink to="">デスク・チェア</NavLink></Menu.Item>
              <Menu.Item key="6_06"><NavLink to="">ベッド</NavLink></Menu.Item>
              <Menu.Item key="6_07"><NavLink to="">布団・寝具</NavLink></Menu.Item>
              <Menu.Item key="6_08"><NavLink to="">ソファ</NavLink></Menu.Item>
              <Menu.Item key="6_09"><NavLink to="">ラグ・クッション・スリッパ</NavLink></Menu.Item>
              <Menu.Item key="6_10"><NavLink to="">カーテン・ブラインド</NavLink></Menu.Item>
              <Menu.Item key="6_11"><NavLink to="">インテリア用品</NavLink></Menu.Item>
              <Menu.Item key="6_12"><NavLink to="">家電・照明</NavLink></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title={<span><img className="sider-icon"　src={sidebarIcon5}/><span>ヘルス＆ビューティー</span></span>} key="g7">
              <Menu.Item key="7_01"><NavLink to="">スキンケア用品</NavLink></Menu.Item>
              <Menu.Item key="7_02"><NavLink to="">メイクアップ用品</NavLink></Menu.Item>
              <Menu.Item key="7_03"><NavLink to="">ヘアケア・オーラルケア</NavLink></Menu.Item>
              <Menu.Item key="7_04"><NavLink to="">ボディケア・入浴剤</NavLink></Menu.Item>
              <Menu.Item key="7_05"><NavLink to="">アロマ・フレグランス</NavLink></Menu.Item>
              <Menu.Item key="7_06"><NavLink to="">ポーチ・小分け容器</NavLink></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title={<span><img className="sider-icon"　src={sidebarIcon6}/><span>雑貨・日用品</span></span>} key="g8">            
              <Menu.Item key="8_01"><NavLink to="">食器</NavLink></Menu.Item>
              <Menu.Item key="8_02"><NavLink to="">キッチン用品</NavLink></Menu.Item>
              <Menu.Item key="8_03"><NavLink to="">タオル・バス・トイレ用品</NavLink></Menu.Item>
              <Menu.Item key="8_04"><NavLink to="">掃除・洗濯用品・ハンガー</NavLink></Menu.Item>
              <Menu.Item key="8_05"><NavLink to="">文房具</NavLink></Menu.Item>
              <Menu.Item key="8_06"><NavLink to="">アルバム</NavLink></Menu.Item>
              <Menu.Item key="8_07"><NavLink to="">本・BGM</NavLink></Menu.Item>
              <Menu.Item key="8_08"><NavLink to="">自転車</NavLink></Menu.Item>
              <Menu.Item key="8_09"><NavLink to="">トラベル用品</NavLink></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title={<span><img className="sider-icon"　src={sidebarIcon7}/><span>食品</span></span>} key="g9">
              <Menu.Item key="9_01"><NavLink to="">レトルト・調味料</NavLink></Menu.Item>
              <Menu.Item key="9_02"><NavLink to="">冷凍食品</NavLink></Menu.Item>
              <Menu.Item key="9_03"><NavLink to="">製菓材料</NavLink></Menu.Item>
              <Menu.Item key="9_04"><NavLink to="">菓子</NavLink></Menu.Item>
              <Menu.Item key="9_05"><NavLink to="">飲料</NavLink></Menu.Item>
              <Menu.Item key="9_06"><NavLink to="">食の基本</NavLink></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title={<span><img className="sider-icon"　src={sidebarIcon8}/><span>花・グリーン</span></span>} key="g10">
              <Menu.Item key="10_01"><NavLink to="">インテリアグリーン</NavLink></Menu.Item>
              <Menu.Item key="10_02"><NavLink to="">花</NavLink></Menu.Item>
              <Menu.Item key="10_03"><NavLink to="">ハーブ・栽培セット</NavLink></Menu.Item>
              <Menu.Item key="10_04"><NavLink to="">ガーデンファニチャー・雑貨</NavLink></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title={<span><img className="sider-icon"　src={sidebarIcon9}/><span>産地直送</span></span>} key="g11">
              <Menu.Item key="111"><NavLink to="/store/pc/user/shokoku/">諸国良品</NavLink></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title={<span><img className="sider-icon"　src={sidebarIcon10}/><span>キャンプ場</span></span>} key="g30">
              <Menu.Item key="30_01"><a href="https://www.muji.net/camp/">無印良品キャンプ場</a></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title={<span><img className="sider-icon"　src={sidebarIcon11}/><span>MUJI SUPPORT</span></span>} key="g40">
              <Menu.Item key="40_01"><a href="https://www.muji.com/jp/mujisupport/#storage">くらしの収納相談</a></Menu.Item>
              <Menu.Item key="40_02"><a href="https://www.muji.com/jp/mujisupport/#roommaking">部屋づくり相談</a></Menu.Item>
              <Menu.Item key="40_03"><a href="https://www.muji.com/jp/mujisupport/#sizeorder">サイズオーダーサービス</a></Menu.Item>
              <Menu.Item key="40_04"><a href="https://www.muji.com/jp/mujisupport/#installation">各種取り付けサービス</a></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title={<span><img className="sider-icon"　src={sidebarIcon11}/><span>MUJI HOUSE VISION</span></span>} key="g50">
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
            <MenuItemGroup title={<span><img className="sider-icon"　src={sidebarIcon12}/><span>募金</span></span>} key="g70">
              <Menu.Item key="90_01"><NavLink to="/store/cmdty/donation/">募金券</NavLink></Menu.Item>
            </MenuItemGroup>
          </Menu>
        </Sider>
      </SiderWrapper>
    );
  }


export default SideMenu;
