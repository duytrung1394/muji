import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "antd";

const Swatch = styled(Card.Grid)`
  width: 20% !important;
  box-shadow: none !important;
  padding: 0 !important;
  font-size: 9pt;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

class ItemSwatch extends Component {
  state = {
    expanded: false
  };

  render() {
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
            <img
              src={`https://img.muji.net/img/item/${jancode}_99_95.jpg`}
              alt=""
            />
          </ImageWrapper>
        </Swatch>
      );
    }

    return (
      <div>
        {items}
        {!this.state.expanded && swatches.length > 4 && <Swatch>他10色</Swatch>}
      </div>
    );
  }
}

export default ItemSwatch;
