import React, { Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Link } from "react-router-dom";
import { Modal } from "antd";

const ModalWrapper = styled.div`
  position: relative;
`;

const StyledLink = styled(Link)`
  font-size: 12px;
  font-weight: bold;
  color: rgb(96, 179, 250);
  position: absolute;
  top: 0;
  right: 5px;
  :hover {
    color: rgb(96, 179, 250);
  }
`;

const StyledModal = styled(Modal)`
  .ant-modal-body {
    padding: 30px 54px;
  }
`;

const DeleteConfirm = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

const DeleteButton = styled.p`
  max-width: 300px;
  margin: 20px auto 0;
  text-align: center;

  button {
    border: 1px solid rgb(153, 153, 153);
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(88, 88, 88, 0.3);
    font-size: 12px;
    width: 100%;
    padding: 10px;
    outline: none;
  }
`;

const DeleteCompleteTitle = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

const DeleteCompleteMessage = styled.p`
  text-align: center;
  font-size: 12px;
`;

class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      deleteCompleteVisible: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
      deleteCompleteVisible: true
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  deleteCompleteHandleCancel = e => {
    console.log(e);
    this.setState({
      deleteCompleteVisible: false
    });
  };

  render() {
    return (
      <ModalWrapper>
        <StyledLink to={"#"} onClick={this.showModal}>
          <IntlMessages id="delivery.deleteLink.delete" />
        </StyledLink>
        <StyledModal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          width={600}
        >
          <DeleteConfirm>
            <IntlMessages id="delivery.deleteConfirm" />
          </DeleteConfirm>
          <DeleteButton>
            <button to={"#"} onClick={this.handleOk}>
              <IntlMessages id="delivery.delete" />
            </button>
          </DeleteButton>
        </StyledModal>
        <StyledModal
          visible={this.state.deleteCompleteVisible}
          onCancel={this.deleteCompleteHandleCancel}
          footer={null}
          width={600}
        >
          <DeleteCompleteTitle>
            <IntlMessages id="delivery.deleteComplete" />
          </DeleteCompleteTitle>
          <DeleteCompleteMessage>
            <IntlMessages id="delivery.deleteCompleteMessage" />
          </DeleteCompleteMessage>
        </StyledModal>
      </ModalWrapper>
    );
  }
}

export default DeleteModal;
