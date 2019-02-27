import React from "react";

import TabSliderItem from "../../shared/tabSlider/item";
import TabSliderItemHeader from "../../shared/tabSlider/itemHeader";
import TabSliderItemMain from "../../shared/tabSlider/itemMain";
import TabSliderItemFooter from "../../shared/tabSlider/itemFooter";

import SubscriptionHeader from "../../order/subscription/itemHeader";
import SubscriptionItemMain from "../../order/subscription/itemMain";

import imgSubscription1 from "../../../../image/order/subscription/img-subscription-pro-1.png";
const images = {
  "img-subscription-pro-1.png": imgSubscription1
};

const Item = ({ item, popoverActions, footerActions }) => {
  const imgUrl = item.jan_code
    ? "/store/cmdty/detail/" + item.jan_code
    : item.id;
  return (
    <TabSliderItem
      header={
        <TabSliderItemHeader content={<SubscriptionHeader item={item} />} />
      }
      main={
        <TabSliderItemMain
          content={<SubscriptionItemMain item={item} />}
          img={images[item.img_src]}
          imgUrl={imgUrl}
          actions={popoverActions}
        />
      }
      footer={<TabSliderItemFooter actions={footerActions} />}
    />
  );
};

export default Item;
