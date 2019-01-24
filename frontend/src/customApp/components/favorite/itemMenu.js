import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon, Popover } from "antd";
import IntlMessages from "../../../components/utility/intlMessages";

import imgArticle1 from "../../../image/favorite/article/img-favorite-slide-3-1.png";
import imgArticle2 from "../../../image/favorite/article/img-favorite-slide-3-2.png";
import imgEvent1 from "../../../image/favorite/event/img-favorite-slide-2.png";
import imgProduct1 from "../../../image/favorite/product/img-favorite-slide-1.png";

const images = {
  "img-favorite-slide-1.png": imgProduct1,
  "img-favorite-slide-2.png": imgEvent1,
  "img-favorite-slide-3-1.png": imgArticle1,
  "img-favorite-slide-3-2.png": imgArticle2,
};

const FavoriteItemMenu = styled.div`
  position: relative;
  margin-top: 9px;
  min-height: 119px;
  display: flex;
  flex-wrap: nowrap;
  padding: 9px 65px 9px 16px;
  border-top: 1px solid rgb(229, 229, 229);
`;

const FavoriteItemImage = styled.div`
  max-width: 120px;
  width: 40%;

  img {
    width: 100%;

    a {
      display: block;
    }
  }
`;

const FavoriteItemDescribeList = styled.ul`
  margin-left: 15px;
  margin-bottom: 0px;
  width: calc(80% - 15px);
  padding: 0;
  list-style: none;
  line-height: 20px;
`;

const FavoriteItemDescribe = styled.li`
  line-height: 20px;

  a,
  a:hover,
  a:focus {
    color: rgb(0, 0, 0, 0.65);
  }
`;

const EllipsisButtonWrapper = styled.div`
  width: 49px;
  position: absolute;
  bottom: 10px;
  right: 16px;
  cursor: pointer;
`;

const EllipsisButton = styled.button`
  height: 49px;
  width: 49px;
  border-radius: 50%;
  box-shadow: 0 1px 3px 0 rgb(0, 0, 0, 0.65);
  font-size: 30px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.36);
  border: 1px solid rgba(0, 0, 0, 0.36);

  i {
    position: absolute;
    height: 30px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    margin: auto;
    font-size: 30px;
    font-weight: bold;
  }
`;

const PopoverContentWrapper = styled.ul`
  margin: -10px;
  padding: 0;
  border-bottom: 1px solid rgb(153, 153, 153);

  &:last-child {
    border-bottom: none;
  }
`;

const PopoverContent = styled.li`
  list-style-type: none;
  list-style: none;
  text-align: center;
  font-size: 12px;
  border-bottom: 1px solid #999;

  &:last-child {
    border-bottom: none;
  }

  a {
    padding: 16px 5px;
    display: block;

    &,
    &:hover {
      color: rgba(0, 0, 0, 0.65);
    }
  }
`;

const DescribePriceWrapper = styled.li`
  span {
    display: inline-block;
    white-space: nowrap;
  }

  a,
  a:hover,
  a:focus {
    color: rgb(0, 0, 0, 0.65);
  }
`;

const DescribePricePresent = styled.span`
  a,
  a:hover,
  a:focus {
    color: rgb(139, 26, 39);
    font-weight: 600;
  }
`;

const DescribeDiscount = styled.li`
  font-size: 10px;

  a,
  a:hover,
  a:focus {
    color: rgb(0, 0, 0, 0.65);
  }
`;

const DiscribePriceArrow = styled.span`
  margin: 0 5px;
`;

const dateSuffix = type => {
  switch(type) {
    case 1:
      return 'favorite.product.dateSuffix';
    case 2:
      return 'favorite.event.dateSuffix';
    case 3:
      return 'favorite.article.dateSuffix';
  }
}

const FavoriteItemCaption = styled.li`
`;

class FavoriteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      popoverVisible: false
    };
  }

  favoriteItemPopover = (
    <PopoverContentWrapper>
      <PopoverContent>
        <Link to={"#"}>
          <IntlMessages id={"favorite.addDeriveryList"} />
        </Link>
      </PopoverContent>
    </PopoverContentWrapper>
  );

  handleVisibleChange = visible => {
    this.setState({ popoverVisible: visible });
  };

  render() {
    const { item } = this.props;
    const describeList = [item.order_frequency, item.item_num];

    return (
      <FavoriteItemMenu>
        <FavoriteItemImage>
          <Link to={"#"}>
            <img src={images[item.img_src]} alt="" />
          </Link>
        </FavoriteItemImage>
        <FavoriteItemDescribeList>
          {item.caption ? (
            <FavoriteItemCaption>{item.caption}</FavoriteItemCaption>
          ) : null}
          {describeList.map((describe, index) => {
            return (
              <FavoriteItemDescribe key={index}>
                <Link to={"#"}>{describe}</Link>
              </FavoriteItemDescribe>
            );
          })}
          {item.item_price_present ? (
            <DescribePriceWrapper>
              <Link to={"#"} style={{ textDecoration: "line-through" }}>
                {item.item_price}
              </Link>
              <DiscribePriceArrow>→</DiscribePriceArrow>
              <DescribePricePresent>
                <Link to={"#"}>{item.item_price_present}</Link>
              </DescribePricePresent>
            </DescribePriceWrapper>
          ) : (
            <DescribePriceWrapper>
              <Link to={"#"}>{item.item_price}</Link>
            </DescribePriceWrapper>
          )}
          <DescribeDiscount>
            <Link to={"#"}>{item.item_discount}</Link>
          </DescribeDiscount>
          <div>{item.order_date}<IntlMessages id={dateSuffix(item.favorite_type)} /></div>
        </FavoriteItemDescribeList>
        {item.favorite_type === 1 ? (
          <EllipsisButtonWrapper>
            <Popover
              placement="topRight"
              content={this.favoriteItemPopover}
              trigger="click"
              onVisibleChange={this.handleVisibleChange}
              visible={this.state.popoverVisible}
            >
              <EllipsisButton>
                <Icon type="ellipsis" />
              </EllipsisButton>
            </Popover>
          </EllipsisButtonWrapper>
        ) : null}
      </FavoriteItemMenu>
    );
  }
}

export default FavoriteItem;
