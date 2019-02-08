import React from "react";

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

const images = {
  "img-purchase-history-1.png": imgPurchaseHistory1,
  "img-purchase-history-2.png": imgPurchaseHistory2,
  "img-purchase-history-3.png": imgPurchaseHistory3,
  "img-purchase-history-4.png": imgPurchaseHistory4
};

const PurchaseItem = ({ item, popoverActions, footerActions }) => {
  const imgUrl = item.jan_code
    ? "/store/cmdty/detail/" + item.jan_code
    : item.id;
  return (
    <TabSliderItem
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
