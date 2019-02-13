import React, { Component } from "react";
import { Link } from "../../shared/slider";
import styled from "styled-components";
import { Col } from "antd";
import ItemSwatch from "./itemSwatch";
import ItemTag from "./itemTag";
import SizeRange from "./sizeRange";
import IntlMessages from "../../../../components/utility/intlMessages";

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
  font-family: "Helvetica", sans-serif;
  span.price {
    font-size: ${props => (props.isOldPrice ? "inherit" : "15px")};
  }
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

const colLayout = {
  xs: 10,
  sm: 10,
  md: 6,
  lg: 6,
  xl: 5
};

class ItemView extends Component {
  state = {
    currentJancode: this.props.swatches
      ? this.props.swatches[0].jancode
      : this.props.jancode,
    nostock: this.props.swatches
      ? this.props.swatches[0].nostock
      : this.props.nostock
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
      title,
      material,
      price,
      new_price,
      tags,
      minSize,
      maxSize,
      isSlideScroll
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
        <Link to="">
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
          <Material>{material}</Material>
          <Title>{title}</Title>
        </Link>
        <SizeRange minSize={minSize} maxSize={maxSize} />
        <ItemSwatch
          swatches={swatches}
          currentJancode={this.state.currentJancode}
          changeSwatch={this.changeSwatch}
        />
        <Price>
          <PriceValue isOldPrice={new_price}>
            <IntlMessages
              id="productCategoryTop.price"
              values={{ price: <span className="price">{price}</span> }}
            />
          </PriceValue>
          {new_price && (
            <NewPriceValue>
              <span className="arrow">→</span>
              <IntlMessages
                id="productCategoryTop.price"
                values={{ price: <span className="price">{new_price}</span> }}
              />
            </NewPriceValue>
          )}
        </Price>
      </Item>
    );
  }
}

export default ItemView;
