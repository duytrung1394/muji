import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Row, Col } from "antd";

const Swatch = styled(Col)`
  &&& {
    font-size: 12px;
    cursor: pointer;
    margin: 2px 2px;
  }

  .anticon {
    display: block;
  }
`;

const ImageWrapper = styled.div`
  width: 34px;
  height: 34px;

  img {
    border: 1px solid #585858;
  }
`;

class ItemSwatch extends Component {
  state = {
    expanded: false
  };

  getSwatchLength = () => {
    const swatchMaxLength = this.props.swatches
      ? this.props.swatches.length
      : 0;

    return this.state.expanded
      ? swatchMaxLength
      : swatchMaxLength < 4
        ? swatchMaxLength
        : 4;
  };

  Swatches = () => {
    const { swatches, changeSwatch } = this.props;
    let items = [];

    swatches.slice(0, this.getSwatchLength()).map((swatch, index) => {
      items.push(
        <Swatch
          key={index}
          onMouseOver={() => changeSwatch(swatch.jancode, swatch.nostock)}
        >
          <ImageWrapper>
            <img
              src={`https://img.muji.net/img/item/${swatch.jancode}_99_95.jpg`}
              alt=""
            />
          </ImageWrapper>
        </Swatch>
      );
    });
    return items;
  };

  SwatchToggle = () => {
    const { swatches } = this.props;
    const { expanded } = this.state;

    if (swatches.length <= 4) {
      return null;
    }

    return (
      <Swatch>
        <span
          onClick={() => {
            this.setState({ expanded: !expanded });
          }}
        >
          {expanded ? (
            <div>
              <Icon type="up" theme="outlined" />
              <IntlMessages id="productCategoryTop.itemSwatch.close" />
            </div>
          ) : (
            <div>
              <IntlMessages
                id="productCategoryTop.itemSwatch.otherColors"
                values={{ num: swatches.length - 4 }}
              />
              <Icon type="down" theme="outlined" />
            </div>
          )}
        </span>
      </Swatch>
    );
  };

  render() {
    return (
      <Row type="flex" align="middle" justify="center">
        <this.Swatches />
        <this.SwatchToggle />
      </Row>
    );
  }
}

export default ItemSwatch;
