import React, { Component } from "react";
import { Link } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";
import {
  ItemMain as ItemMainWrapper,
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
} from "../../shared/tabSlider/tabSliderItem";

import imgSubscription1 from "../../../../image/order/subscription/img-subscription-pro-1.png";

const images = {
  "img-subscription-pro-1.png": imgSubscription1
};

class ItemMain extends Component {
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
          <IntlMessages id={"order.subscription.ellipsisButton.stop"} />
        </Link>
      </PopoverContent>
    </PopoverContentWrapper>
  );

  render() {
    const { item } = this.props;

    const {
      id,
      jan_code,
      img_src,
      item_price,
      item_price_present,
      item_discount,
      item_num,
      order_frequency,
      cancel_type,
      caption
    } = item;

    const imgUrl = jan_code ? "/store/cmdty/detail/" + jan_code : id;

    return (
      <ItemMainWrapper>
        <ItemImage src={images[img_src]} to={imgUrl} />
        <ItemDescribeList>
          <ItemDescribe>
            <IntlMessages id="order.subscription.label.frequency" />
            <IntlMessages
              id="order.subscription.frequency"
              values={{
                frequency: order_frequency
              }}
            />
          </ItemDescribe>
          <ItemDescribe>
            <IntlMessages id="order.subscription.label.num" />
            <IntlMessages
              id="order.subscription.num"
              values={{
                num: item_num
              }}
            />
          </ItemDescribe>
          <ItemDescribe>
            <DescribePriceWrapper>
              {item_price_present ? (
                <Link to={"#"} style={{ textDecoration: "line-through" }}>
                  <IntlMessages
                    id="order.subscription.price"
                    values={{
                      price: item_price
                    }}
                  />
                </Link>
              ) : (
                <Link to={"#"}>
                  <IntlMessages
                    id="order.subscription.price"
                    values={{
                      price: item_price
                    }}
                  />
                </Link>
              )}
              {item_price_present && <DescribePriceArrow>→</DescribePriceArrow>}
              {item_price_present && (
                <DescribePricePresent>
                  <Link to={"#"}>
                    <IntlMessages
                      id="order.subscription.price"
                      values={{
                        price: item_price_present
                      }}
                    />
                  </Link>
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
        </ItemDescribeList>

        {cancel_type === 1 && (
          <EllipsisButton
            placement="topRight"
            content={this.favoriteItemPopover}
            trigger="click"
            onVisibleChange={this.handleVisibleChange}
            visible={this.state.popoverVisible}
          />
        )}
      </ItemMainWrapper>
    );
  }
}

export default ItemMain;
