import React, { Component } from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import StockItem from "./stockItem";
import Notices from "./notices";
import NearByStore from "./nearByStore";
import StoreList from "./storeList";
import styled from "styled-components";

const StockModal = styled.div`
  overflow: hidden;
`;

const ToTop = styled.a`
  float: right;
  padding: 16px 16px 0;
  font-size: 12px;
`;

class ItemStockModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    const { item_data, store_data } = this.props.modalData;
    return (
      <StockModal>
        <StockItem itemData={item_data} />
        <Notices />
        <NearByStore />
        <StoreList storeData={store_data} />
        <ToTop href="http://localhost:4000/store/cmdty/detail/4550002684822#rcDialogTitle0">
          <IntlMessages id="productDetail.toTop" />
        </ToTop>
      </StockModal>
    );
  }
}
export default ItemStockModal;
