import React, { Component } from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Modal } from "antd";
import ItemDetail from "./ItemDetail";
import Notices from "./notices";
import StoreSearchByMap from "./storeSearchByMap";
import StoreSearchByList from "./storeSearchByList";
import styled from "styled-components";

const antModalHeaderHeight = "54px";

const StyledModal = styled(Modal)`
  overflow: hidden;

  .ant-modal-header {
    height: ${antModalHeaderHeight};
    border-bottom: none;

    .ant-modal-title {
      span {
        font-weight: bold;
      }
    }
  }

  .ant-modal-content {
    max-height: 90vh;
    margin: auto;

    .ant-modal-body {
      max-height: calc(90vh - ${antModalHeaderHeight});
      padding-top: 0px;
      overflow-y: auto;
    }

    .ant-modal-close {
      color: #333;
      font-weight: 600;
      .ant-modal-close-x {
        font-size: 12px;
        i {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      }
    }
  }
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
    >
      <div>
        <ItemDetail itemData={item_data} />
        <Notices />
        <StoreSearchByMap />
        <StoreSearchByList prefectures={prefectures_data} />
        <ToTop href="/store/cmdty/detail/4550002684822#rcDialogTitle0">
          <IntlMessages id="productDetail.toTop" />
        </ToTop>
      </div>
    </StyledModal>
  );
};
export default ItemStockModal;
