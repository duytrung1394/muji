import React, { Component } from "react";
import { Link } from "../../shared/slider";
import styled from "styled-components";
import { Col } from "antd";
import ItemSwatch from "./itemSwatch";
import ItemTag from "./itemTag";
import SizeRange from "./sizeRange";
import IntlMessages from "../../../../components/utility/intlMessages";
import { numberFormatter } from "../../../util/numberFormatter";
import { OutlineButton } from "../../shared/form/button";
import cartIcon from "../../../../image/cmdty/foot/ico-order-btn.png";

const itemStyleParams = `
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3);
  margin: 10px;
  text-align: center;
  img {
    width: 100%;
  }
  position: relative;

  && {
    float: none;
    display: inline-block;
    vertical-align: top;
  }
`;

const ItemDiv = styled.div`
  ${itemStyleParams};
`;

const ItemCol = styled(Col)`
  ${itemStyleParams};
`;

const Title = styled.div`
  text-align: left;
  padding: 0 0 0 10px;
  color: #585858;
  font-size: 12px;
`;

const Material = styled.div`
  text-align: left;
  padding: 10px 0 0 10px;
  color: #999;
  font-size: 11px;
`;

const Price = styled.div`
  font-size: 11px;
  text-align: center;
  padding: 10px 0;
`;

const PriceValue = styled.span`
  color: ${props => (props.isOldPrice ? "#999" : "#333")};
  text-decoration: ${props =>
    props.isOldPrice ? "line-through black" : "none"};
`;

const NewPriceValue = styled(PriceValue)`
  color: #7f0019;
  .arrow {
    color: #999;
    margin: 3px;
  }
`;

const Stock = styled.div`
  margin: 10px 10px 0;
  border: ${props => (props.noStock ? "1px solid #999" : "none")};
  font-size: 12px;
  color: #585858;
`;

const ButtonWrapper = styled.div`
  margin: 20px;
`;

const colLayout = {
  xs: 10,
  sm: 10,
  md: 6,
  lg: 6,
  xl: 5
};

class ItemView extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.jancode !== prevProps.jancode) {
      this.setState({
        currentJancode: this.props.jancode,
        nostock: this.props.nostock
      });
    }
  }

  state = {
    currentJancode: this.props.jancode,
    nostock: this.props.nostock
  };

  changeSwatch = (jancode, nostock) => {
    this.setState({
      currentJancode: jancode,
      nostock: nostock
    });
  };

  render() {
    const {
      swatches,
      itemName,
      itemMaterialName,
      viewPrice,
      discountPrice,
      tags,
      minSize,
      maxSize,
      isSlideScroll,
      cartAddFlg
    } = this.props;
    const image = `https://img.muji.net/img/item/${
      this.state.currentJancode
    }_400.jpg`;
    let Item = ItemCol;
    if (isSlideScroll) {
      Item = ItemDiv;
    }
    return (
      <Item {...colLayout}>
        <Link to={`/store/cmdty/detail/${this.state.currentJancode}`}>
          <div>
            <img src={image} alt="" />
          </div>
          <ItemTag tags={tags} nostock={this.state.nostock} />
          <Stock noStock={this.state.nostock}>
            {this.state.nostock ? (
              <IntlMessages id="productCategoryTop.stock.noStock" />
            ) : (
              "\u00A0"
            )}
          </Stock>
          <Material>{itemMaterialName}</Material>
          <Title>{itemName}</Title>
        </Link>
        <SizeRange minSize={minSize} maxSize={maxSize} />
        <ItemSwatch
          swatches={swatches}
          currentJancode={this.state.currentJancode}
          changeSwatch={this.changeSwatch}
        />
        <Price>
          <PriceValue isOldPrice={discountPrice}>
            <IntlMessages
              id="productCategoryTop.price"
              values={{
                price: (
                  <span className="price">
                    {numberFormatter.format(viewPrice)}
                  </span>
                )
              }}
            />
          </PriceValue>
          {discountPrice && (
            <NewPriceValue>
              <span className="arrow">???</span>
              <IntlMessages
                id="productCategoryTop.price"
                values={{
                  price: (
                    <span className="price">
                      {numberFormatter.format(discountPrice)}
                    </span>
                  )
                }}
              />
            </NewPriceValue>
          )}
        </Price>
        {cartAddFlg && (
          <ButtonWrapper>
            <OutlineButton width="150px" color="#610000" icon={cartIcon}>
              <IntlMessages id="productCategoryTop.button.cartAdd" />
            </OutlineButton>
          </ButtonWrapper>
        )}
      </Item>
    );
  }
}

export default ItemView;
