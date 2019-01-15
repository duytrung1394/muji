import React, { Component } from "react";
import { Link } from "react-router-dom";
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

const priceTaxLabel = <IntlMessages id="productCategoryTop.label.priceTax" />;
const priceCurrencyLabel = (
  <IntlMessages id="productCategoryTop.label.priceCurrency" />
);

const Stock = styled.div`
  margin: 10px 10px 0;
  border: ${props => (props.noStock ? "1px solid #999" : "none")};
  font-size: 12px;
  color: #585858;
`;

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
      <Item xs={10} sm={10} md={8} lg={8} xl={5}>
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
