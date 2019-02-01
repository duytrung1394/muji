import React, { Component } from "react";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";
import {
  ItemMain,
  ItemImage,
  ItemDescribeList,
  ItemDescribe,
  EllipsisButton,
  PopoverContent,
  PopoverContentWrapper,
  DescribePriceWrapper,
  DescribePricePresent,
  DescribePriceArrow,
  DescribeDiscount
} from "../shared/tabSlider/tabSliderItem";

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

const dateSuffix = type => {
  switch (type) {
    case 1:
      return "favorite.dateSuffix.product";
    case 2:
      return "favorite.dateSuffix.event";
    case 3:
      return "favorite.dateSuffix.article";
  }
};

class FavoriteItemMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      popoverVisible: false
    };
  }

  handleVisibleChange = visible => {
    this.setState({ popoverVisible: visible });
  };

  favoriteItemPopover = (
    <PopoverContentWrapper>
      <PopoverContent>
        <Link to={"#"} draggable={false}>
          <IntlMessages id={"favorite.addDeriveryList"} />
        </Link>
      </PopoverContent>
    </PopoverContentWrapper>
  );

  render() {
    const { item } = this.props;

    const {
      id,
      jan_code,
      favorite_type,
      img_src,
      item_price,
      item_price_present,
      item_discount,
      order_date,
      caption
    } = item;

    const imgUrl = jan_code ? "/store/cmdty/detail/" + jan_code : id;

    return (
      <ItemMain>
        <ItemImage src={images[img_src]} to={imgUrl} />
        <ItemDescribeList>
          <ItemDescribe>
            <DescribePriceWrapper>
              {item_price_present ? (
                <Link to={"#"} style={{ textDecoration: "line-through" }}>
                  {item_price}
                </Link>
              ) : (
                <Link to={"#"}>{item_price}</Link>
              )}
              {item_price_present && <DescribePriceArrow>→</DescribePriceArrow>}
              {item_price_present && (
                <DescribePricePresent>
                  <Link to={"#"}>{item_price_present}</Link>
                </DescribePricePresent>
              )}
            </DescribePriceWrapper>
          </ItemDescribe>
          <ItemDescribe>
            <DescribeDiscount>
              <Link to={"#"}>{item_discount}</Link>
            </DescribeDiscount>
          </ItemDescribe>
          <ItemDescribe>
            <Link to={"#"}>{caption}</Link>
          </ItemDescribe>
          <ItemDescribe>
            {order_date}
            <IntlMessages id={dateSuffix(favorite_type)} />
          </ItemDescribe>
        </ItemDescribeList>

        {favorite_type === 1 && (
          <EllipsisButton
            placement="topRight"
            content={this.favoriteItemPopover}
            trigger="click"
            onVisibleChange={this.handleVisibleChange}
            visible={this.state.popoverVisible}
          />
        )}
      </ItemMain>
    );
  }
}

export default FavoriteItemMain;
