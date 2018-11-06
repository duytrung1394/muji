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

  getSwatchLength = swatches => {
    const swatchLength = this.state.expanded
      ? swatches.length
      : swatches.length < 4
        ? swatches.length
        : 4;
    return swatchLength;
  };

  getSwatches = () => {
    const { swatches, changeSwatch } = this.props;
    let items = [];

    swatches.slice(0, this.getSwatchLength(swatches)).map((color, index) => {
      let jancode = color.jancode;
      let nostock = color.nostock;

      items.push(
        <Swatch key={index} onMouseOver={() => changeSwatch(jancode, nostock)}>
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
    });
    return items;
  };

  swatchToggle = ({ expanded, values }) => {
    return (
      <Swatch>
        <span
          onClick={() => {
            this.setState({ expanded: !expanded });
          }}
        >
          {!expanded ? (
            <div>
              <IntlMessages
                id="productCategoryTop.itemSwatch.otherColors"
                values={{ num: values }}
              />
              <Icon type="down" theme="outlined" />
            </div>
          ) : (
            <div>
              <Icon type="up" theme="outlined" />
              <IntlMessages id="productCategoryTop.itemSwatch.close" />
            </div>
          )}
        </span>
      </Swatch>
    );
  };

  render() {
    const { swatches } = this.props;

    return (
      <SwatchWrapper>
        <this.getSwatches />
        {swatches.length > 4 && (
          <this.swatchToggle
            expanded={this.state.expanded}
            values={swatches.length - 4}
          />
        )}
      </SwatchWrapper>
    );
  }
}

export default ItemSwatch;
