import React from "react";

import TabSliderItem from "../../shared/tabSlider/item";
import TabSliderItemHeader from "../../shared/tabSlider/itemHeader";
import TabSliderItemMain from "../../shared/tabSlider/itemMain";
import TabSliderItemFooter from "../../shared/tabSlider/itemFooter";

import StoreReserveHeader from "../../order/storeReserve/itemHeader";
import StoreReserveItemMain from "../../order/storeReserve/itemMain";

import imgStoreReserve1 from "../../../../image/order/store_reserve/img-reserve-1.png";
import imgStoreReserve2 from "../../../../image/order/store_reserve/img-reserve-2.png";
import imgStoreReserve3 from "../../../../image/order/store_reserve/img-reserve-3.png";

const images = {
  "img-reserve-1.png": imgStoreReserve1,
  "img-reserve-2.png": imgStoreReserve2,
  "img-reserve-3.png": imgStoreReserve3
};

const StoreReserveItem = ({ item, popoverActions, footerActions }) => {
  const imgUrl = item.jan_code
    ? "/store/cmdty/detail/" + item.jan_code
    : item.id;
  return (
    <TabSliderItem
      header={
        <TabSliderItemHeader content={<StoreReserveHeader item={item} />} />
      }
      main={
        <TabSliderItemMain
          content={<StoreReserveItemMain item={item} />}
          img={images[item.img_src]}
          imgUrl={imgUrl}
          actions={popoverActions}
        />
      }
      footer={<TabSliderItemFooter actions={footerActions} />}
    />
  );
};

export default StoreReserveItem;
