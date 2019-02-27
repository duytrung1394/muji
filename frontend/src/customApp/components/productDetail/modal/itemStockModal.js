import React, { Component } from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Modal } from "antd";
import ItemDetail from "./ItemDetail";
import Notices from "./notices";
import StoreSearchByMap from "./storeSearchByMap";
import StoreSearchByList from "./storeSearchByList";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  max-height: 90vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  margin: auto;
  overflow: scroll;
  .ant-modal-header {
    border-bottom: none;
  }
  .ant-modal-close {
    color: #333;
    font-weight: 600;
    .ant-modal-close-x {
      font-size: 12px;
    }
  }
`;

const ModalBodyStyle = {
  paddingTop: "0px"
};

const StockModalContents = styled.div`
  overflow: hidden;
`;

const ToTop = styled.a`
  float: right;
  padding: 16px 16px 0;
  font-size: 12px;
`;

const ItemStockModal = props => {
  const { item_data, prefectures_data } = props.modalData;
  return (
    <StyledModal
      title={<IntlMessages id="productDetail.StoreInventorySituation" />}
      visible={props.visible}
      footer={null}
      onCancel={props.handleCancel}
      width={600}
      bodyStyle={ModalBodyStyle}
    >
      <StockModalContents>
        <ItemDetail itemData={item_data} />
        <Notices />
        <StoreSearchByMap />
        <StoreSearchByList prefectures={prefectures_data} />
        <ToTop href="/store/cmdty/detail/4550002684822#rcDialogTitle0">
          <IntlMessages id="productDetail.toTop" />
        </ToTop>
      </StockModalContents>
    </StyledModal>
  );
};
export default ItemStockModal;
