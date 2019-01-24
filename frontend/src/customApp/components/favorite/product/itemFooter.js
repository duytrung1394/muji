import React, {Component} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Popconfirm, Icon, message, Modal, Button} from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const ProductItemButtonWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
`;

const ProductItemButton = styled.li`
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.05);
  text-align: center;
  list-style-type: none;
  list-style: none;

  &:nth-child(2n) {
    border-left: 1px solid #e5e5e5;
  }

  a,
  p {
    display: block;
    padding: 12px 24px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  a,
  a:hover {
    color: rgba(0, 0, 0, 0.65);
  }

  p {
    margin-bottom: 0;
  }

  i {
    position: absolute;
    height: 14px;
    font-size: 14px;
    font-weight: bold;
    margin: auto;
    top: 0px;
    right: 3%;
    bottom: 0px;
  }
`;

const buttonText = {
  add: "favorite.product.add",
  delete: "favorite.product.delete",
};

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

const LinkButton = ({ to, textId }) => {
  return (
    <ProductItemButton>
      <Link to={to}>
        <IntlMessages id={textId} />
        <Icon type="right" />
      </Link>
    </ProductItemButton>
  );
};

const DeleteModal = styled(Modal)`
  &&{
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

class ProductItemFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      deleteModalVisible: false,
    }
  }

  modalOpen = ()  => {
    this.setState({deleteModalVisible: true});
  };

  handleOk = () => {
    message.info('削除');
    this.setState({deleteModalVisible: false});
  }

  handleCancel = () => {
    this.setState({deleteModalVisible: false});
  }

  render () {
    const { item } = this.props;
    switch (item.favorite_type) {
      case 1:
        return (
          <ProductItemButtonWrapper>
            <ProductItemButton>
              <Link to={"#"} onClick={this.modalOpen}>
                <IntlMessages id={buttonText.delete} />
                <Icon type="right" />
              </Link>
            </ProductItemButton>
            <DeleteModal
              visible={this.state.deleteModalVisible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
              sidth={600}
            >
              <DeleteConfirmMessage>お気に入りから削除しますか？</DeleteConfirmMessage>
              <DeleteModalButton>
                <button to={"#"} onClick={this.handleOk}>削除する</button>
              </DeleteModalButton>
            </DeleteModal>
            <LinkButton to={"#"} textId={buttonText.add} />
          </ProductItemButtonWrapper>
        );
      case 2:
      case 3:
        return (
          <ProductItemButtonWrapper>
            <ProductItemButton>
              <Link to={"#"} onClick={this.modalOpen}>
                <IntlMessages id={buttonText.delete} />
                <Icon type="right" />
              </Link>
            </ProductItemButton>
            <DeleteModal
              visible={this.state.deleteModalVisible}
              // onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
              sidth={600}
            >
              <DeleteConfirmMessage>お気に入りから削除しますか？</DeleteConfirmMessage>
              <DeleteModalButton>
                <button to={"#"} onClick={this.handleOk}>削除する</button>
              </DeleteModalButton>
            </DeleteModal>
          </ProductItemButtonWrapper>
        );
    }
  }
}

export default ProductItemFooter;
