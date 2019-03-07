import React, { Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Link } from "react-router-dom";
import { Modal } from "antd";

const Container = styled.div`
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
  .ant-modal-close-x {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

class DeleteLink extends Component {
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
        <StyledLink to={"#"} onClick={this.showModal}>
          <IntlMessages id="delivery.deleteAddressee" />
        </StyledLink>
        <StyledModal
          visible={this.state.deleteConfirmVisible}
          onCancel={this.handleCancel}
          footer={null}
          width={600}
        >
          <ModalTitle>
            <IntlMessages id="delivery.deleteConfirm" />
          </ModalTitle>
          <DeleteButton>
            <button to={"#"} onClick={this.handleOk}>
              <IntlMessages id="delivery.delete" />
            </button>
          </DeleteButton>
        </StyledModal>
        <StyledModal
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
        </StyledModal>
      </Container>
    );
  }
}

export default DeleteLink;
