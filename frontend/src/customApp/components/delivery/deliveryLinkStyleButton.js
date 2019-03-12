import React, { Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Modal } from "antd";
import { OutlineButton, LinkStyleButton } from "../shared/form/button";

const Container = styled.div`
  position: relative;
`;

const DeleteLinkStyleButton = styled(LinkStyleButton)`
  && {
    position: absolute;
    top: -7px;
    right: 5px;
  }
`;

const ModalTitle = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

const ModalMessage = styled.p`
  text-align: center;
  font-size: 12px;
`;

const DeleteButton = styled.p`
  max-width: 300px;
  margin: 30px auto 0;
  text-align: center;
`;

class DeliveryLinkStyleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteConfirmVisible: false,
      deleteCompleteVisible: false
    };
  }

  showModal = () => {
    this.setState({
      deleteConfirmVisible: true
    });
  };

  handleOk = () => {
    this.setState({
      deleteConfirmVisible: false,
      deleteCompleteVisible: true
    });
  };

  handleCancel = () => {
    this.setState({
      deleteConfirmVisible: false
    });
  };

  handleDeleteCompleteCancel = () => {
    this.setState({
      deleteCompleteVisible: false
    });
  };

  render() {
    return (
      <Container>
        <DeleteLinkStyleButton
          to={"#"}
          onClick={this.showModal}
          color="rgb(96, 179, 250)"
        >
          <IntlMessages id="delivery.deleteLink.delete" />
        </DeleteLinkStyleButton>
        <Modal
          visible={this.state.deleteConfirmVisible}
          onCancel={this.handleCancel}
          footer={null}
          width={600}
        >
          <ModalTitle>
            <IntlMessages id="delivery.deleteConfirm" />
          </ModalTitle>
          <DeleteButton>
            <OutlineButton to={"#"} onClick={this.handleOk}>
              <IntlMessages id="delivery.button.delete" />
            </OutlineButton>
          </DeleteButton>
        </Modal>
        <Modal
          visible={this.state.deleteCompleteVisible}
          onCancel={this.handleDeleteCompleteCancel}
          footer={null}
          width={600}
        >
          <ModalTitle>
            <IntlMessages id="delivery.deleteComplete" />
          </ModalTitle>
          <ModalMessage>
            <IntlMessages id="delivery.deleteCompleteMessage" />
          </ModalMessage>
        </Modal>
      </Container>
    );
  }
}

export default DeliveryLinkStyleButton;
