import React, { Component } from "react";
import styled from "styled-components";
import { Card, Icon } from "antd";
import { Link } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";

const Swatch = styled(Card.Grid)`
  font-size: 9pt;
  cursor: pointer;
  margin-right: 4px;
  display: inline-block;

  &&& {
    width: 40px;
    box-shadow: none;
    padding: 0;
    float: none;
  }
  .anticon {
    display: block;
  }
`;

const ImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  :hover {
    border: 2px solid grey;
  }
  img {
    border-radius: 50%;
    padding: 1px;
    border: 1px solid white;
  }
`;

const SwatchWrapper = styled.div`
  text-align: center;
`;

class ItemSwatch extends Component {
  state = {
    expanded: false
  };

  SwatchItem = () => {
    const { swatches, changeSwatch } = this.props;
    const swatchLength = this.state.expanded
      ? swatches.length
      : swatches.length < 4
        ? swatches.length
        : 4;
    let items = [];

    for (let i = 0; i < swatchLength; i++) {
      let jancode = swatches[i].jancode;
      let nostock = swatches[i].nostock;
      items.push(
        <Swatch key={i} onMouseOver={() => changeSwatch(jancode, nostock)}>
          <ImageWrapper>
            <Link to={``}>
              <img
                src={`https://img.muji.net/img/item/${jancode}_99_95.jpg`}
                alt=""
              />
            </Link>
          </ImageWrapper>
        </Swatch>
      );
    }
    return items;
  };

  render() {
    const { swatches } = this.props;
    return (
      <SwatchWrapper>
        <this.SwatchItem />
        {!this.state.expanded &&
          swatches.length > 4 && (
            <Swatch
              onClick={() => {
                this.setState({ expanded: true });
              }}
            >
              <IntlMessages id="productCategoryTop.itemSwatch.other" />
              {swatches.length - 4}
              <IntlMessages id="productCategoryTop.itemSwatch.color" />
              <Icon type="down" theme="outlined" />
            </Swatch>
          )}
        {this.state.expanded && (
          <Swatch
            onClick={() => {
              this.setState({ expanded: false });
            }}
          >
            <Icon type="up" theme="outlined" />
            <IntlMessages id="productCategoryTop.itemSwatch.close" />
          </Swatch>
        )}
      </SwatchWrapper>
    );
  }
}

export default ItemSwatch;
