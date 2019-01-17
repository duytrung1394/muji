import React from "react";
import styled from "styled-components";
import { Tabs } from "antd";
import StoreReserveItemList from "./storeReserve/itemList";
import IntlMessages from "../../../components/utility/intlMessages";

const TabPane = Tabs.TabPane;

const TabsWrapper = styled(Tabs)`
  overflow-y: initial;
  width: 100%;

  .ant-tabs-bar {
    margin-bottom: 0;
  }

  .ant-tabs-nav {
    width: 100%;
    word-wrap: break-word;
    text-align: center;
    font-size: 12px;
    min-width: 85.75px;

    &-wrap {
      margin-top: 20px;
      padding: 0 50px;
      background-color: rgba(0, 0, 0, 0.05);
    }

    .ant-tabs-ink-bar {
      height: 2px;

      &-animated {
        width: calc(100% / 3) !important;
      }
    }

    & > * {
      width: calc(100% / 3);
    }

    .ant-tabs-tab {
      height: initial;
      min-width: 85.75px;
      margin: 0;
    }
  }
`;

const StyledTabPane = styled(TabPane)`
  padding-bottom: 16px;
`;

const TabText = id => {
  return <IntlMessages id={id} />;
};

const OrderTabs = ({ itemList, tabList }) => {
  return (
    <TabsWrapper defaultActiveKey="0">
      {itemList.map((item, index) => {
        return (
          <StyledTabPane tab={TabText(tabList[index])} key={index}>
            <StoreReserveItemList itemList={item} />
          </StyledTabPane>
        );
      })}
    </TabsWrapper>
  );
};

export default OrderTabs;
