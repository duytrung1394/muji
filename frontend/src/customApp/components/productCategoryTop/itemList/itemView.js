import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "antd";
import ItemSwatch from "./itemSwatch";
import ItemTag from "./itemTag";
import SizeRange from "./sizeRange";
import IntlMessages from "../../../../components/utility/intlMessages";

const Item = styled(Col)`
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 #585858;
  margin: 10px;
  text-align: center;
  img {
    width: 100%;
  }
  position: relative;
}
 &&{
  float: none;
  display: inline-block;
  vertical-align: top;
}
  
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
  span.price {
    font-size: ${props => (props.isOldPrice ? "inherit" : "15px")};
    margin: 0 3px;
    font-family: "Helvetica", sans-serif;
  }
`;

const NewPriceValue = styled(PriceValue)`
  color: #7f0019;
  .arrow {
    color: #999;
    margin-left: 0 3px;
  }
`;

const priceTaxLabel = <IntlMessages id="productCategoryTop.label.priceTax" />;
const priceCurrencyLabel = (
  <IntlMessages id="productCategoryTop.label.priceCurrency" />
);

class ItemView extends Component {
  state = {
    currentJancode: this.props.swatches[0].jancode,
    nostock: this.props.swatches[0].nostock
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
      maxSize
    } = this.props;
    const image = `https://img.muji.net/img/item/${
      this.state.currentJancode
    }_400.jpg`;
    return (
      <Item xs={12} sm={12} md={8} lg={8} xl={5}>
        <div>
          <img src={image} alt="" />
        </div>
        <ItemTag tags={tags} nostock={this.state.nostock} />
        <Material>{material}</Material>
        <Title>{title}</Title>
        <SizeRange minSize={minSize} maxSize={maxSize} />
        <ItemSwatch
          swatches={swatches}
          currentJancode={this.state.currentJancode}
          changeSwatch={this.changeSwatch}
        />
        <Price>
          <PriceValue isOldPrice={new_price}>
            {priceTaxLabel} <span className="price">{price}</span>
            {priceCurrencyLabel}
          </PriceValue>
          {new_price && (
            <NewPriceValue>
              <span className="arrow">→</span>
              {priceTaxLabel} <span className="price">{new_price}</span>
              {priceCurrencyLabel}
            </NewPriceValue>
          )}
        </Price>
      </Item>
    );
  }
}

export default ItemView;
