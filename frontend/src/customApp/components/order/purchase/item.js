import React from "react";
import styled from "styled-components";

import TabSliderItem from "../../shared/tabSlider/item";
import TabSliderItemHeader from "../../shared/tabSlider/itemHeader";
import TabSliderItemMain from "../../shared/tabSlider/itemMain";
import TabSliderItemFooter from "../../shared/tabSlider/itemFooter";

import PurchaseHeader from "../../order/purchase/itemHeader";
import PurchaseItemMain from "../../order/purchase/itemMain";

import imgPurchaseHistory1 from "../../../../image/order/purchase_history/img-purchase-history-1.png";
import imgPurchaseHistory2 from "../../../../image/order/purchase_history/img-purchase-history-2.png";
import imgPurchaseHistory3 from "../../../../image/order/purchase_history/img-purchase-history-3.png";
import imgPurchaseHistory4 from "../../../../image/order/purchase_history/img-purchase-history-4.png";
import mediaQuery from "../../../mediaQuery";

const images = {
  "img-purchase-history-1.png": imgPurchaseHistory1,
  "img-purchase-history-2.png": imgPurchaseHistory2,
  "img-purchase-history-3.png": imgPurchaseHistory3,
  "img-purchase-history-4.png": imgPurchaseHistory4
};

const StyledTabSliderItem = styled(TabSliderItem)`
  width: auto;
  margin-right: 0;
`;

const PurchaseItemWrapper = styled.section`
  margin-bottom: 20px;
  padding-top: 1px;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgb(0, 0, 0, 0.65);
  box-sizing: border-box;
  font-size: 12px;
  ${mediaQuery.greaterThan("sm")`
    margin-bottom: 10px;
  `};
`;

const PurchaseHistoryTitle = styled.h2`
  line-height: 16px;
  margin-top: 15px;
  padding: 0 16px;
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.65);
`;

const PurchaseItemInfo = styled.div`
  margin-top: 13px;
  padding: 0 16px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ShoppingAddress = styled.div`
  text-align: right;
  width: 30%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  a,
  a:hover,
  a:focus {
    color: rgb(96, 179, 250);
  }
`;

const OrderAddress = styled.p`
  display: inline;
  color: rgb(96, 179, 250);
`;

const PurchaseItemMenu = styled.div`
  position: relative;
  margin-top: 13px;
  min-height: 139px;
  display: flex;
  flex-wrap: nowrap;
  padding: 9px 65px 9px 16px;
  border-top: 1px solid rgb(229, 229, 229);
`;

const PurchaseItemImage = styled.div`
  max-width: 120px;
  width: 40%;

  img {
    width: 100%;

    a {
      display: block;
    }
  }
`;

const PurchaseItemDescribeList = styled.ul`
  margin-left: 15px;
  margin-bottom: 0px;
  width: calc(80% - 15px);
  padding: 0;
  list-style: none;
`;

const PurchaseItem = ({ item, popoverActions, footerActions }) => {
  const imgUrl = item.jan_code
    ? "/store/cmdty/detail/" + item.jan_code
    : item.id;
  return (
    <StyledTabSliderItem
      header={<TabSliderItemHeader content={<PurchaseHeader item={item} />} />}
      main={
        <TabSliderItemMain
          content={<PurchaseItemMain item={item} />}
          img={images[item.img_src]}
          imgUrl={imgUrl}
          actions={popoverActions}
        />
      }
      footer={<TabSliderItemFooter actions={footerActions} />}
    />
  );
};

export default PurchaseItem;
