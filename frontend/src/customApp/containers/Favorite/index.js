import { connect } from "react-redux";
import { ContentAreaLayout } from "../../components/shared/panel/contentLayout";
import { injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Spin, Modal } from "antd";
import { TabSlider } from "../../components/shared/tabSlider";
import actions from "../../redux/favorite/list/actions";
import FavoriteItem from "../../components/favorite/favoriteItem";
import IntlMessages from "../../../components/utility/intlMessages";
import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { OutlineButton } from "../../components/shared/form/button";

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
  "favorite.tab.product",
  "favorite.tab.event",
  "favorite.tab.article"
];

const itemKeys = ["products", "events", "articles"];

const ItemBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px;
`;

const DeliveryList = styled.div`
  margin-top: 20px;
  padding: 0 50px;
  text-align: right;
  font-size: 12px;
  font-weight: 600;

  a,
  a:hover,
  a:focus {
    color: rgb(96, 179, 250);
    text-decoration: none;
  }
`;

const ModalButton = styled.div`
  text-align: center;
`;

const ModalMessage = styled.p`
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

const ModalTitle = styled.p`
  font-weight: bold;
  text-align: center;
`;

const DeleteConfirmModal = ({ visible, onOk, onCancel }) => {
  return (
    <ModalWrapper
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
    >
      <ModalTitle>
        <IntlMessages id="favorite.deleteConfirmModal.title" />
      </ModalTitle>
      <ModalButton>
        <OutlineButton to={"#"} onClick={onOk}>
          <IntlMessages id="favorite.delete" />
        </OutlineButton>
      </ModalButton>
    </ModalWrapper>
  );
};

const DeleteCompleteModal = ({ visible, onCancel }) => {
  return (
    <ModalWrapper
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
    >
      <ModalTitle>
        <IntlMessages id="favorite.deleteCompleteModal.title" />
      </ModalTitle>
      <ModalMessage>
        <IntlMessages id="favorite.deleteCompleteModal.message" />
      </ModalMessage>
    </ModalWrapper>
  );
};

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: [],
      deleteModalVisible: false,
      deleteCompleteModalVisible: false
    };
  }

  deleteModalOpen = () => {
    this.setState({ deleteModalVisible: true });
  };

  handleDeleteConfirmModalOk = () => {
    this.setState({
      deleteModalVisible: false,
      deleteCompleteModalVisible: true
    });
  };

  handleDeleteConfirmModalCancel = () => {
    this.setState({ deleteModalVisible: false });
  };

  handleDeleteCompleteModalCancel = () => {
    this.setState({ deleteCompleteModalVisible: false });
  };

  // React methods
  componentDidMount() {
    this.fetchRequest(this.props);
  }

  fetchRequest = props => {
    // ページングもケースバイケースなのでコンポーネント毎に実装する
    props.fetchRequest({
      page: 1,
      filters: JSON.stringify(props.filters || [])
    });
  };

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
          <IntlMessages id="favorite.name" />
        </Title>
        <Spin size="large" spinning={fetching}>
          <TabSlider tabNameIds={tabNameIds}>
            {itemKeys.map((itemKey, index) => {
              let popoverActions = [];
              let footerActions = [];

              footerActions.push({
                name: formatMessage({ id: "favorite.delete" }),
                onClick: this.deleteModalOpen
              });

              if (itemKey === "products") {
                popoverActions.push({
                  name: formatMessage({ id: "favorite.addDeriveryList" })
                });
                footerActions.push({
                  name: formatMessage({ id: "favorite.add" })
                });
              }

              return (
                <Fragment key={index}>
                  {itemKey === "products" && (
                    <DeliveryList>
                      <Link to={"#"} draggable={false}>
                        <IntlMessages id="favorite.deriveryList" />
                      </Link>
                    </DeliveryList>
                  )}
                  <ItemBox>
                    {entities[itemKey] &&
                      entities[itemKey].map((item, index) => {
                        return (
                          <Fragment key={index}>
                            <FavoriteItem
                              item={item}
                              popoverActions={popoverActions}
                              footerActions={footerActions}
                              itemKey={itemKey}
                            />
                          </Fragment>
                        );
                      })}
                  </ItemBox>
                </Fragment>
              );
            })}
          </TabSlider>
          <DeleteConfirmModal
            visible={this.state.deleteModalVisible}
            onOk={this.handleDeleteConfirmModalOk}
            onCancel={this.handleDeleteConfirmModalCancel}
          />
          <DeleteCompleteModal
            visible={this.state.deleteCompleteModalVisible}
            onCancel={this.handleDeleteCompleteModalCancel}
          />
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Favorite.List.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request,
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
