import React, { Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Link } from "react-router-dom";
import { Modal } from "antd";

const DeleteModalWrapper = styled.div`
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

const DeleteConfirmMessage = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

const DeleteModalButton = styled.p`
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

class DeleteModal extends Component {
  state= {visible: false}

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <DeleteModalWrapper>
        <StyledLink to={"#"} onClick={this.showModal}>
          <IntlMessages id="delivery.deleteLink.delete" />
        </StyledLink>
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          width={600}
        >
          <DeleteConfirmMessage>
            <IntlMessages id="delivery.deleteLink.deleteConfirm" />
          </DeleteConfirmMessage>
          <DeleteModalButton>
            <button to={"#"} onClick={this.handleOk}>
              <IntlMessages id="favorite.delete" />
            </button>
          </DeleteModalButton>
        </Modal>
      </DeleteModalWrapper>
    );
  }
}

export default DeleteModal;
