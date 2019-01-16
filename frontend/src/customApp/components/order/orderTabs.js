import React, { Component } from "react";
import styled from "styled-components";
import { Breadcrumb, Modal, Tab, Tabs } from "antd";
import IntlMessages from "../../../components/utility/intlMessages";
// import PurchaseItemList from "./itemList";
import StoreReserveItemList from "./storeReserve/itemList";

const TabPane = Tabs.TabPane;

const TabsWrapper = styled(Tabs)`
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

const StyledTabPane = styled(TabPane)`
  padding-bottom: 16px;
`;

const TabList = [
  '全て',
  '取り置き完了',
  '取り置き依頼中'
];

const OrderTabs = ({itemList}) => {
    return (
      <TabsWrapper
        defaultActiveKey="0"
      >
        {
          itemList.map((item, index) => {
            return (
              <StyledTabPane tab={TabList[index]} key={index}>
                <StoreReserveItemList itemList={item} />
              </StyledTabPane>
            )
          })
        }

      </TabsWrapper>
    );
}

export default OrderTabs;
