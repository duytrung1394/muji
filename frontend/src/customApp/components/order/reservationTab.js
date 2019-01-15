import React, { Component } from "react";
import styled from "styled-components";
import { Breadcrumb, Modal, Tab, Tabs } from "antd";
import IntlMessages from "../../../components/utility/intlMessages";
import PurchaseItemList from "../../components/order/purchaseItemList";
import PurchaseSearchModal from "../../components/order/purchaseSearchModal";
import { NavLink } from "react-router-dom";

const TabPane = Tabs.TabPane;

const ReservationTabs = styled(Tabs)`
  overflow-y: initial;
  width: 100%;

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
  padding-bottom: 16px;
`;

const TabList = [
  '全て',
  '取り置き完了',
  '取り置き依頼中'
];

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
        defaultActiveKey="0"
        // onChange={callback}
      >
        {
          purchaseItemList.map((purchaseItem, index) => {
            return (
              <ReservationTabPane tab={TabList[index]} key={index}>
                <PurchaseItemList purchaseItemList={purchaseItem} />
              </ReservationTabPane>
            )
          })
        }

      </ReservationTabs>
    );
}

export default ReservationTab;
