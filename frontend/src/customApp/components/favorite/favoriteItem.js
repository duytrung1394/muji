import React, { Component, Fragment } from "react";
import FavoriteItemHeader from "./favoriteItemHeader";
import FavoriteItemMain from "./favoriteItemMain";

import TabSliderItem from "../shared/tabSlider/item";
import TabSliderItemHeader from "../shared/tabSlider/itemHeader";
import TabSliderItemMain from "../shared/tabSlider/itemMain";
import TabSliderItemFooter from "../shared/tabSlider/itemFooter";

import imgArticle1 from "../../../image/favorite/article/img-favorite-slide-3-1.png";
import imgArticle2 from "../../../image/favorite/article/img-favorite-slide-3-2.png";
import imgEvent1 from "../../../image/favorite/event/img-favorite-slide-2.png";
import imgProduct1 from "../../../image/favorite/product/img-favorite-slide-1.png";

const images = {
  "img-favorite-slide-1.png": imgProduct1,
  "img-favorite-slide-2.png": imgEvent1,
  "img-favorite-slide-3-1.png": imgArticle1,
  "img-favorite-slide-3-2.png": imgArticle2
};

const FavoriteItem = ({ item, popoverActions, footerActions }) => {
  return (
    <TabSliderItem
      header={
        <TabSliderItemHeader content={<FavoriteItemHeader item={item} />} />
      }
      main={
        <TabSliderItemMain
          content={<FavoriteItemMain item={item} />}
          img={images[item.img_src]}
          actions={popoverActions}
        />
      }
      footer={<TabSliderItemFooter actions={footerActions} />}
    />
  );
};

export default FavoriteItem;
