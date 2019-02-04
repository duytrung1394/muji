import { Item as ItemWrapper } from "../../shared/tabSlider/tabSliderItem";
import ItemFooter from "./itemFooter";
import ItemHeader from "./itemHeader";
import ItemMain from "./itemMain";
import React, { Component } from "react";
import styled from "styled-components";

const StyledItemHeader = styled(ItemHeader)`
  margin-top: 15px;
`;

class FavoriteItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    const { cancel_type } = item;

    return (
      <ItemWrapper>
        <StyledItemHeader item={item} />
        <ItemMain item={item} />
        <ItemFooter type={cancel_type} />
      </ItemWrapper>
    );
  }
}

export default FavoriteItem;
