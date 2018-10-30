import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "antd";
import ItemSwatch from "./itemSwatch";
import ItemTag from "./itemTag";
import IntlMessages from "../../../../components/utility/intlMessages";

const Item = styled(Col)`
  padding: 10px;
  text-align: center;
  img {
    width: 100%;
  }
  position:relative;
`;

const Title = styled.div`
  padding: 10px;
  color: #333;
  font-size: 12px;
  text-align: center;
`;

const Price = styled.div`
  font-size: 11px;
  text-align: center;
`;

const PriceValue = styled.span`
  color: ${props => (props.isOldPrice ? "#999" : "#333")};
  span.price {
    font-size: 15px;
    font-weight: bold;
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
    const { swatches, title, price, new_price, tags } = this.props;
    const image = `https://img.muji.net/img/item/${
      this.state.currentJancode
    }_400.jpg`;
    return (
      <Item xs={12} sm={12} md={8} lg={8} xl={6}>
        <div>
          <img src={image} alt="" />
        </div>
        <Title>{title}</Title>
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
        <ItemSwatch
          swatches={swatches}
          currentJancode={this.state.currentJancode}
          changeSwatch={this.changeSwatch}
        />
        <ItemTag tags={tags} nostock={this.state.nostock} />
      </Item>
    );
  }
}

export default ItemView;
