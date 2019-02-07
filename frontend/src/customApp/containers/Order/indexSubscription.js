import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import actions from "../../redux/order/list/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import SubscriptionItem from "../../components/order/subscription/item";
import styled from "styled-components";
import { ContentAreaLayout } from "../../components/shared/panel/contentLayout";
import { TabSlider } from "../../components/shared/tabSlider";
import { Spin, message, Modal } from "antd";

const Title = styled.h1`
  line-height: 19px;
  width: 100%;
  color: rgb(0, 0, 0);
  font-size: 19px;
  letter-spacing: 0.25px;
  margin: 30px 0px 0px;
  padding: 0 50px;
`;

const tabNameIds = [
  "order.subscription.tab.continue",
  "order.subscription.tab.stopped"
];

const itemKeys = ["continue", "stopped"];

const ItemBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px;
`;

const ModalButton = styled.p`
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

const ConfirmMessage = styled.p`
  text-align: center;
`;

const ModalWrapper = styled(Modal)`
  && {
    top: 50%;
    padding-bottom: 0;
    margin-top: -100px;
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
    <ModalWrapper
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
    >
      <ConfirmMessage>
        <IntlMessages id="order.subscription.deleteConfirm" />
      </ConfirmMessage>
      <ModalButton>
        <button to={"#"} onClick={onOk}>
          <IntlMessages id="order.subscription.delete" />
        </button>
      </ModalButton>
    </ModalWrapper>
  );
};

const StopModal = ({ visible, onOk, onCancel }) => {
  return (
    <ModalWrapper
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
    >
      <ConfirmMessage>
        <IntlMessages id="order.subscription.stopConfirm" />
      </ConfirmMessage>
      <ModalButton>
        <button to={"#"} onClick={onOk}>
          <IntlMessages id="order.subscription.stop" />
        </button>
      </ModalButton>
    </ModalWrapper>
  );
};

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: [],
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

  stopModalOpen = () => {
    this.setState({ stopModalVisible: true });
  };

  stopModalHandleOk = () => {
    message.info("停止");
    this.setState({ stopModalVisible: false });
  };

  stopModalHandleCancel = () => {
    this.setState({ stopModalVisible: false });
  };

  // React methods
  componentDidMount() {
    this.props.fetchRequest();
  }

  // React.render
  render() {
    const {
      // types
      total,
      entities,
      fetching,
      destroying,
      // react-router
      history,
      intl: { formatMessage }
    } = this.props;

    return (
      <ContentAreaLayout>
        <Title>
          <IntlMessages id="order.subscription.name" />
        </Title>
        <Spin size="large" spinning={fetching}>
          <TabSlider tabNameIds={tabNameIds}>
            {itemKeys.map((itemKey, index) => {
              let popoverActions = [];
              let footerActions = [];

              if (itemKey === "continue") {
                popoverActions.push({
                  name: formatMessage({ id: "order.subscription.stop" }),
                  onClick: this.stopModalOpen
                });
                footerActions.push({
                  name: formatMessage({ id: "order.subscription.skip" })
                });
                footerActions.push({
                  name: formatMessage({ id: "order.subscription.change" })
                });
              } else if (itemKey === "stopped") {
                footerActions.push({
                  name: formatMessage({ id: "order.subscription.delete" }),
                  onClick: this.modalOpen
                });
                footerActions.push({
                  name: formatMessage({ id: "order.subscription.resume" })
                });
              }

              return (
                <Fragment key={index}>
                  <ItemBox>
                    {entities[itemKey] &&
                      entities[itemKey].map((item, index) => {
                        return (
                          <SubscriptionItem
                            key={index}
                            item={item}
                            popoverActions={popoverActions}
                            footerActions={footerActions}
                          />
                        );
                      })}
                  </ItemBox>
                </Fragment>
              );
            })}
          </TabSlider>
          <DeleteModal
            visible={this.state.deleteModalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            component={this}
          />
          <StopModal
            visible={this.state.stopModalVisible}
            onOk={this.stopModalHandleOk}
            onCancel={this.stopModalHandleCancel}
            component={this}
          />
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Order.List.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetchSubscription.request,
  destroyRequest: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(Index);
