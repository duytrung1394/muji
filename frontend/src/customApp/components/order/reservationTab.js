import React, { Component } from "react";
import styled from "styled-components";
import { Breadcrumb, Modal, Tab, Tabs } from "antd";
import IntlMessages from "../../../components/utility/intlMessages";
import PurchaseItemList from "../../components/order/purchaseItemList";
import PurchaseSearchModal from "../../components/order/purchaseSearchModal";
import { NavLink } from "react-router-dom";

const TabPane = Tabs.TabPane;

const ReservationTabWrapper = styled.div`
  // width: 100%;
  // // display: flex;
  // // justify-content: space-between;
  // align-items: center;
  // margin: 30px auto 0px;
  // padding: 0 50px;

  // a {
  //   display: flex;
  //   align-items: center;
  //   font-size: 12px;
  //   cursor: pointer;
  //   text-decoration: none;
  // }
`;

const ReservationTabBreadcrumb = styled(Breadcrumb)`
  padding: 20px 0 20px 16px !important;

  &,
  span {
    display: flex;
  }

  span {
    a,
    a:hover,
    a:focus {
      color: rgb(96, 179, 250);
    }
  }
`;

const ReservationTabs = styled(Tabs)`
  overflow-y: initial;

  .ant-tabs-nav-wrap {
    margin-top: 20px;
    padding: 0 50px;
    background-color:  rgba(0, 0, 0, 0.05);
  }

  .ant-tabs-nav {
    width: 100%;
    word-wrap: break-word;
    text-align: center;
    font-size: 12px;
    min-width: 85.75px;
  }

  .ant-tabs-nav > * {
    width: calc(100% / 3);
  }

  & div div:last-child div div {
    height: initial;

    .ant-tabs-ink-bar {
      height: 2px;
    }

    .ant-tabs-tab {
      min-width: 85.75px;
      margin: 0;
    }
  }
`;

const ReservationTabPane = styled(TabPane)`
  // height: 10px;
  padding-bottom: 16px;
`;
// class ReservationTab extends Component {

const ReservationTab = ({purchaseItemList}) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modalVisible: false,
  //     currentPage: 0
  //   };
  // }

  // render() {
    return (
      <ReservationTabs
        defaultActiveKey="1"
        // onChange={callback}
      >
        <ReservationTabPane tab="全て" key="1">
          <PurchaseItemList purchaseItemList={purchaseItemList} />
        </ReservationTabPane>
        <ReservationTabPane tab="取り置き完了" key="2">
          <PurchaseItemList purchaseItemList={purchaseItemList} />
        </ReservationTabPane>
        <ReservationTabPane tab="取り置き依頼中" key="3">
          <PurchaseItemList purchaseItemList={purchaseItemList} />
        </ReservationTabPane>
      </ReservationTabs>
    );
}

export default ReservationTab;
