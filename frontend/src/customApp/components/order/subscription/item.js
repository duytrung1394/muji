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

// import imgArticle1 from "../../../image/favorite/article/img-favorite-slide-3-1.png";
// import imgArticle2 from "../../../image/favorite/article/img-favorite-slide-3-2.png";
// import imgEvent1 from "../../../image/favorite/event/img-favorite-slide-2.png";
// import imgProduct1 from "../../../image/favorite/product/img-favorite-slide-1.png";

// const images = {
//   "img-favorite-slide-1.png": imgProduct1,
//   "img-favorite-slide-2.png": imgEvent1,
//   "img-favorite-slide-3-1.png": imgArticle1,
//   "img-favorite-slide-3-2.png": imgArticle2
// };

const FavoriteItem = ({ item, popoverActions, footerActions }) => {
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

export default FavoriteItem;
