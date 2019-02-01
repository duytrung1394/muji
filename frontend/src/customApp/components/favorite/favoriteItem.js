import { Item } from "../shared/tabSlider/tabSliderItem";
import ItemFooter from "./favoriteItemFooter";
import ItemHeader from "./favoriteItemHeader";
import ItemMain from "./favoriteItemMain";
import React, { Component } from "react";

class FavoriteItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    const { favorite_type } = item;

    return (
      <Item>
        <ItemHeader item={item} />
        <ItemMain item={item} />
        <ItemFooter type={favorite_type} />
      </Item>
    );
  }
}

export default FavoriteItem;
