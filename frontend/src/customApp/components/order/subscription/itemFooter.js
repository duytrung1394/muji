import { Modal, message } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import React, { Component } from "react";
import styled from "styled-components";
import {
  ItemFooter as ItemFooterWrapper,
  ItemFooterButton
} from "../../shared/tabSlider/tabSliderItem";

const DeleteModalButton = styled.p`
  max-width: 300px;
  margin: 20px auto 0;
  text-align: center;

  button {
    border: 1px solid rgb(127, 0, 25);
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(88, 88, 88, 0.3);
    font-size: 12px;
    width: 100%;
    padding: 10px;
    outline: none;
  }

  button,
  button:hover,
  button:focus {
    color: rgb(127, 0, 25);
    text-decoration: none;
  }
`;

const DeleteConfirmMessage = styled.p`
  text-align: center;
`;

const DeleteModalWrapper = styled(Modal)`
  && {
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .ant-modal-content {
    width: 100%;

    & .ant-modal-body {
      padding: 16px;
    }
  }
`;

const DeleteModal = ({ visible, onOk, onCancel }) => {
  return (
    <DeleteModalWrapper
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
    >
      <DeleteConfirmMessage>
        <IntlMessages id="order.subscription.deleteConfirm" />
      </DeleteConfirmMessage>
      <DeleteModalButton>
        <button to={"#"} onClick={onOk}>
          <IntlMessages id="order.subscription.delete" />
        </button>
      </DeleteModalButton>
    </DeleteModalWrapper>
  );
};

class FavoriteItemFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      deleteModalVisible: false
    };
  }

  modalOpen = () => {
    this.setState({ deleteModalVisible: true });
  };

  handleOk = () => {
    message.info("削除");
    this.setState({ deleteModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ deleteModalVisible: false });
  };

  render() {
    const { type } = this.props;
    switch (type) {
      case 1:
        return (
          <ItemFooterWrapper>
            <ItemFooterButton
              text={<IntlMessages id="order.subscription.skip" />}
            />
            <ItemFooterButton
              text={<IntlMessages id="order.subscription.change" />}
            />
          </ItemFooterWrapper>
        );
      case 2:
        return (
          <ItemFooterWrapper>
            <ItemFooterButton
              text={<IntlMessages id="order.subscription.delete" />}
              onClick={this.modalOpen}
            />
            <DeleteModal
              visible={this.state.deleteModalVisible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            />
            <ItemFooterButton
              text={<IntlMessages id="order.subscription.resume" />}
            />
          </ItemFooterWrapper>
        );
      default:
        return null;
    }
  }
}

export default FavoriteItemFooter;
